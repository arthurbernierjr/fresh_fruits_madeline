const mongoose = require("./connection");

const { Schema, model } = mongoose;

const basketSchema = new Schema ({
    material: String,
    color: String,
    fruits: [{ type: Schema.Types.ObjectId, ref: 'Fruit'}]
}, 
{ timestamps: true }
)

const Basket = model('Basket', basketSchema)

module.exports = Basket;