const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")

const createNewBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList = async function (req, res) {
    let allBooks = await BookModel.find().select({ bookName: 1, authorName: 1, _id: 0})
    res.send({msg: allBooks})
}

const getBooksInYear = async function (req, res) {
    let publishingYear = req.body.year
    let booksInYear = await BookModel.find({"year": publishingYear})
    res.send({msg: booksInYear})
}

const getParticularBooks =async function(req, res){
    let fetch = req.body
    let particularBooks = await BookModel.find({ $or:[{ bookName: fetch.bookName }, {tags: fetch.tags}, {totalPages: fetch.totalPages} ]})
    res.send({msg: particularBooks})
}

const getXINRbooks = async function(req, res) {
    let inrBooks = await BookModel.find({ $or: [{ "price.indianPrice": {$eq: "120INR"}}, {"price.indianPrice": {$eq: "999INR"} }]})

    res.send({msg: inrBooks})
}

const getRandomBooks = async function (req,res) {
    let randomBooks = await BookModel.find({ $or: [{totalPages: {$gt: "400"}}, {stcokAvailable: true}]})
    return res.send({msg: randomBooks})
}

const getAllBooks= async function (req, res) {
    let allBooks= await BookModel.find()
    res.send({msg: allBooks})
}

module.exports.createNewBook= createNewBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRbooks = getXINRbooks
module.exports.getRandomBooks = getRandomBooks
module.exports.getAllBooks= getAllBooks