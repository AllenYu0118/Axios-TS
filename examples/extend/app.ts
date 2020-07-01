import axios from '../../src/index'

axios({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'Hi'
  }
})

axios('/extend/post', {
  method: 'post',
  data: {
    msg: 'Hi URL'
  }
})

axios.request({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'Hello'
  }
})

axios.get('/extend/get')
axios.options('/extend/options')
axios.delete('/extend/delete')
axios.head('/extend/head')

axios.post('/extend/post', { msg: 'post' })
axios.put('/extend/put', { msg: 'put' })
axios.patch('/extend/patch', { msg: 'patch' })

