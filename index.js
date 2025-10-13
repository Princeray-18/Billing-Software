const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const connectDB = require('./CONFIG/db');
const logger = require('./CONFIG/logger.js');
const app = express();

const customerRouter=require('./ROUTES/customer.routes');
const billRouter=require('./ROUTES/bill.routes');
const productRouter=require('./ROUTES/product.routes');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
dotenv.config();
app.use(express.json());

app.use

app.use("/api/v1/customer",customerRouter)
app.use("/api/v1/bill",billRouter)
app.use("/api/v1/product",productRouter)



const startServer = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 5000;  
    app.listen(PORT, () => logger.info(`Server started on port ${PORT}`));
      
  } catch (err) {
    logger.error(`Error starting server: ${err.message}`);
  }
};

startServer();



