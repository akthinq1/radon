const express = require('express');

const router = express.Router();


/////////////////////////////////////////////////////////

//Question1

router.get('/movies', function (req, res) {

    let movies = 
    ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

    res.send(movies)
});

/////////////////////////////////////////////////////////

//Question2

router.get('/movies/:indexNumber', function (req, res) {

    const value = req.params.index;
    let movies = 
    ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

    res.send(movies[value])
});

//////////////////////////////////////////////////////////////

// Question3

router.get('/movies2/:indexNumber', function (req, res){

    const valu = req.params.index;
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings',  'Batman begins']
    let displayMoive
    if(valu < movies.length){
        res.send(movies[valu])
    }else{
        res.send("use a valid index number")
    }
    
});

//////////////////////////////////////////////////////////////////

//Question4

router.get('/films', function(req,res){
    const films =  [ {
          "id": 1,
          "name": "The Shining"
         }, {
          "id": 2,
          "name": "Incendies"
         }, {
          "id": 3,
          "name": "Rang de Basanti"
         }, {
          "id": 4,
          "name": "Finding Nemo"
         }]
      res.send(films)      
  });

  ////////////////////////////////////////////////////////////////

  //Question.5

  router.get('/films/:filmId', function(req,res){
    const films =  [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
    let displayingFilm

    if(req.params.filmId <= films.length && req.params.filmId != 0){
        for(index = 0; index< films.length; index++){
            if(req.params.filmId == films[index].id){
                displayingFilm = films[index].name
                break
            }
        }
    }else{
        displayingFilm = "no film at this index"
    }

    res.send(displayingFilm)
});



module.exports = router;
