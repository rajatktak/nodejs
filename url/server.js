const express = require('express');
const mongoose = require('mongoose');
const shorturl = require('./model/surl');
mongoose.connect('mongodb://localhost/urlshortner', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({
  extended: false
}))
app.get('/', async function (req, res) {
  const surls = await shorturl.find();
  res.render("index", {
    surls: surls,
    dir: "localhost:5000/"
  });

})
app.post('/shorturl', async function (req, res) {
  await shorturl.create({
    full: req.body.fullurl
  });
  res.redirect('/');
})
app.post('/removeurl', async function (req, res) {

  const rurl = await shorturl.findOneAndDelete({
    short: req.body.rurl
  });
  res.redirect('/')
})
app.get('/:URL', async function (req, res) {
  const URL = await shorturl.findOne({
    short: req.params.URL
  })
  if (URL == null) return res.sendStatus(404)
  URL.clicks++;
  URL.save();
  // res.redirect('/');
  res.redirect(URL.full);
})
app.listen(5000, function () {
  console.log('Server Started...... PORT : 5000')
});