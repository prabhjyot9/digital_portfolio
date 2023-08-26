const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (like the HTML form)
app.use(express.static('public'));

// Handle form submissions
app.post('/submit-form', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    
    console.log(`Received form submission:\nName: ${name}\nEmail: ${email}`);
    
    // Here, you might perform additional actions like saving to a database or sending an email
    
    res.send('Form submitted successfully!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});