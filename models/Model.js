// schema for smart link shortener service
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const modelSchema = new Schema({
    slug: { type: String, required: true },
    url: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Model = mongoose.model("Model", modelSchema);
module.exports = Model;