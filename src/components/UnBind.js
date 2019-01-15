import React, { Component } from 'react';
import WeUI from 'react-weui';
import Dialog from '../components/Dialog';
const {
    Msg
} = WeUI

class Bind extends Component {
    constructor(props){
        super(props);
        this.state = { }
        this.dialog = React.createRef();
    } 

    handleClick = e => {
        e.preventDefault();
        this.dialog.confirm('提示',"信息删除成功",(r)=>{
            if(r){
                this.props.toggleBind(false);
            }
        })
    }

    render() {
        const msgBtns = [{
            type: 'primary',
            label: '解绑读者证',
            onClick: this.handleClick
        }];
        return (
            <div>
                <Msg
                    type="success"
                    title="读者证已绑定"
                    description="点击下方按钮可以解除读者证绑定"
                    buttons={msgBtns}/>
                <Dialog ref={ref=>this.dialog=ref}/>
            </div>
        );
    }
}

export default Bind;