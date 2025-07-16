import Order from "../../../models/order.model.js";

async function readByIdProviderController(req, res) {
  try {
    const { providerId } = req.params;

    const orders = await Order.findAll({ where: { providerId } });

    res.status(200).json({ data: orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}


export default readByIdProviderController;
