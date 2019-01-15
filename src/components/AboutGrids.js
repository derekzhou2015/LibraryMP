import React, { Component } from 'react';
import {Grids} from 'react-weui';
import {withRouter} from "react-router-dom";

class AboutGrids extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.setState({
            data: [{
                icon: <img src = 'images/icon31.png' alt = '本馆介绍' /> ,
                label: '本馆介绍',
                onClick: e => {
                    e.preventDefault();
                    this.props.history.push('/service');
                }
            }, {
                icon: <img src = 'images/icon32.png' alt = '读者须知' /> ,
                label: '读者须知',
                onClick: e => {
                    e.preventDefault();
                    this.props.history.push('/service');
                }
            }, {
                icon: <img src = 'images/icon33.png' alt = '开放时间' /> ,
                label: '开放时间',
                onClick: e => {
                    e.preventDefault();
                    this.props.history.push('/service');
                }
            }, {
                icon: <img src = 'images/icon34.png' alt = '借阅区介绍' /> ,
                label: '借阅区介绍',
                onClick: e => {
                    e.preventDefault();
                    this.props.history.push('/service');
                }
            }, {
                icon: <img src = 'images/icon35.png' alt = '本馆导航' /> ,
                label: '本馆导航',
                onClick: e => {
                    e.preventDefault();
                    this.props.history.push('/service');
                }
            }, {
                icon: <img src = 'images/icon36.png' alt = '最新公告' /> ,
                label: '最新公告',
                onClick: e => {
                    e.preventDefault();
                    this.props.history.push('/service');
                }
            }, {
                icon: <img src = 'images/icon37.png' alt = '常见问题' /> ,
                label: '常见问题',
                onClick: e => {
                    e.preventDefault();
                    this.props.history.push('/service');
                }
            }, {
                icon: <img src = 'images/icon38.png' alt = '电子地图' /> ,
                label: '电子地图',
                onClick: e => {
                    e.preventDefault();
                    this.props.history.push('/service');
                }
            }, {
                icon: <img src = 'images/icon39.png' alt = '联系我们' /> ,
                label: '联系我们',
                onClick: e => {
                    e.preventDefault();
                    this.props.history.push('/service');
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

export default withRouter(AboutGrids);