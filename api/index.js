import express from 'express';

const app = express();
app.use(express.json());

// API Routes
app.get('/api/resume', (req, res) => {
  res.json({ message: "Resume download endpoint is functional" });
});

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }
  
  // Here you would typically send an email or store the contact info
  res.status(200).json({ message: "Message received successfully" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Export the express app as a serverless function
export default app; 