const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

export const exhibGetAll = (req, res) => {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: 3306,
    });

    const query = `SELECT * FROM exhibs`;

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Database error:', err);
            res.status(500).send({ error: 'Internal server error' });
        } else {
            res.json(results);
        }
    });

    connection.end();
}

export const exhibGetOne = (req, res) => {
    const id = req.params.id;
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: 3306,
    });

    const query = `
        SELECT * FROM exhibs WHERE id = ${id}
    `;

    connection.query(query, (err, res) => {
        if (err) {
            console.error('Database error:', err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(res);
        }
    });

    connection.end();
}
