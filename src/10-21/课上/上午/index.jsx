import React from 'react';
import Slid from './conponents/slid';
import Main from './conponents/main'
// 引入数据
import data from './data/index';
export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qrueList: []
        }
    }
    //在页面打开的时候自动请求数据
    componentDidMount() {
        //假设这里就是请求数据
        this.setState({
            qrueList: require("./data/index").qrueList
        })
    }
    //点击导航查询数据
    queryInfo = id => {
        let item = this.state.qrueList.find(item => {
            return item.id === id
        });
        this.setState({
            data: item
        })
    };
    //渲染
    render() {
        const { qrueList } = this.state;
        return (
            <div>
                <h1>社会人查询系统</h1>
                <div className="flex">
                    <Slid nav={qrueList} queryinfo={this.queryInfo()} />
                    <Main data={qrueList} />
                </div>
            </div>
        )
    }
}