import express from 'express';

import { signup, login, updatedPassword, isAuth } from '../controllers/auth.js';
import { fetchAtractionByDateResults } from '../controllers/fetchAtrractions.js';
import { fetchVehicleByDateResults } from '../controllers/fetchVehicle.js'
import { addOrder } from '../controllers/addorder.js'
const router = express.Router();

router.post('/login', login);

router.post('/signup', signup);

router.post('/updatedPassword', updatedPassword);

router.get('/private', isAuth);

router.post('/fetchAtractionByDateResults', fetchAtractionByDateResults);

router.post('/fetchVehicleByDateResults', fetchVehicleByDateResults);

router.post('/addOrder', addOrder);

router.get('/public', (req, res, next) => {
    res.status(200).json({ message: "here is your public resource" });
});

// will match any other path
router.use('/', (req, res, next) => {
    res.status(404).json({ error: "page not found" });
});

export default router;