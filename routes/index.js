const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index.html')
})

router.get('/001', (req, res) => {
  res.render('main/001.html')
})

router.get('/002', (req, res) => {
  res.render('main/002.html')
})

module.exports = router