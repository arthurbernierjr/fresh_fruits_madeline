const express = require('express');
const Fruit = require("../models/fruit");
const Basket = require("../models/basket");

const router = express.Router();
// Index

router.get('/', (req, res) => {
    const query = Basket.find({}).populate('fruits')
    query.exec((err, baskets) => {
        if(err){
            res.status(400).json({ err })
        }else {
            res.send(baskets)
        }
    })
})


// Create
router.post('/', (req, res) => {
    Basket.create(req.body)
        .then(() => {
            res.redirect('/fruits')
        })
        .catch((err) => {
            res.status(400).json({ err })
        })
})

// addFruit

router.put('/:id/addFruits', (req, res) => {
    Basket.findByIdAndUpdate(req.params.id, { fruits: { $addToSet: req.body._id }}, { new: true })
        .then(() =>{
            res.redirect('/fruits')
        })
        .catch((error) => {
            res.status(400).json(error)
        })
})


// Show