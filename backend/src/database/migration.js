async function migrate() {
    await import("../models/user.model.js");
    await import("../models/subscription.model.js");
    await import("../models/relations/user.relation.js");
}

export default migrate;
