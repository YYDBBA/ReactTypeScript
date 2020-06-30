import React from "react"; // { useState, useEffect }
import "./ht.css";
// import { Button } from "antd";

interface IProps {
  [propName: string]: any;
}
function HomeTop(props: IProps) {
  // const [count, setCount] = useState(0);
  // const [info, setInfo] = useState({
  //   age: props.age,
  //   name: props.name,
  // });
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // });
  return (
    <div className="ht-block">
      {/* <div>{count}</div>
      <div>
        {info.name}:{info.age}
      </div>
      <Button onClick={() => setCount(count + 1)}>加</Button> */}
    </div>
  );
}
export default HomeTop;
