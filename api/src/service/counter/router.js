import express from 'express'
import index from './'

const router = express.Router({mergeParams: true})

router.get('/counter/ping', (req, res) => {
  res.send(`The 'counter' service endpoints have been succesfully mounted : ${new Date().toLocaleString('en-GB')}`)
})

router.get('/counter/total', (req, res) => {
  const {db} = index
  res.json({total: db.total})
})

router.get('/counter/increment', (req, res) => {
  const {db} = index
  db.total++
  res.json({total: db.total})
})
router.get('/counter/decrement', (req, res) => {
  const {db} = index
  db.total--
  res.json({total: db.total})
})
export default router
