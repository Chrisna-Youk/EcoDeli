import Order from "../../../models/order.model.js";

async function updateOrdersController(req, res) {
  const { confirm_customer, confirm_provider } = req.body;
  const { id } = req.params;

  try {
    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    await order.update({
      confirm_customer,
      confirm_provider,
    });

    return res.status(200).json({
      message: "Order updated successfully",
      data: order,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
}

export default updateOrdersController;
