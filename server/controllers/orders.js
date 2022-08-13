import order from '../models/order.js';
import Order from '../models/order.js';
const addOrder = async (req, res, next) => {
    // checks if email already exists

    const dbOrder = await Order.findOne({
        where: {
            attractionId: req.body.attractionId
        }
    }).then(async dbOrder => {
        if (dbOrder) {
            // return res.status(409).json({ message: "email already exists" });
            await dbOrder.update({ cuaninty: dbOrder.cuaninty + 1 })
            // The database now has "Ada" for name, but still has the default "green" for favorite color
            await dbOrder.save()
            // Now the database has "Ada" for name and "blue" for favorite color

        } else if (!dbOrder) {
            // return order = 
            await Order.create(({
                userId: req.body.id,
                start_Date: req.body.startDate,
                end_Date: req.body.endDate,
                status: req.body.status,
                attractionId: req.body.attractionId,
                cuaninty: 1
            })).then(() => {
                res.status(200).json({ message: "order created" });
            }).catch(err => {
                console.log(err);
                res.status(502).json({ message: "error while creating the order" });
            });
        }
    }).catch(err => {
        console.log('error', err);
    });
};

const fetchOrder = async (req, res, next) => {
    //fetch all the order
    const allOrder = await Order.findAll(({
        where: {
            userId: req.body.id
        }
    })).then((dbOrders) => {
        return res.status(200).json({ dbOrders });
    }).catch((err) => {
        console.log(err)
    })
}

export { addOrder, fetchOrder };