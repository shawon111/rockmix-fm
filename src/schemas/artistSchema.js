const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  spotify_id: {
    type: String,
    unique: true,
    sparse: true
  },
  spotify_followers: {
    type: Number
  },
  spotify_popularity: {
    type: Number
  },
  image_small: {
    type: String
  },
  image_large: {
    type: String
  },
  fully_scraped: {
    type: Boolean,
    default: false
  },
  auto_update: {
    type: Boolean,
    default: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  views: {
    type: Number,
    default: 0
  },
  plays: {
    type: Number,
    default: 0
  },

  // References
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
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
artistSchema.index({ name: 1 });
artistSchema.index({ verified: 1 });
artistSchema.index({ plays: -1 });
artistSchema.index({ views: -1 });

// Virtual for tracks (will be populated via artist_track relationship)
artistSchema.virtual('tracks', {
  ref: 'Track',
  localField: '_id',
  foreignField: 'artists'
});

// Virtual for albums
artistSchema.virtual('albums', {
  ref: 'Album',
  localField: '_id',
  foreignField: 'owner_id'
});

// Ensure virtuals are serialized
artistSchema.set('toJSON', { virtuals: true });
artistSchema.set('toObject', { virtuals: true });