import Order from "../../../models/order.model.js";

async function readByNotActiveController(req, res) {
  try {
    const orders = await Order.findAll({
      where: {
        active: 0,
      },
    });

    res.status(200).json({ data: orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

export default readByNotActiveController;
