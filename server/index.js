const express = require('express');
const cors = require('cors');
const app = express();

const routesOrders = require('./routes/orders');
const routesDriver = require('./routes/driver')
const mongoose = require('mongoose');
const dotenv = require('dotenv')

const Schemas = require("./models/Schemas")

dotenv.config({path:'config.env'})
const port = process.env.PORT || 5000;

// DB connection
mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true})
.then(() => {
    console.log('db connected');
})
.catch((err) => {
    console.log(err);
})

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use('/', routesOrders);
app.use('/', routesDriver);

app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    
    await db.deleteOne(id);
    res.send('deleted')

})

app.listen(port, () => {
    console.log(`Listening at https://localhost:${port}`);
})

