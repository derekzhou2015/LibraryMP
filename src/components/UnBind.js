import React, { Component } from 'react';
import WeUI from 'react-weui';

const {
    Msg
} = WeUI

class Bind extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }   

    handleClick = e => {
        e.preventDefault();
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
            </div>
        );
    }
}

export default Bind;