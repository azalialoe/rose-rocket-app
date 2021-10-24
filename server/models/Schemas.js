const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    id: {type:String, required: true},
    description: {type:String, required:true},
    revenue: {type:Number, required:true},
    cost: {type:Number, required:true}
});

const driverSchema = new Schema({
    name: {type:String, required:true}
})

const Orders = mongoose.model('orders', orderSchema, 'orders');
const Drivers = mongoose.model('drivers', driverSchema, 'drivers');
const mySchemas = {'Orders': Orders, 'Drivers':Drivers}

module.exports = mySchemas;
