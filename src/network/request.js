import axios from 'axios'
// export function request(config,success){
//   //创建实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   instance(config).then(res=>{
//     // console.log(res)
//     success(res)
//   })
// }

// export function request(config){
//   //创建实例
//   return new Promise((resolve,reject) =>{
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
    
//     instance(config).then(res=>{
//       resolve(res)
//     }).catch(err=>{
//       reject(err)
//     })
//   })
// }


// 终极方案
export function request(config){
  //创建实例
  
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })

    instance.interceptors.request.use(config=>{
      return config
    },err=>{
      console.log(err);
    })

    instance.interceptors.response.use(res=>{
      return res.data
    },err=>{
      console.log(err);
    })  
    
    return instance(config)
  
}

