import React, { Component } from 'react';
import {Toptips as WeUIToptips} from 'react-weui';

class Toptips extends Component {
    constructor(props){
        super(props);
        this.state = {
            type:props.type || 'warn',
            show:false,
            message:null,
            timeoutId:null
        }
    }

    componentWillUnmount(){
        this.state.timeoutId && clearTimeout(this.state.timeoutId);
    }

    show(msg, func, time = 2000) {
        this.setState({
            show: true,
            message: msg,
            timeoutId: setTimeout(() => {
                this.setState({
                    show: false,
                    message: null
                });
                if (typeof(func) === 'function') {
                    func();
                };
            }, time)
        })
    }

    render() {
        return (
            <WeUIToptips show={this.state.show} type={this.state.type}>{this.state.message}</WeUIToptips>
        );
    }
}

export default Toptips;