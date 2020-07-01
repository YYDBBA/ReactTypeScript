import React from "react";
import HomeTop from "./../components/home/HomeTop";
import { Table, Button, Input } from "antd";
import "./../styles/set.css";
import { PlusCircleOutlined } from "@ant-design/icons";

interface IState<T, D> {
  columns: Array<T>;
  data: Array<T>;
  selectedRowKeys: Array<D>;
  loading: boolean;
  btnloading: boolean;
  searchKey: any;
}

export default class Set extends React.Component<any, IState<Object, any>> {
  state: IState<Object, any> = {
    columns: [
      {
        title: "名字",
        dataIndex: "name",
      },
      {
        title: "年龄",
        dataIndex: "age",
      },
      {
        title: "性别",
        dataIndex: "sex",
      },
      {
        title: "地址",
        dataIndex: "address",
      },
    ],
    data: [],
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    btnloading: false,
    searchKey: "",
  };
  componentDidMount() {
    this.initData();
  }
  initData = () => {
    const data: any = [];
    for (let i = 0; i < 46; i++) {
      data.push({
        key: i,
        name: `用户${i}`,
        sex: `男`,
        age: 32,
        address: `中国${i}`,
      });
    }
    this.setState({
      data,
    });
  };
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };
  onSelectChange = (selectedRowKeys: any) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  enterLoading = () => {
    this.setState({
      btnloading: true,
    });
    setTimeout(() => {
      this.setState({ btnloading: false });
    }, 3000);
  };

  onSearchChange = (e: any) => {
    this.setState({
      searchKey: e.target.value,
    });
  };
  resetSearchKey = () => {
    this.setState({
      searchKey: "",
    });
  };
  public render() {
    const { selectedRowKeys, columns, data, searchKey } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    const { btnloading } = this.state;
    return (
      <div className="s-box">
        <HomeTop />
        <div className="s-bottom">
          <div className="s-bottom-left">
            <div style={{ marginBottom: 0 }}>
              {/* <Button
                type="primary"
                onClick={this.start}
                disabled={!hasSelected}
                loading={loading}
              >
                重置
              </Button> */}
              <span style={{ marginLeft: 8 }}>
                {hasSelected ? `选中 ${selectedRowKeys.length} 项` : ""}
              </span>
            </div>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data}
              size="middle"
            />
          </div>
          <div className="s-bottom-right">
            <div>工具栏</div>
            <div style={{ marginTop: 10 }}>
              <Button
                type="primary"
                icon={<PlusCircleOutlined />}
                loading={btnloading}
                onClick={this.enterLoading}
              >
                添加用户
              </Button>
            </div>
            <div style={{ marginTop: 10 }}>用户名：</div>
            <div className="s-input">
              <Input
                placeholder="请输入关键字"
                value={searchKey}
                onChange={this.onSearchChange}
                size="middle"
              />
            </div>
            <div>
              <Button type="primary">搜索</Button>
              <Button onClick={this.resetSearchKey} style={{ marginLeft: 10 }}>
                重置
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
