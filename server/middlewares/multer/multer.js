import multer from "multer";
import path from "path";

// Set storage engine to store files temporarily in memory
const storage = multer.memoryStorage();

// Initialize upload with multer
const uploadImg = multer({
  storage: storage,
  limits: { fileSize: 3000000 }, // Limit file size to 3MB
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png|gif|webp|jfif|bmp|svg|tiff?|ico|heif|heic/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      cb(null, true);
    } else {
      cb("Error: Images Only!");
    }
  },
}).single("image"); // 'image' is the field name for the image file in the form

export default uploadImg;
