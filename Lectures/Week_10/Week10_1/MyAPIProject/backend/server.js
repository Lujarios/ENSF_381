const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database Connection
//mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb://127.0.0.1:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });

// Schema and Model
const DataSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    message: String
});

const Data = mongoose.model('Data', DataSchema);

// POST API
app.post('/api/data', async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const newData = new Data({ name, email, message });
        await newData.save();
        res.status(201).json({ message: 'Data saved successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving data.' });
    }
});

// GET API
app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.get('/api/data', async (req, res) => {
    try {
        const data = await Data.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data.' });
    }
});

// Start Server
//app.listen(5000, () => console.log('Server running on port 5000'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));