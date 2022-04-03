/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-04-03 23:56:55
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-04-04 03:44:16
 */
import axios from 'axios';


const baseApiURL = new URL(window.location.origin);

const axiosInstance = axios.create({
    baseURL: baseApiURL.href,
    // withCredentials: true, // CORS with cookies
});

axiosInstance.interceptors.request.use(
    (config) => {
        if (!config.data) {
            config.data = {};
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);
// 响应拦截器
axiosInstance.interceptors.response.use(
    (response) => {
        const res = response.data;
        if (response.status === 200 || response.status === 201) {
            return Promise.resolve(res);
        }
        return Promise.reject(res);
    },
    (error) => {
        console.log(`error：${error}`);
        return Promise.reject(error);
    },
);
export default axiosInstance;
