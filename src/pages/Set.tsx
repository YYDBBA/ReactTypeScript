import React, { useState, useCallback } from "react";
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import SetUI from './setUIComponent/SetUI'

const Set: React.FC<any> = (props) => {
  const [count, setCount] = useState(0)
  const {name,age} = useSelector((state: any) => ({name: state.name,age: state.age}), shallowEqual);
  const dispatch = useDispatch();
  const changeAge = useCallback(() => dispatch({ type: 'CHANGE_AGE' }), [dispatch])
  const changeName = useCallback(() => dispatch({ type: 'CHANGE_NAME', nameVal: '开心' }), [dispatch])
  return (<SetUI changeAge={changeAge} changeName={changeName} name={name} age={age} count={count} />)
}
export default React.memo(Set)
