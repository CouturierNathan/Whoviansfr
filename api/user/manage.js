const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

function isValidInput(input) {
    const regex = /^[a-zA-Z0-9_.@-]*$/;
    return regex.test(input);
}

export const userCreate = (req, res) => {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: 3306,
    });

    console.log("body: ", req.body);

    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const cosplay = req.body.cosplay;
    const key = req.body.key;

    if (!isValidInput(fname) || !isValidInput(lname) || !isValidInput(email)) {
        res.send({ error: "Invalid input" });
        res.json(0);
        return;
    }

    const query = `INSERT INTO users (fname, lname, email, cosplay, key_hex) VALUES (?, ?, ?, ?, ?)`;

    connection.query(query, [fname, lname, email, cosplay, key], (error, results) => {
        if (error) {
            console.error('Database insertion error:', error);
            res.json(1);
            return res.status(500).send({ error: "Internal Server Error" });
        } else {
            console.log("User created");
            res.send({ message: "User created", id: results.insertId });
            res.json(2);
        }
    });

    connection.end();
}
