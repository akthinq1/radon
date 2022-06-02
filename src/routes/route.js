const { application } = require('express');
const express = require('express');

const lod = require('lodash');

const router = express.Router();

const externalModule = require('../logger/logger');

const helper = require('../util/helpers');

const format= require('../validator/formatter');

router.get('/test-me', function (req, res) {
   
    externalModule.welcome()

    helper.helpers1()

    helper.helpers2()

    helper.helpers3()

    format.formatters()

    format.lower()

    format.upper()

    res.send('My first ever api!')
});

router.get('/hello', function(req, res){
    
    // Question 4.a of Assignement node_modules

    const arr = ['Jan','Feb','Mar','Apr','May','Jun','jul','Aug','Sept','Oct','Nov','Dec'];

    console.log(lod.chunk(arr, 3));
    /////////////////////////////////////////////////////////////////

    // Question 4.b of Assignement node_modules

    const oddNum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    
    const newOddNum = lod.tail(oddNum);

    console.log(newOddNum);
    ///////////////////////////////////////////////////////////////////

    // Question 4.c of Assignement node_modules

     const arr1 = [1, 2, 3, 3];
     const arr2 = [2, 4, 5, 6, 4];
     const arr3 = [4, 8, 8, 7, 1,9] ;
     const arr4 = [2, 7, 6, 6, 8];
     const arr5 = [2, 4, 5, 5, 0];

     const finalArr = lod.union(arr1, arr2, arr3, arr4, arr5);

     console.log(finalArr)
     ////////////////////////////////////////////////////////////////////////

      // Question 4.d of Assignement node_modules

      const newPairs = [ ["horror","The Shining"], ["dram","Titanic"], ["thriller","Shutter Island"], ["fantasy","Pans Labyrinth"]];
       
      const newObj = lod.fromPairs(newPairs);

      console.log(newObj)

/////////////////////////////////////////////////////////////////////////////

    console.log("my good");
    res.send("hello!");
});




module.exports = router;
