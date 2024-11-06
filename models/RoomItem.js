const mongoose = require('mongoose');

const roomItemSchema = new mongoose.Schema({
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel', // Odniesienie do modelu Hotel, aby powiązać pokój z konkretnym hotelem
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        enum: ['single', 'double', 'suite', 'penthouse', 'family'], // Rodzaj pokoju
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    pricePerNight: {
        type: Number,
        required: true,
        min: 0
    },
    maxGuests: {
        type: Number,
        required: true,
        min: 1 // Minimalna liczba gości to 1
    },
    amenities: [{
        type: String,
        enum: ['Wi-Fi', 'airConditioning', 'tv', 'minibar', 'parking', 'pool', 'gym']
    }],
    availability: {
        type: Boolean,
        required: true,
        default: true // Domyślnie pokój jest dostępny
    },
    images: [{
        type: String // URL obrazu pokoju (może być link do zewnętrznego serwera)
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Tworzenie modelu na podstawie schema
const RoomItem = mongoose.model('RoomItem', roomItemSchema);

module.exports = RoomItem;
