const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// Create an item
router.post('/items', async (req, res) => {
    try {
        const item = new Item(req.body);
        await item.save();
        res.status(201).send(item);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Read all items
router.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.send(items);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Update an item
router.patch('/items/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!item) {
            return res.status(404).send();
        }
        res.send(item);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete an item
router.delete('/items/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) {
            return res.status(404).send();
        }
        res.send(item);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
