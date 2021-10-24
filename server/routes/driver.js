const express = require('express');
const router = express.Router();

router.get('/drivers', (req, res) => {
    const existingDrivers = [
        {name: 'Steve Williams'}, 
        {name: 'Chris Horton'},
        {name: 'Alex Novak'}
    ];
        res.end(JSON.stringify(existingDrivers))
})

module.exports = router;
