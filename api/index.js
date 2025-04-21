// Vercel serverless API handler
export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS method for CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Route handling based on path and method
  const { url, method } = req;

  // Resume endpoint
  if (url.includes('/api/resume') && method === 'GET') {
    return res.json({ message: "Resume download endpoint is functional" });
  }

  // Contact endpoint
  if (url.includes('/api/contact') && method === 'POST') {
    try {
      const { name, email, subject, message } = req.body;
      
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // Here you would typically send an email or store the contact info
      return res.status(200).json({ message: "Message received successfully" });
    } catch (error) {
      console.error('Contact form error:', error);
      return res.status(500).json({ message: 'Internal server error processing contact form' });
    }
  }

  // Default 404 for unmatched routes
  return res.status(404).json({ message: 'Not found' });
} 