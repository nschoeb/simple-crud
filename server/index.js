const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db =  mysql.createConnection({
user:'root',
host: 'localhost',
password: '1234',
database: 'employeesystem'
});


app.post('/create', (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const age = req.body.age;
    const home = req.body.home;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query('INSERT INTO employees (name, age, home, position, wage) VALUES (?, ?, ?, ?, ?)', [name, age, home, position, wage], (err, result) => {
        if (err) {
            console.log(err);
        }else {
            res.send("vals inserted");
        }
    });
});

app.get('/employees', (req, res) => {
    db.query("SELECT * FROM employees", (err, result) => {
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    })
});

app.put('/update', (req, res) => {
    const id = req.body.id;
    const wage = req.body.wage;
    db.query("UPDATE employees SET wage = ? WHERE id = ?", [wage, id], (err, result) => {
        if (err){
            console.log(err);
        }else {
            res.send(result);
        }
    });
});

app.delete('/delete/:id', (req, res) => {
    const id= req.params.id;
    db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});



app.listen(3001, ()=> {
    console.log("server running on port 3001");
});