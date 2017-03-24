import express from 'express'

const router = express.Router({mergeParams: true})

router.get('/fetch', (req, res) => {
  const payload = {
    source: 'stack-demo API',
    data: 'Hello from the stack-demo API'
  }
  res.json(payload)
})

export default router
