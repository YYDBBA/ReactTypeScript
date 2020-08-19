import React from "react";
import HomeTop from "./../components/home/HomeTop";
import "./../styles/homeIndex.css";

const Home: React.FC=()=> {
    return (
      <div className="h-box">
        <HomeTop />
        <ul className="h-chart-box">
          {[0, 1, 2, 3].map((item: any, i) => {
            return (
              <li className="h-chart-box-item" key={i}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
}
export default Home
