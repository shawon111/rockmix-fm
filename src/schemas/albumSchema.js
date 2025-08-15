const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  release_date: {
    type: Date
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  spotify_id: {
    type: String,
    unique: true,
    sparse: true
  },
  spotify_popularity: {
    type: Number
  },
  fully_scraped: {
    type: Boolean,
    default: false
  },
  auto_update: {
    type: Boolean,
    default: true
  },
  temp_id: {
    type: String
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
  owner_id: {
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
albumSchema.index({ name: 1 });
albumSchema.index({ owner_id: 1 });
albumSchema.index({ release_date: -1 });
albumSchema.index({ plays: -1 });
albumSchema.index({ views: -1 });

// Virtual for tracks
albumSchema.virtual('tracks', {
  ref: 'Track',
  localField: '_id',
  foreignField: 'album'
});

// Virtual for formatted release date
albumSchema.virtual('release_date_formatted').get(function() {
  if (!this.release_date) return null;
  return this.release_date.toLocaleDateString();
});

// Ensure virtuals are serialized
albumSchema.set('toJSON', { virtuals: true });
albumSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Album', albumSchema); 