const mongoose = require('mongoose');

const billingPlanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: 'USD'
  },
  currency_symbol: {
    type: String,
    default: '$'
  },
  interval: {
    type: String,
    enum: ['day', 'week', 'month', 'year'],
    default: 'month'
  },
  interval_count: {
    type: Number,
    default: 1
  },
  parent_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BillingPlan'
  },
  legacy_permissions: {
    type: String
  },
  uuid: {
    type: String,
    unique: true
  },
  paypal_id: {
    type: String
  },
  recommended: {
    type: Boolean,
    default: false
  },
  free: {
    type: Boolean,
    default: false
  },
  show_permissions: {
    type: Boolean,
    default: false
  },
  features: [{
    type: String
  }],
  position: {
    type: Number,
    default: 0
  },
  available_space: {
    type: Number
  },
  hidden: {
    type: Boolean,
    default: false
  },

  // Timestamps
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

// Indexes
billingPlanSchema.index({ uuid: 1 });
billingPlanSchema.index({ recommended: 1 });
billingPlanSchema.index({ free: 1 });
billingPlanSchema.index({ hidden: 1 });
billingPlanSchema.index({ position: 1 });

// Virtual for formatted price
billingPlanSchema.virtual('formatted_price').get(function() {
  return `${this.currency_symbol}${this.amount}`;
});

// Virtual for interval description
billingPlanSchema.virtual('interval_description').get(function() {
  if (this.interval_count === 1) {
    return this.interval;
  }
  return `${this.interval_count} ${this.interval}s`;
});

// Virtual for is free plan
billingPlanSchema.virtual('is_free').get(function() {
  return this.free === true || this.amount === 0;
});

// Virtual for is paid plan
billingPlanSchema.virtual('is_paid').get(function() {
  return !this.is_free;
});

// Ensure virtuals are serialized
billingPlanSchema.set('toJSON', { virtuals: true });
billingPlanSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('BillingPlan', billingPlanSchema); 