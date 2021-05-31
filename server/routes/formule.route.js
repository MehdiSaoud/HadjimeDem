const express = require('express');
const formuleCtrl = require('../controllers/formule.controller');
const asyncHandler = require('express-async-handler');
const router = express.Router();
module.exports = router;



router.route('/')
.post(asyncHandler(insertFormule))
.get(asyncHandler(getFormules));



async function insertFormule(req, res) {
  let formule = await formuleCtrl.insert(req.body);
  res.json(formule);
}

async function getFormules(req, res) {
  let formules = await formuleCtrl.getAll();
  res.json(formules);
}