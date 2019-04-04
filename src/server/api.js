import axios from "./index";
import { message } from 'antd';

//获取数据
 const get=(path)=> {
    return new Promise((resolve, reject) => {
        axios.get(path).then(data => {
                resolve(data ? data.content : data);
            }).catch(err => {
                reject(err);
            });
    });
};

//提交数据
 const post=(path, from)=> {
    return new Promise((resolve, reject) => {
        axios.post(path, from).then(data => {
                resolve( data.content || data.data);
            }).catch(err => {
                if (axios.isCancel(err)) {
                        //请求被取消
                } else {
                     message.error(err || "错误");
                    // 处理错误
                    reject(err);
                }

                //reject(err);
            });
    });
}
//同时提交多条数据
const axiosAll=(arr)=> {
    return new Promise((resolve, reject) => {
        axios.all(arr).then(axios.spread(function() {
                // 两个请求现在都执行完成
            resolve([...arguments])
            })).catch(err=>{
                reject(err)
        });
    })
};



export { post , get , axiosAll}