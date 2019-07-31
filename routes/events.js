const express = require('express');
const router = express.Router();

// creating some seeds for the database
router.get('/', (req, res)=>res.send("it's kinda working"));

// adding an event to the database

module.exports = router;