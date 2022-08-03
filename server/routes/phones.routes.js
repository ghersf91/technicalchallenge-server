const phones = require('./../db/phones.json')
const router = require("express").Router()

router.get("/", (req, res) => {
    res.json(phones)
})

router.get("/:id", (req, res) => {
    const { id } = req.params
    const found = phones.find(x => x.id == id);
    console.log(found)
    res.json(found)
})


module.exports = router