const express = require('express')

const router = express.Router()

router.get('/simple/get', (req, res) => {
  res.json({
    msg: 'hello world'
  })
})

router.get('/base/get', (req, res) => {
  res.json(req.query)
})

router.post('/base/post', (req, res) => {
  res.json(req.body)
})

router.post('/base/buffer', (req, res) => {
  let msg = []
  req.on('data', chunk => {
    if (chunk) {
      msg.push(chunk)
    }
  })

  req.on('end', () => {
    let buf = Buffer.concat(msg)
    res.json(buf.toJSON())
  })
})

router.get('/error/get', (req, res) => {
  if (Math.random() > 0.5) {
    res.json({
      msg: `hello world`
    })
  } else {
    res.status(500)
    res.end()
  }
})

router.get('/error/timeout', (req, res) => {
  setTimeout(() => {
    res.json({
      msg: `Hello World`
    })
  }, 3000)
})

router.get('/extend/get', (req, res) => {
  res.json({
    msg: 'hello world'
  })
})

router.options('/extend/options', (req, res) => {
  res.end()
})

router.delete('/extend/delete', (req, res) => {
  res.end()
})

router.head('/extend/head', (req, res) => {
  res.end()
})

router.post('/extend/post', (req, res) => {
  res.json(req.body)
})

router.put('/extend/put', (req, res) => {
  res.json(req.body)
})

router.patch('/extend/patch', (req, res) => {
  res.json(req.body)
})

module.exports = router
