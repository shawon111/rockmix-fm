const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // From users.json
  username: {
    type: String,
    trim: true,
    unique: true,
    sparse: true
  },
  first_name: {
    type: String,
    trim: true
  },
  last_name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  avatar_url: {
    type: String
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other', null]
  },
  language: {
    type: String,
    default: 'en'
  },
  country: {
    type: String
  },
  timezone: {
    type: String
  },
  stripe_id: {
    type: String
  },
  card_brand: {
    type: String
  },
  card_last_four: {
    type: String
  },
  available_space: {
    type: Number
  },
  email_verified_at: {
    type: Date
  },
  remember_token: {
    type: String
  },
  legacy_permissions: {
    type: String
  },

  // From user_profiles.json
  header_image: {
    type: String
  },
  header_colors: [{
    type: String
  }],
  description: {
    type: String
  },
  city: {
    type: String
  },
  profile_country: {
    type: String
  },

  // References
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist'
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
userSchema.index({ email: 1 });
userSchema.index({ username: 1 });
userSchema.index({ artist: 1 });

// Virtual for full name
userSchema.virtual('full_name').get(function() {
  if (this.first_name && this.last_name) {
    return `${this.first_name} ${this.last_name}`;
  }
  return this.first_name || this.last_name || this.username || 'Unknown User';
});

// Virtual for display name
userSchema.virtual('display_name').get(function() {
  return this.username || this.full_name || this.email;
});

// Ensure virtuals are serialized
userSchema.set('toJSON', { virtuals: true });
userSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('User', userSchema); 