import Message from "../../../models/order.model.js";

async function createOrderController(req, res) {
  const { price, serviceId, providerId, customerId, date, customerlastName, customerfirstName, serviceTitle, providerlastName, providerfirstName } = req.body;

  try {
    await Message.create({
      price: price,
      serviceId: serviceId,
      providerId: providerId,
      customerId: customerId,
      date: date,
      customerlastName,
      customerfirstName,
      providerfirstName,
      providerlastName,
      serviceTitle,
    });
    return res.status(200).json({ data: "Order created" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ data: "Bad request" });
  }
}

export default createOrderController;
