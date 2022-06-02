// problem2

// Module 2 : src/util/helper.js

// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Roadon, W3D1, the topic for today is Nodejs module system’
	
// 	Call all these functions in route.js inside the test-me route handler


const printDate = function(){
    let currdate = new Date()
    console.log('the current date' + ' ' + currdate )

}

const printMonth = function() {
    let currdate = new Date()
    let currMonth = currdate.getMonth() + 1
    console.log('The current month is '+currMonth)
}

const getBatchInfo = function() {
  let batchInformation = 'Radon, W3D4, the topic for today is Nodejs module system assignment discussion'
  console.log(batchInformation)
}
// const printMonth = function(){
    
//     console.log("the current month" + ' ' + " June");
// }

// const getBatchInfo = function(){
//     console.log('batch name : Radon' ,
//      'week : W3', 
//      'Day : 3', 
//      "the topic being taught today is : Nodejs module system");
//}

module.exports.helpers1 = printDate;

module.exports.helpers2 = printMonth;

module.exports.helpers3 = getBatchInfo;