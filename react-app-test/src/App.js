import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test1 from './Home/test1'

function App() {
  const baseInfo={
    id:123456
  };

  const info={
    name:"张三",
    age:18,
    sex:"男",
    ...baseInfo
  };

  return (
    <div className="App">
      <Test1 {...info}></Test1>
    </div>
  );
}

export default App;
