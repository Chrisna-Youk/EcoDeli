import Order from "../../../models/order.model.js";

async function readByIdOrder(req, res) {
  try {
    const { id } = req.params;

    const orders = await Order.findOne({ where: { id } });

    res.status(200).json({ data: orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}


export default readByIdOrder;
