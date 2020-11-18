const express = require('express');
const course = require('../db/models/course');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Course } = require('../db/models/course');

// => localhost:3002/courses/
router.get('/', (req, res) => {
    Course.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Courses :' + JSON.stringify(err, undefined, 2)); }

    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Course.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
    console.log("get finished")
});

router.post('/', (req, res) => {
    let name = req.body.name;
    let chapters = req.body.chapters;
    let objectives = req.body.objectives;
    let content = req.body.content;
    console.log(name);
    var crs = new Course({
        name,
        chapters,
        objectives,
        content
    });
    crs.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in course Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var crs = {
       
        name: req.body.name,
        chapters: req.body.chapters,
        objectives: req.body.objectives,
        content: req.body.content
    };
    Course.findByIdAndUpdate(req.params.id, { $set: crs }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Course Update :' + JSON.stringify(err, undefined, 2)); }
    });
});



router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Course.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});




module.exports = router;