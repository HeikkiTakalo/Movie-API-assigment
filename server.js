import express from 'express';
import pkg from 'pg';
const { Client } = pkg;
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.listen(3210, () => {
    console.log('Server running in port 3210');
});

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});


client.connect()
  .then(() => console.log('Connection to postrgesql was succesful!'))
  .catch((err) => console.error('Error in postgresql connection!:', err.stack));


app.get('/Genre', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM Genre');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
});

app.get('/Movie', async (req, res) => {
    try {
      const result = await client.query('SELECT * FROM Movie');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error');
    }
  });

app.get('/Reviewer', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM Reviewer');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});