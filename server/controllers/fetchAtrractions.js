// import jwt from 'jsonwebtoken';
import Attraction from '../models/attraction.js';

const fetchAtractionByDateResults = async (req, res, next) => {
    // checks if email exists
    const attractions = Attraction.findAll({
        from: {
            $between: [req.body.startDate, req.body.endDate]
        }
    }).then(dbAtraction => {
        if (!dbAtraction) {
            return res.status(404).json({ message: "Sorry othing is in this date!" });
        } else {
            // password hash
            if (dbAtraction) {
                res.status(200).json({ dbAtraction });
                // res.send(attractions)
            } else { // password doesnt match
                res.status(401).json({ message: "invalid credentials" });
            };
        };
    }).catch(err => {
        console.log('error', err.message);
    });
};
export { fetchAtractionByDateResults };


