/*Assignment Day3:
Create simple express app for the resource 
1. Student
2. Subjects
Add Get, Put, Post, Delete, GetBy Id.

send simple log as response. Ex:  Get by student Called...

Run it in port 2020.*/

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 2020;

// Middleware
app.use(bodyParser.json());

// Mock data
let students = [];
let subjects = [];

// Routes
// Get all students
app.get('/students', (req, res) => {
    console.log('Get all students called...');
    res.json(students);
});

// Get student by ID
app.get('/students/:id', (req, res) => {
    console.log('Get student by ID called...');
    const student = students.find(student => student.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('Student not found');
    res.json(student);
});

// Add new student
app.post('/students', (req, res) => {
    console.log('Add student called...');
    const student = req.body;
    students.push(student);
    res.send('Student added successfully');
});

// Update student
app.put('/students/:id', (req, res) => {
    console.log('Update student called...');
    const studentIndex = students.findIndex(student => student.id === parseInt(req.params.id));
    if (studentIndex === -1) return res.status(404).send('Student not found');
    students[studentIndex] = req.body;
    res.send('Student updated successfully');
});

// Delete student
app.delete('/students/:id', (req, res) => {
    console.log('Delete student called...');
    students = students.filter(student => student.id !== parseInt(req.params.id));
    res.send('Student deleted successfully');
});

// Get all subjects
app.get('/subjects', (req, res) => {
    console.log('Get all subjects called...');
    res.json(subjects);
});

// Get subject by ID
app.get('/subjects/:id', (req, res) => {
    console.log('Get subject by ID called...');
    const subject = subjects.find(subject => subject.id === parseInt(req.params.id));
    if (!subject) return res.status(404).send('Subject not found');
    res.json(subject);
});

// Start the server
app.listen(2020, () => {
    console.log(`Server is running on port ${port}`);
});


