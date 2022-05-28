const router = require('express').Router();
const Category = require('../models/Category')

router.post("/", async (req, res) => {
    const newCat = new Category(req.body)
    try {
        const savedCat = await newCat.save()
        res.status(200).send(savedCat)
    } catch (err) {
        res.status(500).json(err)
    }
})

//Get all categories
router.get("/", async (req, res) => {
    try {
        const cats = await Category.find()
        res.status(200).send(cats)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;