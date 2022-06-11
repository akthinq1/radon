const express = require('express');
const router = express.Router();

const mainController= require("../controllers/mainController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/about", mainController.about)

router.get("/login",  mainController.login)

router.get("/viewProducts",  mainController.viewProducts)


module.exports = router;