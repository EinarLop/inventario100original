const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const watchSchema = new Schema({
    model: { type: String, required: true },
    quantity: { type: Number, required: true },
    brand: { type: String, required: true },
    location: { type: String, required: true },
    url: { type: String, required: true },


}, {
    timestamps: true,
});

const Watch = mongoose.model('Watch', watchSchema);

module.exports = Watch;