const express = require("express");
const mysql = require("mysql");

const app = express();
app.use(express.json()); // Middleware para parsear los JSON que nos llegue

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: "node_session"
});

connection.connect((err) => {
    if (err) {
        console.log("Error in the DB connection");
    } else {
        console.log("DB connected successfully!!");
    }
});

app.get('/user/:id', (req, res) => {
    connection.query("SELECT * FROM user WHERE id = ?", [req.params.id], (error, data) => {
        if (error) {
            return res.status(500).send("Error");
        } else {
            res.json(data);
        }
    });
});

app.post('/user', (req, res) => {
    connection.query("INSERT INTO user(Name, Age) VALUES(?,?)", [req.body.Name, req.body.Age], (error, data) => {
        if (error) {
            return res.status(500).send("Error");
        } else {
            res.json(data);
        }
    });
});

app.put('/user/:id', (req, res) => {
    connection.query("UPDATE user SET Name=?, Age=? WHERE Id=?", [req.body.Name, req.body.Age, req.params.id], (error, data) => {
        if (error) {
            return res.status(500).send("Error");
        } else {
            res.json(data);
        }
    });
});

app.delete('/user/:id', (req, res) => {
    connection.query("DELETE FROM user WHERE Id = ?", [req.params.id], (error, data) => {
        if (error) {
            return res.status(500).send("Error");
        } else {
            res.json(data);
        }
    });
});

app.listen(9000, () => console.log("Server is running on the port 9000"));
