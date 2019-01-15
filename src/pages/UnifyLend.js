import React, { Component } from 'react';
import WeUI from 'react-weui';
import Article from '../components/Article';

const {Page} = WeUI;
const content = {
    Id:1,
    Cover: '../images/logo.png',
    Title: '通借通还',
    ByDate:'2019-01-15',
    RichText:'-暂无信息-',
    ReadCount:Math.round(Math.random()*1000)
}

class UnifyLend extends Component {
    constructor(props){
        super(props);
        document.title ='通借通还';
        this.state = {
            content:content
        }
    }

    render() {
        return (
            <Page infiniteLoader={false} ptr = {true}  transition={true}>
                <Article content={this.state.content}/>
            </Page>
        );
    }
}

export default UnifyLend;