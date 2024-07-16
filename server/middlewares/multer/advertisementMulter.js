const multer = require("multer");
const path = require("path");

// Set storage engine
const storage = multer.diskStorage({
  destination: "./uploads/advertisements/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname +
        "-" +
        Date.now() +
        "_" +
        file.originalname.replace(" ", "-")
    );
  },
});

// Initialize upload
const uploadAdvertisementImg = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
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

module.exports = uploadAdvertisementImg;
