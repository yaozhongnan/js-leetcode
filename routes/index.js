const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index.html')
})

router.get('/_01', (req, res) => {
  res.render('main/_01.html')
})

router.get('/_02', (req, res) => {
  res.render('main/_02.html')
})

router.get('/001', (req, res) => {
  res.render('main/001.html')
})

router.get('/003', (req, res) => {
  res.render('main/003.html')
})

router.get('/004', (req, res) => {
  res.render('main/004.html')
})

router.get('/005', (req, res) => {
  res.render('main/005.html')
})

module.exports = router