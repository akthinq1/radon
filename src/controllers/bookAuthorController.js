const BookModel = require("../models/bookModel");
const AuthorModel = require("../models/authorModel")

let createNewAuthor = async function(req, res) {
    let newData = req.body
    let saveData = await AuthorModel.create(newData)
    res.send(saveData)
}

let createNewBook = async function(req, res) {
    let newData = req.body
    let saveData = await BookModel.create(newData)
    res.send(saveData)
}

let getBooksbyChetanBhagat = async function(req,res) {
    let data = await AuthorModel.find ( { author_name: "Chetan Bhagat"} ).select("author_id")
    let bookData = await BookModel.find( { author_id: data[0].author_id})
    res.send( {msg: bookData} )
}

let authorOfBookUpdate = async function(req,res) {
    let data = await AuthorModel.findOneAndUpdate( {name:"Two states"}, {$set: { prices:100}}, {new:true} )
    let authorData = await AuthorModel.find( {author_id:data.author_id} ).select("author_name")
    let price = data.prices
    res.send( {msg: authorData } )
}
 

module.exports.createNewAuthor = createNewAuthor
module.exports.createNewBook = createNewBook 
module.exports.getBooksbyChetanBhagat = getBooksbyChetanBhagat
module.exports.authorOfBookUpdate = authorOfBookUpdate

