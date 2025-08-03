const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  gateway_name: {
    type: String,
    default: 'none'
  },
  gateway_id: {
    type: String
  },
  quantity: {
    type: Number,
    default: 1
  },
  description: {
    type: String
  },
  trial_ends_at: {
    type: Date
  },
  ends_at: {
    type: Date
  },
  renews_at: {
    type: Date
  },

  // References
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  plan_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BillingPlan',
    required: true
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
subscriptionSchema.index({ user_id: 1 });
subscriptionSchema.index({ plan_id: 1 });
subscriptionSchema.index({ gateway_id: 1 });
subscriptionSchema.index({ ends_at: 1 });
subscriptionSchema.index({ renews_at: 1 });

// Virtual for subscription status
subscriptionSchema.virtual('status').get(function() {
  const now = new Date();
  
  if (this.ends_at && this.ends_at < now) {
    return 'cancelled';
  }
  
  if (this.trial_ends_at && this.trial_ends_at > now) {
    return 'trial';
  }
  
  return 'active';
});

// Virtual for is active
subscriptionSchema.virtual('is_active').get(function() {
  return this.status === 'active' || this.status === 'trial';
});

// Virtual for is cancelled
subscriptionSchema.virtual('is_cancelled').get(function() {
  return this.status === 'cancelled';
});

// Virtual for is trial
subscriptionSchema.virtual('is_trial').get(function() {
  return this.status === 'trial';
});

// Ensure virtuals are serialized
subscriptionSchema.set('toJSON', { virtuals: true });
subscriptionSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Subscription', subscriptionSchema); 