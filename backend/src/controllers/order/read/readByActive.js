import Order from "../../../models/order.model.js";

async function readByActiveController(req, res) {
  try {

    const orders = await Order.findAll({
      where: {
        active: 1,
      },
    });

    res.status(200).json({ data: orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

export default readByActiveController;
