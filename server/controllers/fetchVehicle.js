// import jwt from 'jsonwebtoken';
import Vehicle from '../models/vehicle.js'
import Image from '../models/image.js'
const fetchVehicleByDateResults = async (req, res, next) => {
    // checks if there any attraction in the spec date and return to the front end
    const Vehicles = await Vehicle.findAll({
        where: {
            // $bettwen: [{ start_Date: req.body.startDate }, { end_Date: req.body.endDate }]
            start_Date: req.body.startDate,
            end_Date: req.body.endDate
        },
        include: [{ model: Image, as: 'images' }]
    }).then(dbVehicle => {
        //check if there not any data match the asking dates
        if (!dbVehicle) {
            return res.status(404).json({ message: "Sorry nothing is in this date!" });
        } else {
            // if there data match the asking dates return the data as json 
            if (dbVehicle) {
                return res.status(200).json(dbVehicle);
                // res.send(dbAttraction)
            } else {
                res.status(401).json({ message: "invalid credentials" });
            };
        };
    }).catch(err => {
        console.log('error', err.message);
    });
};
export { fetchVehicleByDateResults };


