const express = require('express');
const mongoose = require('mongoose');
const AdminRoutes = require('./routes/admin');
const RequestFormRoutes = require('./routes/requestForm');

const app = express();
app.use(express.json({ limit: '50mb' }));

app.use('/api/admin', AdminRoutes);
app.use('/api/request-form', RequestFormRoutes);

app.listen(5000, () => {
  mongoose
    .connect('mongodb://localhost:27017/ticketing')
    .then(() => console.log('DB connection established'));
  console.log(`App running on port 5000`);
});

