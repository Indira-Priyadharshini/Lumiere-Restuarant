import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ message: 'The concierge is online and ready.' });
});

app.post('/api/reservations', (req, res) => {
  const { name, email, date, guests } = req.body;

  if (!name || !email || !date || !guests) {
    return res.status(400).json({ message: 'Please complete all reservation details.' });
  }

  return res.status(201).json({
    message: `Reservation requested for ${name} for ${guests} guests on ${date}. We will contact you at ${email}.`
  });
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
