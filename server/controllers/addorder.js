import Order from '../models/order.js';
const addOrder = async (req, res, next) => {
    // checks if there any attraction in the spec date and return to the front end
    const order = await Order.create(({
        userId: req.body.id,
        start_Date: req.body.startDate,
        end_Date: req.body.endDate,
        status: req.body.status,
        attractionId: req.body.attractionId
    })).then(() => {
        res.status(200).json({ message: "order created" });
    }).catch(err => {
        console.log(err);
        res.status(502).json({ message: "error while creating the order" });
    });
};
export { addOrder };