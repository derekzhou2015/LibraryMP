import React, { Component } from 'react';
import WeUI from 'react-weui';
import Bind from '../components/Bind';
import UnBind from '../components/UnBind';
import Footer from '../components/Footer';

const {
    Page
} = WeUI

class CardBind extends Component {
    constructor(props){
        super(props);
        document.title ='证(解)绑定';
        this.storage = window.localStorage;
        this.state = {
            bound:this.storage.bound === 'true'
        }
    }

    componentDidMount(){

    }

    
    componentWillMount() {
        
    }
    

    ToggleBind(bound){
        this.storage.setItem('bound',bound);
        this.setState({
            bound : this.storage.bound === 'true'
        })
    }

    render() {
        return (
            <Page infiniteLoader={true} ptr = {false}  transition={true} >
                {
                    this.state.bound ? 
                        <UnBind toggleBind = { this.ToggleBind.bind(this) }/>   
                        :
                        <Bind toggleBind = { this.ToggleBind.bind(this) }/>                      
                }
                <Footer/>
            </Page>

        );
    }
}

export default CardBind;