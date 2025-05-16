import Checkpoint from "../checkpoint.model.js";
import Step from "../step.model.js";
import Invoice from "../invoice.model.js";
import Order from "../order.model.js";

Invoice.hasMany(Step, { foreignKey: "invoiceId", as: "invoice" });
Order.hasMany(Step, { foreignKey: "orderId", as: "order" });
Checkpoint.hasMany(Step, { foreignKey: "checkpointId", as: "checkpoint" });
