import React, { Component } from 'react';
import {Dialog as WeUIDialog} from 'react-weui';

class Dialog extends Component {
    constructor(props){
        super(props);
        this.state = {
            show:false,
            title:null,
            message:null,
        }
    }

    alert(title,msg,func){
        this.setState({
            show:true,
            title:title,
            message:msg,
            buttons:[{
                type: 'primary',
                label:'确认',
                onClick:e => {
                    e.preventDefault();
                    this.handleClose();
                    if(typeof(func)==='function'){
                        func(false);
                    }
                }
            }]
        });
        
    }

    confirm(title,msg,func){
        this.setState({
            show:true,
            title:title,
            message:msg,
            buttons:[{
                type: 'default',
                label:'取消',
                onClick:e => {
                    e.preventDefault();
                    this.handleClose();
                    if(typeof(func)==='function'){
                        func(false);
                    }
                }
            },{
                type: 'primary',
                label:'确认',
                onClick:e=>{
                    e.preventDefault();
                    this.handleClose();
                    if(typeof(func)==='function'){
                        func(true);
                    }
                }
            }]
        });
    }

    handleClose(){
        this.setState({
            show:false,
            title:null,
            message:null
        });
    }

    render() {
        return (
            <WeUIDialog buttons ={this.state.buttons} title={this.state.title} show = {this.state.show} >{this.state.message}</WeUIDialog>
        );
    }
}

export default Dialog;