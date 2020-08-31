import React from 'react'
import { Button } from "antd";
import "./../../styles/set.css";
const SetUI: React.FC<any> = (props) => {
  const { changeAge, changeName, count, name, age } = props
  return (
    <div className="App">
      <Button type="primary" onClick={changeAge}>变年轻</Button>
      <Button type="default" onClick={changeName}>改名字</Button>
      <div>{count}</div>
      <div>
        我是{name}，今年{age}
      </div>
    </div>
  )
}
export default React.memo(SetUI)