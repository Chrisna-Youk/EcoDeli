async function myController(req, res) {
  return res
    .status(200)
    .json({ message: "Protected route Chris" });
}

export default myController;
