import { CHANGE_NAME, CHANGE_AGE } from './actionType'
const initState = {
  name: 'yydbb',
  age: 18
}
interface Action {
  type: string,
  ageVal: number,
  nameVal: string
}
//reducer是一个纯函数，这里且将纯函数理解为入参相同，返回值就一定相同，具体定义请大家移步官方文档
const reducer = (state = initState, action: Action) => {
  if (action.type === CHANGE_NAME) {
    let myState = JSON.parse(JSON.stringify(state))//粗暴的深拷贝，真实项目中不建议大家这样
    myState.name = action.nameVal
    return myState
  }
  if (action.type === CHANGE_AGE) {
    let myState = JSON.parse(JSON.stringify(state))//粗暴的深拷贝，真实项目中不建议大家这样
    myState.age--
    return myState

  }
  return state
}
export default reducer