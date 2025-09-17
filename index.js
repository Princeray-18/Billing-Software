const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const connectDB = require('./CONFIG/db');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Server is running 🚀');
});

const startServer = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 5000;  
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
};

startServer();



