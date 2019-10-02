const wikiRouter = require('./wiki');
const userRouter = require('./user');
const express = require('express');
const router = express.Router();


// router.use('/wiki', function () {
//   console.log(wikiRouter)
// });

router.use('/wiki', wikiRouter);

router.get('/', (req, res) => {
  res.render("index");
});  //nos lleva al home

module.exports = router;