import React from "react";
import HomeTop from "./../components/home/HomeTop";
import "./../styles/homeIndex.css";
import F2 from "@antv/f2";
import _ from "lodash";

interface IState<T> {
  data1: Array<T>;
  data2: Array<T>;
  data3: Array<T>;
  data4: Array<T>;
}
export default class Home extends React.Component<any, IState<Object>> {
  public state: IState<Object> = {
    data1: [
      { genre: "Sports", sold: 275 },
      { genre: "Strategy", sold: 115 },
      { genre: "Action", sold: 120 },
      { genre: "Shooter", sold: 350 },
      { genre: "Other", sold: 150 },
    ],
    data2: [
      {
        date: "2017-06-05",
        value: 116,
      },
      {
        date: "2017-06-06",
        value: 129,
      },
      {
        date: "2017-06-07",
        value: 135,
      },
      {
        date: "2017-06-08",
        value: 86,
      },
      {
        date: "2017-06-09",
        value: 73,
      },
      {
        date: "2017-06-10",
        value: 85,
      },
      {
        date: "2017-06-11",
        value: 73,
      },
      {
        date: "2017-06-12",
        value: 68,
      },
      {
        date: "2017-06-13",
        value: 92,
      },
      {
        date: "2017-06-14",
        value: 130,
      },
      {
        date: "2017-06-15",
        value: 245,
      },
      {
        date: "2017-06-16",
        value: 139,
      },
      {
        date: "2017-06-17",
        value: 115,
      },
      {
        date: "2017-06-18",
        value: 111,
      },
      {
        date: "2017-06-19",
        value: 309,
      },
      {
        date: "2017-06-20",
        value: 206,
      },
      {
        date: "2017-06-21",
        value: 137,
      },
      {
        date: "2017-06-22",
        value: 128,
      },
      {
        date: "2017-06-23",
        value: 85,
      },
      {
        date: "2017-06-24",
        value: 94,
      },
      {
        date: "2017-06-25",
        value: 71,
      },
      {
        date: "2017-06-26",
        value: 106,
      },
      {
        date: "2017-06-27",
        value: 84,
      },
      {
        date: "2017-06-28",
        value: 93,
      },
      {
        date: "2017-06-29",
        value: 85,
      },
      {
        date: "2017-06-30",
        value: 73,
      },
      {
        date: "2017-07-01",
        value: 83,
      },
    ],
    data3: [
      {
        name: "芳华",
        percent: 0.4,
        a: "1",
      },
      {
        name: "妖猫传",
        percent: 0.2,
        a: "1",
      },
      {
        name: "机器之血",
        percent: 0.18,
        a: "1",
      },
      {
        name: "心理罪",
        percent: 0.15,
        a: "1",
      },
      {
        name: "寻梦环游记",
        percent: 0.05,
        a: "1",
      },
      {
        name: "其他",
        percent: 0.02,
        a: "1",
      },
    ],
    data4: [
      {
        name: "London",
        月份: "Jan.",
        月均降雨量: 18.9,
      },
      {
        name: "London",
        月份: "Feb.",
        月均降雨量: 28.8,
      },
      {
        name: "London",
        月份: "Mar.",
        月均降雨量: 39.3,
      },
      {
        name: "London",
        月份: "Apr.",
        月均降雨量: 81.4,
      },
      {
        name: "London",
        月份: "May.",
        月均降雨量: 47,
      },
      {
        name: "London",
        月份: "Jun.",
        月均降雨量: 20.3,
      },
      {
        name: "London",
        月份: "Jul.",
        月均降雨量: 24,
      },
      {
        name: "London",
        月份: "Aug.",
        月均降雨量: 35.6,
      },
      {
        name: "Berlin",
        月份: "Jan.",
        月均降雨量: 12.4,
      },
      {
        name: "Berlin",
        月份: "Feb.",
        月均降雨量: 23.2,
      },
      {
        name: "Berlin",
        月份: "Mar.",
        月均降雨量: 34.5,
      },
      {
        name: "Berlin",
        月份: "Apr.",
        月均降雨量: 99.7,
      },
      {
        name: "Berlin",
        月份: "May.",
        月均降雨量: 52.6,
      },
      {
        name: "Berlin",
        月份: "Jun.",
        月均降雨量: 35.5,
      },
      {
        name: "Berlin",
        月份: "Jul.",
        月均降雨量: 37.4,
      },
      {
        name: "Berlin",
        月份: "Aug.",
        月均降雨量: 42.4,
      },
    ],
  };
  componentDidMount() {
    this.init();
  }
  public init = () => {
    this.initChart1();
    this.initChart2();
    this.initChart3();
    this.initChart4();
    // setTimeout(this.init, 5000);
  };
  public initChart1 = () => {
    const { data1 } = this.state;
    const chart = new F2.Chart({
      id: "myChart1",
      // autoFit: true,
      // height: 284,
    });

    chart.source(data1);
    chart.interval().position("genre*sold").color("genre").animate({
      appear: {
        duration: 1500
      },
    });;

    chart.render();
  };
  public initChart2 = () => {
    const { data2 } = this.state;
    const chart = new F2.Chart({
      id: "myChart2",
      pixelRatio: window.devicePixelRatio,
    });

    chart.source(data2, {
      value: {
        tickCount: 5,
        min: 0,
      },
      date: {
        type: "timeCat",
        range: [0, 1],
        tickCount: 3,
      },
    });
    chart.tooltip({
      custom: true,
      showXTip: true,
      showYTip: true,
      snap: true,
      crosshairsType: "xy",
      crosshairsStyle: {
        lineDash: [2],
      },
    });
    chart.axis("date", {
      label: (text: any, index: any, total: any) => {
        const textCfg: any = {};
        if (index === 0) {
          textCfg.textAlign = "left";
        } else if (index === total - 1) {
          textCfg.textAlign = "right";
        }
        return textCfg;
      },
    });
    chart.line().position("date*value").animate({
      appear: {
        duration: 1500
      },
    });;
    chart.render();
  };
  public initChart3 = () => {
    const { data3 } = this.state;
    const map: any = {
      芳华: "40%",
      妖猫传: "20%",
      机器之血: "18%",
      心理罪: "15%",
      寻梦环游记: "5%",
      其他: "2%",
    };
    const chart = new F2.Chart({
      id: "myChart3",
      pixelRatio: window.devicePixelRatio,
    });
    chart.source(data3, {
      percent: {
        formatter: (val: any) => {
          return val * 100 + "%";
        },
      },
    });
    chart.legend({
      position: "right",
      itemFormatter: (val: any) => {
        return val + "  " + map[val];
      },
    });
    chart.tooltip(true);
    chart.coord("polar", {
      transposed: true,
      radius: 0.85,
    });
    chart.axis(true);
    chart
      .interval()
      .position("a*percent")
      .color("name", [
        "#1890FF",
        "#13C2C2",
        "#2FC25B",
        "#FACC14",
        "#F04864",
        "#8543E0",
      ])
      .adjust("stack")
      .style({
        lineWidth: 1,
        stroke: "#fff",
        lineJoin: "round",
        lineCap: "round",
      })
      .animate({
        appear: {
          duration: 1500,
          easing: "bounceOut",
        },
      });

    chart.render();
  };
  public initChart4 = () => {
    const { data4 } = this.state;
    const chart = new F2.Chart({
      id: "myChart4",
      pixelRatio: window.devicePixelRatio,
    });
    chart.source(data4, {
      月均降雨量: {
        tickCount: 5,
      },
    });
    chart.coord({
      transposed: true,
    });
    chart.tooltip({
      custom: true, // 自定义 tooltip 内容框
      onChange: (obj: any) => {
        const legend = chart.get("legendController").legends.top[0];
        const tooltipItems = obj.items;
        const legendItems = legend.items;
        const map: any = {};
        legendItems.forEach((item: any) => {
          map[item.name] = _.clone(item);
        });
        tooltipItems.forEach((item: any) => {
          const name = item.name;
          const value = item.value;
          if (map[name]) {
            map[name].value = value;
          }
        });
        legend.setItems(_.values(map));
      },
      onHide: function onHide() {
        const legend = chart.get("legendController").legends.top[0];
        legend.setItems(chart.getLegendItems().country);
      },
    });
    chart.interval().position("月份*月均降雨量").color("name").adjust("stack").animate({
      appear: {
        duration: 1500
      },
    });;
    chart.render();
  };
  public render() {
    return (
      <div className="h-box">
        <HomeTop age={19} name={"dgdg"} />
        <ul className="h-chart-box">
          {[0, 1, 2, 3].map((item: any, i) => {
            return (
              <li className="h-chart-box-item" key={i}>
                <canvas id={`myChart${item + 1}`} className="my-chart"></canvas>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
