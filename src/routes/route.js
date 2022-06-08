const express = require('express');
const router = express.Router();

const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createNewBook", BookController.createNewBook  )

router.get("/bookList", BookController.bookList )

router.post("/getBooksInYear", BookController.getBooksInYear )

router.post("getParticularBooks", BookController.getParticularBooks)

router.get("/getXINRbooks",BookController.getXINRbooks)

router.get("/getRandomBooks",BookController.getRandomBooks)

router.get("/getAllBooks", BookController.getAllBooks )

module.exports = router;