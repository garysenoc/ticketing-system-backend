const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const AdminRoutes = require('./routes/admin');
const RequestFormRoutes = require('./routes/requestForm');

const app = express();
app.use(express.json({ limit: '50mb' }));

app.use(cors());

app.use('/api/admin', AdminRoutes);
app.use('/api/requestForm', RequestFormRoutes);
app.route('/get').get((req, res) => {
  res.send('das');
});

app.listen(5000, () => {
  mongoose
    .connect(
      'mongodb+srv://takaad:takaad@devconnector.hwyis.mongodb.net/?retryWrites=true&w=majority',
    )
    .then(() => console.log('DB connection established'));
  console.log(`App running on port 5000`);
});

