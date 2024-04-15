// Import required modules
const express = require('express');
const mysql = require('mysql');

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: "task_manager"
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL');
});

// Create Express application
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Define routes and their handlers
// Display a list of tasks on the home page
app.get('/', (req, res) => {
    db.query('SELECT * FROM tasks', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error'});
            return;
        }
        res.json(results);
    });
});

// Get Task by id
app.get('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    db.query('SELECT * FROM tasks WHERE id = ?', taskId, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }
        res.json(results[0]);
    });
});

// Add a new task
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    const status = req.body.status || 'pending'; // Default status to 'pending'
    const newTask = { title, description, status };
    db.query('INSERT INTO tasks SET ?', newTask, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.status(201).json({ message: 'Task created successfully', id: result.insertId });
    });
});

// Edit an existing task
app.put('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    const { title, description, status } = req.body;
    const updatedTask = { title, description, status };
    db.query('UPDATE tasks SET ? WHERE id = ?', [updatedTask, taskId], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }
        res.json({ message: 'Task updated successfully' });
    });
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    db.query('DELETE FROM tasks WHERE id = ?', taskId, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }
        res.json({ message: 'Task deleted successfully' });
    });
});

// Mark a task as completed
app.patch('/tasks/:id/complete', (req, res) => {
    const taskId = req.params.id;
    db.query('UPDATE tasks SET status = "completed" WHERE id = ?', taskId, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }
        res.json({ message: 'Task marked as completed' });
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
