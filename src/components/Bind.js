import React, { Component } from 'react';
import WeUI from 'react-weui';
import Exception from '../common/Exception';
import '../css/card-bind.css';

const {
    Form,
    FormCell,
    CellsTitle,
    CellHeader,
    CellsTips,
    Label,
    CellBody,
    ButtonArea,
    Button,
    Toptips
} = WeUI

class Bind extends Component {

    constructor(props){
        super(props);
        this.state = {
            showWarn:false,
            warnTime:null,
            warnInfo:null
        }
    }

    componentWillUnmount() {
        this.state.warnTime && clearTimeout(this.state.warnTime);
    }
    

    handleClick = e => {
        e.preventDefault();
        var cardId = this.refs.cardId;
        var cardPwd = this.refs.cardPwd;
        try{
            if(!cardId.value){
                throw new Exception(10001,'请输入读者证号.',cardId);
            }
            if(!cardPwd.value){
                throw new Exception(10002,'请输入读者证密码.',cardPwd);
            }
            this.props.toggleBind(true);
            
        }catch(e){
            console.log(e);
            this.showWarn(e.message);
            e.focus();
        }
        
    }

    showWarn(msg) {
        this.setState({
            showWarn: true,
            warnInfo:msg,
            warnTime: setTimeout(() => {
                this.setState({
                    showWarn: false,
                    warnInfo: null
                })
            }, 2000)
        })
    }


    render() {
        return (
            <div>
                <div className='logo'>
                    <img src='../images/logo.png' alt='222' />
                </div>
                <CellsTitle>请用图书馆借阅证账号和密码登录</CellsTitle>
                <Form >
                    <FormCell>
                        <CellHeader>
                            <Label>读者证</Label>
                        </CellHeader>
                        <CellBody>
                            <input 
                                type='text' 
                                ref ='cardId'
                                className='weui-input'
                                placeholder='请输入读者证号' />
                            
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>密码</Label>
                        </CellHeader>
                        <CellBody>
                            <input 
                                type='password' 
                                ref ='cardPwd'
                                className='weui-input'
                                placeholder='请输入读者证密码' />
                        </CellBody>
                    </FormCell>
                </Form>
                <CellsTips>提示：读者证初始密码为身份证号</CellsTips>
                <ButtonArea>
                    <Button onClick = {this.handleClick}>
                        绑定
                    </Button>
                </ButtonArea>
                <Toptips type="warn" show={this.state.showWarn}>{this.state.warnInfo}</Toptips>
            </div>
        );
    }
}

export default Bind;