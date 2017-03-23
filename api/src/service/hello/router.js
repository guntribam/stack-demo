import express from 'express'

const router = express.Router({mergeParams: true})

router.get('/hello/world', (req, res) => {
  res.send(`<h2>hello world</h2>`)
})

router.get('/hello/user', (req, res) => {
  res.send(`<h2>hello ${req.app.user.firstname}</h2>`)
})

export default router
