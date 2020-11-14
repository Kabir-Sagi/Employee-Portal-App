const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const mongo = require('../database/dbOperations');
const mongodb = require('mongodb');
const ObjectId = mongodb.ObjectID;

// GET : READ All the employees
router.get('/employees',(request,response) => {
    // get database connection object
    let db = mongo.getDBConnectionObject();
    db.collection('employee').find().toArray(function(err , docs ) {
       let employees = docs;
       response.json(employees);
    });
});

// GET : READ a single employee
router.get('/employees/:id',(request,response) => {
    let empId = request.params.id;
    // get db connection object
    let db = mongo.getDBConnectionObject();
    db.collection('employee').find({_id : ObjectId(empId)}).toArray(function(err, docs) {
        let employee = docs[0];
        response.json(employee);
    });
});

// POST : CREATE a new Employee
router.post('/employees',(request,response) => {
    // get employee object from clients Form
    let newEmployee = {
        first_name : request.body.first_name,
        last_name : request.body.last_name,
        email : request.body.email,
        gender : request.body.gender,
        ip_address : request.body.ip_address
    };
    // get database connection object
    let db = mongo.getDBConnectionObject();
    db.collection('employee').insertOne(newEmployee,function(err,r) {
        response.json(newEmployee);
    });
});

// PUT : UPDATE an Employee
router.put('/employees/:id',(request,response) => {
    let empId = request.params.id;
    let updatedEmployee = {
        first_name : request.body.first_name,
        last_name : request.body.last_name,
        email : request.body.email,
        gender : request.body.gender,
        ip_address : request.body.ip_address
    };
    // get database connection object
    let db = mongo.getDBConnectionObject();
    db.collection('employee').updateOne({_id : ObjectId(empId)} , { $set : updatedEmployee}, function(err,r) {
        response.json(updatedEmployee);
    })
});

// DELETE : DELETE an Employee
router.delete('/employees/:id',(request,response) => {
   let empId = request.params.id;
   // get database connection object
   let db = mongo.getDBConnectionObject();
   db.collection('employee').deleteOne({_id : ObjectId(empId)},function (err,r) {
       response.json(`Employee with id : ${empId} is deleted`);
   });
});

module.exports = router;
