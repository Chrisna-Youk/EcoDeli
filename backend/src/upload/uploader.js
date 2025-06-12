import multer from "multer";

const upload = multer({ dest: "uploads/files/" });

export default upload;
