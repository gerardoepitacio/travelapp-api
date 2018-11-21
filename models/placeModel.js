var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var placeSchema = new Schema({
    placeId: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
      },
      createdAt : { type: Date, required: true, default: Date.now() },
      updatedAt : { type: Date, required: true, default: Date.now() },
    postedBy: {
        urlImageProfile: String,
        nameProfile: String
    },
    isFavorite: String,
    urlImagePlace: String,
    latitude: Number,
    longitude: Number,
    likes: Number,
    namePlace: String,
    description: String,
    totalComments: Number
});

var Places = mongoose.model('Places', placeSchema);
module.exports = Places;