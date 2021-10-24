const express = require('express');
const router = express.Router();
const Schemas = require('../models/Schemas')

router.get('/addOrders', (req, res) => {
    
})

router.get('/orders', (req, res) => {
    const existingOrders = [
        {   
            id: 1,
            description: 'Construction Materials',
            revenue: 4200,
            cost: 100
        },
        {
            id: 2,
            description: 'Construction Materials',
            revenue: 3948.45,
            cost: 71.38
        },
        {
            id: 3,
            description: 'Wood and Lumber',
            revenue: 1950.52,
            cost: 263.88
        },
    
        {
            id: 4,
            description: 'Wood and Lumber',
            revenue: 4991.45,
            cost: 116.98
        },
    
        {
            id: 5,
            description: 'Meat',
            revenue: 6739.72,
            cost: 279.17
        },
    
        {
            id: 6,
            description: 'Meat',
            revenue: 3618.08,
            cost: 537.91
        },
    
        {
            id: 7,
            description: 'Fresh Produce',
            revenue: 5345.91,
            cost: 420.69
        },
    
        {
            id: 8,
            description: 'Farm Supplies',
            revenue: 7429.78,
            cost: 171.13
        },
    
        {
            id: 9,
            description: 'Cheetos',
            revenue: 7231.98,
            cost: 310.38
        },
    
        {
            id: 10,
            description: 'Rose Rocket Swag Shirts',
            revenue: 5404.24,
            cost: 350.79
        }];
        res.end(JSON.stringify(existingOrders))
})



module.exports = router;