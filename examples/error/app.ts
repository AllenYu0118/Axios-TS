import axios, { AxiosError } from '../../src/index'

axios({
  method: 'get',
  url: '/error/get1'
}).then(res => {
  console.log('res: ', res);
}).catch(e => {
  console.log('e: ', e);
})

axios({
  method: 'get',
  url: '/error/get'
}).then(res => {
  console.log('res: ', res);
}).catch(e => {
  console.log('e: ', e);
})

setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/get'
  }).then(res => {
    console.log('res: ', res);
  }).catch(e => {
    console.log('e: ', e);
  })
}, 5000)

axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
}).then(res => {
  console.log('res: ', res);
}).catch((e: AxiosError) => {
  console.log('e: ', e.message);
  console.log('e.config: ', e.config);
  console.log('e.code: ', e.code);
  console.log('e.request: ', e.request);
  console.log('e.response: ', e.response);
})


