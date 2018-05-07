
const httpFetch = method => async (url, data, ifBase = true) => {
  
    // 域名、body、header等根据各自项目配置，还有部分安全，加密方面的设置，
    const host = 'https://sp0.baidu.com';
    const requestUrl = `${host}${url}${data}&json=1&p=3&sid=1445_21103_22160&req=2&csor=6csor=1&cb=jQuery110208697461189369013_1524899589720&_=${new Date().getTime()}`;
    const body = {};
    const headers = {
      Accept: "application/json",
      'User-Agent': ''
    };
      // 用的是fetch函数
      return new Promise((resolve, reject) => {
        return fetch(requestUrl, {
          method: method,
          headers: headers,
          body: body,
          dataType: "jsonp",
			    jsonp: "cb", 
          mode: 'no-cors'
        }).then(response => {
          resolve(response);
          if (response && response.status === 200) {
            return response.json();
          } else {
            throw new Error('server');
          }
        }).then(res => {
          // 精简版判断
          if(res && res.code === 200 && res.enmsg === 'ok') {
            // 成功后的回调
            return res;
          }else {
            // 失败后的回调
            return res;
          }
        }).catch(err => {
          // 处理错误
        })
    })
  }
  export const get = httpFetch('GET')
  export const post = httpFetch('POST')
 
//   const httpElement = ['get', 'post', 'put', 'delete', 'download'];
//   export const httpArry = []
// //  ['get', 'post', 'put', 'delete', 'download'].forEach(element => {
// //    console.log(element, '01');
// //  });
//  for (let iterator of httpElement) {
//     iterator = httpFetch(iterator.toLocaleUpperCase());
//     console.log('iterator', iterator)
//     httpArry.push(iterator);
//  }
