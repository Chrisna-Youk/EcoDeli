async function migrate() {
  await import("../models/user.model.js");
  await import("../models/subscription.model.js");
  await import("../models/papers.model.js");
  await import("../models/announcement.model.js");
  await import("../models/checkpoint.model.js");
  await import("../models/order.model.js");
  await import("../models/invoice.model.js");
  await import("../models/step.model.js");
  await import("../models/relations/announcement.relation.js");
  await import("../models/relations/user.relation.js");
  await import("../models/relations/step.relation.js");
}

export default migrate;
