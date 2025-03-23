function myController(req, res) {
  console.log(req.language)
  return res.status(200).json({message: req.t("hello")});
}

export default myController;
