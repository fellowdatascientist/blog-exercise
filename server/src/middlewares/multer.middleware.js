const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination:(req,file,cd)=>{
        cd(null,"./uploads");
    },
    filename:(req,file,cd)=>{
        cd(null,Date.now()+path.extname(file.originalname));
    }
});

// Set file filter (optional)
const fileFilter = (req, file, cb) => {
    // Allow only image files (you can change this to other types as needed)
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed'), false);
    }
};


const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB file size limit
    },
    fileFilter: fileFilter
});

module.exports = upload;