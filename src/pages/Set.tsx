import React, { useState } from "react";
import { connect } from 'react-redux'
import { Button } from "antd";
import "./../styles/set.css";

const Set: React.FC = (props: any) => {
  const { age, name, changeAge, changeName } = props
  const [count, setCount] = useState(0)
  return (<div className="App">
    <Button type="primary" onClick={changeAge}>加年龄</Button>
    <div>{count}</div>
    <div>
      我是{name}，今年{age}
    </div>
  </div>)
}

const mapStateToProps = (state: any) => {
  return {
    age: state.age,
    name: state.name
  }
}
const mapDispathToProps = (dispatch: any) => {
  return {
    changeAge() {
      const action = {
        type: 'CHANGE_AGE'
      }
      dispatch(action)
    },
    changeName() {
      const action = {
        type: 'CHANGE_NAME',
        nameVal: '开心'
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Set)
