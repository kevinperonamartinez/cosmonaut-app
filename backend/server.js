const express = require('express');
const cors = require('cors');
require('dotenv').config();

const nasaRoutes = require('./routes/nasa');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/nasa', nasaRoutes);

const PORT = process.env.PORT || 5174;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
