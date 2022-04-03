/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-04-03 22:05:47
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-04-04 04:27:54
 */
import React, {
  useState
} from 'react';

import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import http from './assets/http/http';
type ResType = {
  data: string
}
function App() {
  let [res, setRes] = useState({
    data: ''
  });
  // let res: ResType = {
  //   data: ''
  // }
  const test = async() => {
    const url = 'https://my-typescript-worker.liushuhao25009.workers.dev'
    // const devUrl = 'http://127.0.0.1:8787/data'
    // https://my-typescript-worker.liushuhao25009.workers.dev
    const data = await http({
      url: url,
      method: 'POST',
    });
    setRes(res = data)
    console.log(data, 'data');
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <Button type='primary' onClick={test}>
          测试
        <span className="dataCss">{res.data}</span>
        </Button>
      </header>
    </div>
  );
}

export default App;
