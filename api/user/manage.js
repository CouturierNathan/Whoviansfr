const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

function isValidInput(input) {
    const regex = /^[a-zA-Z0-9_.@-]*$/;
    return regex.test(input);
}

function userCreate(req, res) {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: 3306,
    });

    const fname = req.params.fname;
    const lname = req.params.lname;
    const email = req.params.email;

    if (!isValidInput(fname) || !isValidInput(lname) || !isValidInput(email)) {
        res.send({ error: "Invalid input" });
        res.json(0);
        return;
    }

    const query = `INSERT INTO users (id, fname, lname, email) VALUES (NULL, ?, ?, ?)`;

    connection.query(query, [fname, lname, email], (error, results) => {
        if (error) {
            console.error('Database insertion error:', error);
            res.json(0);
            return res.status(500).send({ error: "Internal Server Error" });
        } else {
            res.send({ message: "User created", id: results.insertId });
            res.json(1);
        }
    });

    connection.end();
}

module.exports = { userCreate };