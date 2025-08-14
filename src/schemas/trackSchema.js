import mongoose from "mongoose";

const trackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  album_name: {
    type: String,
    trim: true
  },
  number: {
    type: String
  },
  duration: {
    type: Number, 
    default: 0
  },
  youtube_id: {
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
  url: {
    type: String
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  plays: {
    type: Number,
    default: 0
  },
  auto_update: {
    type: Boolean,
    default: true
  },
  temp_id: {
    type: String
  },

  // References
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Album'
  },
  artists: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist'
  }],
  genres: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genre'
  }],

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
trackSchema.index({ name: 1 });
trackSchema.index({ owner_id: 1 });
trackSchema.index({ album: 1 });
trackSchema.index({ artists: 1 });
trackSchema.index({ genres: 1 });
trackSchema.index({ plays: -1 });
trackSchema.index({ created_at: -1 });

// Virtual for duration in seconds
trackSchema.virtual('duration_seconds').get(function() {
  return Math.floor(this.duration / 1000);
});

// Virtual for formatted duration (MM:SS)
trackSchema.virtual('duration_formatted').get(function() {
  const seconds = Math.floor(this.duration / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
});

// Virtual for playlists (will be populated via playlist_track relationship)
trackSchema.virtual('playlists', {
  ref: 'Playlist',
  localField: '_id',
  foreignField: 'tracks'
});

// Ensure virtuals are serialized
trackSchema.set('toJSON', { virtuals: true });
trackSchema.set('toObject', { virtuals: true });

export default trackSchema; 