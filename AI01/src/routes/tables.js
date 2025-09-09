//TODO Copilot 
const express = require('express');
const router = express.Router();

//TODO Create a new reservation
router.post('/restaurants', (req, res) => {
const { numberOfPeople, time, date } = req.body;

// Validate numberOfPeople
if (
    typeof numberOfPeople !== 'number' ||
    numberOfPeople < 1 ||
    numberOfPeople > 6
) {
    return res.status(400).send('numberOfPeople must be between 1 and 6');
}

// Validate date (should be today or in the future)
const inputDate = new Date(date);
const today = new Date();
today.setHours(0, 0, 0, 0);
inputDate.setHours(0, 0, 0, 0);
if (isNaN(inputDate.getTime()) || inputDate < today) {
    return res.status(400).send('date must be today or in the future');
}

// Validate time (between 17:00 and 23:00, only every 30 minutes)
// Acceptable format: "HH:MM"
const timeRegex = /^([0-9]{1,2}):([0-9]{2})$/;
const match = timeRegex.exec(time);
if (!match) {
    return res.status(400).send('time must be in HH:MM format');
}
const hour = parseInt(match[1], 10);
const minute = parseInt(match[2], 10);

if (
    hour < 17 ||
    hour > 23 ||
    (hour === 23 && minute > 0) ||
    (minute !== 0 && minute !== 30)
) {
    return res.status(400).send('time must be between 17:00 and 23:00, only every 30 minutes');
}
  // Logic to create a new reservation
  res.status(201).send('Reservation created');

});

//TODO Delete an existing reserevation
router.delete('/restaurants/:id', (req, res) => {
  const { id } = req.params;    

  res.status(200).send(`Reservation with id ${id} deleted`);
});

module.exports = router; 

