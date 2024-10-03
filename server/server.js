const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const tasksRoute = require('./routes/tasks');
dotenv.config();

app.use(cors());
app.use(express.json());
// routes
app.use('/api', tasksRoute);

// app.get('/', (req, res) => {
//   res.send('Test!');
// });

// mongo db
mongoose
  .connect(process.env.DB_URI, { dbName: 'demo_db' })
  // .connect(process.env.DB_URI, { dbName: 'sample_mflix' })
  .then(() => {
    console.log('Connected to Mongo DB!');
  })
  .catch((err) => console.log(err));

  app.listen(process.env.PORT, () => {
    console.log(`Server is running in ${process.env.PORT}`);
  });
