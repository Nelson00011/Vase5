const express = require('express');
const router = express.Router();

// Create a new reservation
router.post('/reservations', (req, res) => {
    const { numberOfPeople, time, date } = req.body;

    // Validate numberOfPeople
    if (!Number.isInteger(numberOfPeople) || numberOfPeople < 1 || numberOfPeople > 6) {
      return res.status(400).json({ error: 'Number of people must be an integer between 1 and 6' });
    }

    // Validate time
    const validTimes = [
      '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', 
      '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00'
    ];
    if (!validTimes.includes(time)) {
      return res.status(400).json({ error: 'Time must be between 5pm and 11pm, only every 30 minutes' });
    }

    // Validate date
    const inputDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to start of the day
    if (isNaN(inputDate.getTime()) || inputDate < today) {
      return res.status(400).json({ error: 'Date must be today or in the future' });
    }
    // Logic to create a new reservation
    // For example:
    // const newReservation = Reservation.create({ numberOfPeople, time, date });
    // res.json(newReservation);
    res.status(201).send('Reservation created');
});

// Delete an existing reservation
router.delete('/reservations/:id', (req, res) => {
    const { id } = req.params;
    // Logic to delete a reservation
    // For example:
    // const deletedReservation = Reservation.findByIdAndDelete(id);
    // res.json(deletedReservation);
    res.status(200).send('Reservation deleted');
});

// Edit an existing reservation
router.put('/reservations/:id', (req, res) => {
  const { id } = req.params;
  const { numberOfPeople, time, date } = req.body;

  // Validate numberOfPeople
  if (numberOfPeople !== undefined) {
    if (!Number.isInteger(numberOfPeople) || numberOfPeople < 1 || numberOfPeople > 6) {
      return res.status(400).json({ error: 'Number of people must be an integer between 1 and 6' });
    }
  }

  // Validate time
  if (time !== undefined) {
    const validTimes = [
      '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', 
      '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00'
    ];
    if (!validTimes.includes(time)) {
      return res.status(400).json({ error: 'Time must be between 5pm and 11pm, only every 30 minutes' });
    }
  }

  // Validate date
  if (date !== undefined) {
    const inputDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to start of the day
    if (isNaN(inputDate.getTime()) || inputDate < today) {
      return res.status(400).json({ error: 'Date must be today or in the future' });
    }
  }

  // Logic to update the reservation
  // For example:
  // const updatedReservation = Reservation.findByIdAndUpdate(id, { numberOfPeople, time, date }, { new: true });
  // if (!updatedReservation) {
  //   return res.status(404).json({ error: 'Reservation not found' });
  // }
  // res.json(updatedReservation);

  res.status(200).send('Reservation updated');
});

module.exports = router;
