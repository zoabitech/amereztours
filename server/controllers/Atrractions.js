// import jwt from 'jsonwebtoken';
import Attraction from '../models/attraction.js';
import Image from '../models/image.js'
const fetchAtractionByDateResults = async (req, res, next) => {
    // checks if there any attraction in the spec date and return to the front end
    const attractions = await Attraction.findAll({
        where: {
            // $bettwen: [{ start_Date: req.body.startDate }, { end_Date: req.body.endDate }]
            start_Date: req.body.startDate,
            end_Date: req.body.endDate
        },
        include: [{ model: Image, as: 'images' }]
    }).then(dbAttraction => {
        //check if there not any data match the asking dates
        if (!dbAttraction) {
            return res.status(404).json({ message: "Sorry nothing is in this date!" });
        } else {
            // if there data match the asking dates return the data as json 
            if (dbAttraction) {
                return res.status(200).json(dbAttraction);
                // res.send(dbAttraction)
            } else {
                res.status(401).json({ message: "invalid credentials" });
            };
        };
    }).catch(err => {
        console.log('error', err.message);
    });
};
export { fetchAtractionByDateResults };


