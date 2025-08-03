const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  display_name: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String
  },
  popularity: {
    type: Number,
    default: 0
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
genreSchema.index({ name: 1 });
genreSchema.index({ display_name: 1 });
genreSchema.index({ popularity: -1 });

// Virtual for tracks
genreSchema.virtual('tracks', {
  ref: 'Track',
  localField: '_id',
  foreignField: 'genres'
});

// Ensure virtuals are serialized
genreSchema.set('toJSON', { virtuals: true });
genreSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Genre', genreSchema); 