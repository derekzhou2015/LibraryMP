import React, { Component } from 'react';
import WeUI from 'react-weui';
import Bind from '../components/Bind';
import UnBind from '../components/UnBind';
const {
    Page
} = WeUI

class CardBind extends Component {
    constructor(props){
        super(props);
        document.title ='证(解)绑定';
        this.state = {
            bound:false
        }
    }

    componentDidMount(){
        this.setState({
            bound:Math.random()>0.4
        })
    }

    ToggleBind(bound){
        this.setState({
            bound : bound
        })
    }

    render() {
        return (
            <div>
                <Page infiniteLoader={false} ptr = {false}  transition={true} >
                    {
                        this.state.bound ? 
                            <UnBind toggleBind = { this.ToggleBind.bind(this) }/>   
                            :
                            <Bind toggleBind = { this.ToggleBind.bind(this) }/>                      
                    }
                </Page>
            </div>
        );
    }
}

export default CardBind;