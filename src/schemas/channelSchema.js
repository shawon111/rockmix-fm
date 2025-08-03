const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  config: {
    contentType: {
      type: String,
      enum: ['listAll', 'manual'],
      default: 'listAll'
    },
    contentModel: {
      type: String,
      enum: ['track', 'genre', 'channel'],
      default: 'track'
    },
    contentOrder: {
      type: String,
      default: 'created_at:desc'
    },
    layout: {
      type: String,
      enum: ['trackTable', 'grid', 'list'],
      default: 'trackTable'
    },
    carouselWhenNested: {
      type: Boolean,
      default: false
    },
    seoTitle: {
      type: String
    },
    seoDescription: {
      type: String
    },
    hideTitle: {
      type: Boolean,
      default: false
    },
    autoUpdateMethod: {
      type: String
    },
    autoUpdateValue: {
      type: String
    },
    connectToGenreViaUrl: {
      type: Boolean,
      default: false
    },
    lockSlug: {
      type: Boolean,
      default: false
    },
    preventDeletion: {
      type: Boolean,
      default: false
    }
  },

  // References
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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
channelSchema.index({ name: 1 });
channelSchema.index({ slug: 1 });
channelSchema.index({ user_id: 1 });
channelSchema.index({ 'config.contentType': 1 });
channelSchema.index({ 'config.contentModel': 1 });

// Virtual for is dynamic
channelSchema.virtual('is_dynamic').get(function() {
  return this.config.contentType === 'listAll';
});

// Virtual for is manual
channelSchema.virtual('is_manual').get(function() {
  return this.config.contentType === 'manual';
});

// Virtual for is protected
channelSchema.virtual('is_protected').get(function() {
  return this.config.preventDeletion === true;
});

// Method to get content based on configuration
channelSchema.methods.getContent = async function() {
  // This method would be implemented based on the contentModel and contentOrder
  // For now, it's a placeholder for the logic to fetch content
  return [];
};

// Ensure virtuals are serialized
channelSchema.set('toJSON', { virtuals: true });
channelSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Channel', channelSchema); 