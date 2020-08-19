import React,{useState,useEffect} from "react";
import Echart from "echarts";
import "./../styles/my.css";

const My: React.FC = (props:any) => {
  const [echart,setEchart] = useState(Echart)
  useEffect(() => {
    init()
  })
  const init = () => {
    let myChart = echart.init(document.getElementById("main"));
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      // legend: {
      //   data: ["销量"],
      // },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
          itemStyle: {
            normal: {
              color: (params: any) => {
                let colors = ['#4150d8', '#28bf7e', '#ed7c2f', '#f2a93b', '#f9cf36', '#4a5bdc', '#4cd698', '#f4914e', '#fcb75b', '#ffe180', '#b6c2ff', '#96edc1']
                return colors[params.dataIndex]
              }
            }
          },
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
  return (
    <div id="main"></div>
  );
}
export default My
