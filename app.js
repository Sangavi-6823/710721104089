const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 9876;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to calculate the average of numbers
app.post('/average', (req, res) => {
    const numbers = req.body.numbers;

    // Check if numbers are provided
    if (!numbers || !Array.isArray(numbers)) {
        return res.status(400).json({ error: 'Numbers array is required' });
    }

    // Calculate the average
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;

    res.json({ average });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
