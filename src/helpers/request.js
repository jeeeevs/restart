import request from 'request';

export const get = (url)=>{
    return new Promise((resolve,reject)=>{
        request.get(url, (err, resp)=>{
            if(err) reject(err)
            else {
                resolve(JSON.parse(resp.body));
            }
        })
    })
}