import Order from "../../../models/order.model.js";

async function readByActiveCustomerController(req, res) {
  try {
    const { customerId } = req.params;

    const orders = await Order.findAll({
      where: {
        customerId,
        active: 1,
      },
    });

    res.status(200).json({ data: orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

export default readByActiveCustomerController;
