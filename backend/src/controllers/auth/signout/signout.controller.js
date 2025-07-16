async function signoutController(req, res) {
  try {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      path: "/",
    });
    res.status(200).json({ data: "Successfully signed out" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ data: "Error server" });
  }
}

export default signoutController;
