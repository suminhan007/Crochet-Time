const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yourpassword',
    database: 'auth_app',
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

app.post('/api/register', async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = { email, password: hashedPassword };
    const sql = 'INSERT INTO users SET ?';

    db.query(sql, user, (err, result) => {
        if (err) {
            return res.status(500).send('Server error');
        }
        res.status(201).send('User registered');
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});