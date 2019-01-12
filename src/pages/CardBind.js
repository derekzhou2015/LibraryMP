import React, { Component } from 'react';
import WeUI from 'react-weui';
import '../css/card-bind.css';

const {
    Page,
    Form,
    FormCell,
    CellsTitle,
    CellHeader,
    CellsTips,
    Label,
    CellBody,
    Input,
    ButtonArea,
    Button,
    Toptips
} = WeUI

class CardBind extends Component {
    constructor(props){
        super(props);
        document.title ='证(解)绑定';
        this.state = {
            cardId:'',
            cardPwd:'' ,
            showWarn:false
        }
    }

    handleClick = e => {
        e.preventDefault();
        console.log(this.state.cardId,this.state.cardPwd);
    }

    handleInputChange = e =>{
        const target = e.target;
        this.setState(
            {
                [target.name]:target.value
            }
        );
    }

    showWarnFunc(){

    }

    render() {
        return (
            <Page infiniteLoader={false} ptr = {false}  transition={true} >
                <div className='logo'>
                    <img src='../images/logo.png' alt='222' />
                </div>
                <CellsTitle>请用图书馆借阅证账号和密码登录</CellsTitle>
                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>读者证</Label>
                        </CellHeader>
                        <CellBody>
                            <Input 
                                type='text' 
                                name='cardId'
                                placeholder='请输入读者证号' 
                                value={this.state.cardId} 
                                onChange={this.handleInputChange}/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>密码</Label>
                        </CellHeader>
                        <CellBody>
                            <Input 
                                type='password'  
                                name='cardPwd'
                                placeholder='请输入读者证密码'
                                value={this.state.cardPwd} 
                                onChange={this.handleInputChange}/>
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
            </Page>
        );
    }
}

export default CardBind;