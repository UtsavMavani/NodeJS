const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 5000;

const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const maxSize = 1 * 1024 * 1024;  //1MB
const upload = multer({
  storage: storage,

  fileFilter: (req, file, cb) => {
    if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg'){
      cb(null, true);
    } else{
      cb(null, false);
      return cb(new Error("Only .png, .jpg, and .jpeg File Format Allowed...!"));
    } 
  },

  limits: { fileSize: maxSize }  
}).single('file');


app.get('/', (req, res) => {
  res.send("File Upload Using Multer In Node JS.");
});


app.post('/file/upload',upload, (req, res) => {
  if(upload){
    res.send('File Uploaded Successfully.');
  } else{
    res.send('File Not Uploaded...!');
  }
});


app.listen(port, () => {
  console.log(`Server is running at port no. ${port}`);
});