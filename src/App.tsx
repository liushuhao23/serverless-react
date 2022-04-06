/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-04-03 22:05:47
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-04-06 17:35:15
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
    let type = ''
    let url = 'https://my-typescript-worker.liushuhao25009.workers.dev/data'
    if (type === 'dev') {
      url = 'http://127.0.0.1:8787/data'
    }
    const data = await http({
      url: url,
      method: 'POST',
    });
    const datas = [
      {
        data: 1
      }
    ]
    console.log(JSON.stringify(datas), '9999')
    console.log(JSON.parse(JSON.stringify(data)), '3333')
    setRes(res = data)
    console.log(data, 'data');
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <Button type='primary' onClick={test}>
          测试
        {/* <span className="dataCss">{res.data}</span> */}
        </Button>
      </header>
    </div>
  );
}

export default App;
