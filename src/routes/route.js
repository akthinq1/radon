const express = require('express');
const router = express.Router();
const BookAuthorController= require("../controllers/bookAuthorController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post( "/createNewAuthor", BookAuthorController.createNewAuthor )

router.post( "/createNewBook" , BookAuthorController.createNewBook )

router.get('/getBooksbyChetanBhagat' , BookAuthorController.getBooksbyChetanBhagat)

router.get('/authorOfBookUpdate' , BookAuthorController.authorOfBookUpdate)

module.exports = router;