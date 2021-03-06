import React, { Component } from 'react';
import {Grids} from 'react-weui';
import {withRouter} from "react-router-dom";

class ServiceGrids extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.setState({
            data: [{
                icon: <img src = 'images/icon1.png' alt = '证(解)绑定' /> ,
                label: '证(解)绑定',
                onClick: e => {
                    e.preventDefault();
                    this.props.history.push('/service/cardbind')
                }
            }, {
                icon: <img src = 'images/icon2.png' alt = '图书续借' /> ,
                label: '图书续借',
                onClick: e => {
                    e.preventDefault();
                    this.props.history.push('/service/renew')
                }
            }, {
                icon: <img src = 'images/icon3.png' alt = '书目检索' /> ,
                label: '书目检索',
                onClick: e => {
                    e.preventDefault();
                    this.props.history.push('/service/opac')
                }
            }, {
                icon: <img src = 'images/icon4.png' alt = '借阅信息' /> ,
                label: '借阅信息',
                onClick: e => {
                    e.preventDefault();
                    this.props.history.push('/service/borrow')
                }
            }, {
                icon: <img src = 'images/icon9.png' alt = '咨询建议' /> ,
                label: '咨询建议',
                onClick: e => {
                    e.preventDefault();
                    this.props.history.push('/service/consult')
                }
            }, {
                icon: <img src = 'images/icon5.png' alt = '通借通还' /> ,
                label: '通借通还',
                onClick: e => {
                    e.preventDefault();
                    this.props.history.push('/service/unifylend')
                }
            }, {
                icon: <img src = 'images/icon6.png' alt = '数字资源' /> ,
                label: '数字资源',
                onClick: e => {
                    e.preventDefault();
                    this.props.history.push('/service/resources')
                }
            }, {
                icon: <img src = 'images/icon7.png' alt = '阅读直通车' /> ,
                label: '阅读直通车',
                onClick: e => {
                    e.preventDefault();
                    // this.props.history.push('/about')
                    window.location.href='http://mp.weixin.qq.com/mp/homepage?__biz=MjM5MDE5NjkxNg==&hid=1&sn=037535a49c4a8e542d7ae96cc225ce32&scene=18#wechat_redirect';
                }
            }, {
                icon: <img src = 'images/icon8.png' alt = '少图小书虫' /> ,
                label: '少图小书虫',
                onClick: e => {
                    e.preventDefault();
                    // this.props.history.push('/about')
                    window.location.href='http://mp.weixin.qq.com/mp/homepage?__biz=MjM5MDE5NjkxNg==&hid=1&sn=037535a49c4a8e542d7ae96cc225ce32&scene=18#wechat_redirect'
                }
            }]
        })
    }
    

    render() {
        return (
            <Grids data = {this.state.data}/>
        );
    }
}

export default withRouter(ServiceGrids);