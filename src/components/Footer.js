import React, { Component } from 'react';
import {Footer as WeUIFooter,FooterText} from 'react-weui'

class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            fixed : this.props.fixed === true ? true : false
        }
    }
    
    render() {
        return (
            <WeUIFooter className={this.state.fixed && 'weui-footer_fixed-bottom'}>
                <FooterText>Copyright &copy; 2019-2029 上海少年儿童图书馆</FooterText>
            </WeUIFooter>
        );
    }
}

export default Footer;