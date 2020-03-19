const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const path = require('path')



require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://dbUser:123@cluster0-6bfvm.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const watchesRouter = require('./routes/watches');
app.use('/watches', watchesRouter);





app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});