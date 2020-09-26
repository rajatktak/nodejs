const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const helpers = require('./helpers');

app.set("view engine", "ejs");
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(express.static(__dirname + '/public'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(null, file.fieldname + path.extname(file.originalname));
    }
});
app.get('/', function (req, res) {
    res.render('index')
})

app.post('/addform', (req, res) => {
    // 'profile_pic' is the name of our file input field in the HTML form
    let upload = multer({
        storage: storage,
        fileFilter: helpers.imageFilter
    }).single('abc');

    upload(req, res, function (err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any

        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        } else if (!req.file) {
            return res.send('Please select an image to upload');
        } else if (err instanceof multer.MulterError) {
            return res.send(err);
        } else if (err) {
            return res.send(err);
        }

        // Display uploaded image for user validation
        res.send(`You have uploaded this image: <hr/><img src="${req.file.path}" width="500"><hr /><a href="./">Upload another image</a>`);
    });
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));