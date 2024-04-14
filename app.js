const express = require('express');
const app = express();
const port = 3000;

// Serve the HTML Pages in the root of the directory
app.use(express.static('./'));

// For parsing applicaton/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Serve your contact.html page at this route
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html');
});

// Handle form submissions
app.post('/submit-form', (req, res) => {
  // Log the form data
  console.log(req.body);

  // Extract the form data from the user
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  // Print the data to the consle so I can make sure it was received properly
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  
  // Respond with JSON to the user so they know it was received
  res.json({ message: 'Thank you for contacting Josh, He will get back to you shortly.' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
