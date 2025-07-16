import Order from "../../../models/order.model.js";

async function readByNotActiveProviderController(req, res) {
  try {
    const { providerId } = req.params;

    const orders = await Order.findAll({
      where: {
        providerId,
        active: 0,
      },
    });

    res.status(200).json({ data: orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

export default readByNotActiveProviderController;
