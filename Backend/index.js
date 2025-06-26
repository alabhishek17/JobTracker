const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./route/User');
const appRoutes = require('./route/Application');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(() => console.log('Mongo connected',process.env.MONGO_URL));

app.use('/auth', authRoutes);
app.use('/applications', appRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/apps", appRoutes);
app.listen(10000, () => console.log('Server running on http://localhost:10000'));
