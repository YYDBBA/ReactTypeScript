import React from "react";
import Echart from "echarts";
import "./../styles/my.css";

interface IState {
  echart: any;
}
export default class My extends React.Component<any, any> {
  state: any = {
    echart: Echart,
  };
  componentDidMount() {
    this.init();
  }
  public init = () => {
    const { echart } = this.state;
    let myChart = echart.init(document.getElementById("main"));
    let option = {
      tooltip: {},
      legend: {
        data: ["销量"],
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.clear();
    myChart.setOption(option, true);
    window.addEventListener("resize", () => {
      myChart.resize();
    });
    // setTimeout(this.init, 5000);
  };
  public render() {
    return <div id="main"></div>;
  }
}
