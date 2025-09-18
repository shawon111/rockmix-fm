const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  public: {
    type: Boolean,
    default: true
  },
  collaborative: {
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
  spotify_id: {
    type: String,
    unique: true,
    sparse: true
  },

  // References
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tracks: [{
    track: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Track'
    },
    position: {
      type: Number,
      default: 0
    },
    added_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    added_at: {
      type: Date,
      default: Date.now
    }
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
playlistSchema.index({ owner_id: 1 });
playlistSchema.index({ public: 1 });
playlistSchema.index({ collaborative: 1 });
playlistSchema.index({ plays: -1 });
playlistSchema.index({ views: -1 });
playlistSchema.index({ created_at: -1 });

// Virtual for track count
playlistSchema.virtual('track_count').get(function() {
  return this.tracks.length;
});

// Virtual for duration (sum of all track durations)
playlistSchema.virtual('duration').get(function() {
  if (!this.tracks || this.tracks.length === 0) return 0;
  return this.tracks.reduce((total, trackItem) => {
    return total + (trackItem.track?.duration || 0);
  }, 0);
});

// Virtual for formatted duration
playlistSchema.virtual('duration_formatted').get(function() {
  const seconds = Math.floor(this.duration / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
});

// Method to add track to playlist
playlistSchema.methods.addTrack = function(trackId, addedBy, position = null) {
  const newPosition = position !== null ? position : this.tracks.length + 1;
  
  this.tracks.push({
    track: trackId,
    position: newPosition,
    added_by: addedBy,
    added_at: new Date()
  });
  
  return this.save();
};

// Method to remove track from playlist
playlistSchema.methods.removeTrack = function(trackId) {
  this.tracks = this.tracks.filter(trackItem => trackItem.track.toString() !== trackId.toString());
  return this.save();
};

// Method to reorder tracks
playlistSchema.methods.reorderTracks = function(trackIds) {
  const trackMap = new Map();
  this.tracks.forEach(trackItem => {
    trackMap.set(trackItem.track.toString(), trackItem);
  });
  
  this.tracks = trackIds.map((trackId, index) => {
    const trackItem = trackMap.get(trackId.toString());
    if (trackItem) {
      trackItem.position = index + 1;
      return trackItem;
    }
  }).filter(Boolean);
  
  return this.save();
};

// Ensure virtuals are serialized
playlistSchema.set('toJSON', { virtuals: true });
playlistSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Playlist', playlistSchema); 