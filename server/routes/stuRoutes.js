
const express = require('express');  
const route = express.Router(); 
const stuController = require('../controllers/stuController')

// admin data login
route.post('/adminlog', stuController.adminLog); 

route.get('/home', stuController.homePg)
route.post('/save', stuController.savePg)
route.get('/display', stuController.displayPg)
route.post('/search', stuController.dataSearch)

route.get('/updatedata', stuController.updateDisplay)  // update jsx
route.delete('/updatedelete', stuController.updateDelete)  // updatedelete?id 

// query string
route.get('/editdisplay/:id', stuController.editData); // editdisplay/${id}
route.post('/editsave', stuController.editSave); // edit jsx 


module.exports = route; 


