import React, { Component } from 'react';
import WeUI from 'react-weui';
import Footer from '../components/Footer';
import ServiceGrids from '../components/ServiceGrids';

const {
    Page
} = WeUI

class Service extends Component {
    constructor(props){
        super(props);
        document.title ='服务大厅';
    }
    
    render() {
        return (
            <Page infiniteLoader={false} ptr = {false}  transition={true} >
                <ServiceGrids/>
                <Footer fixed={true}/>
            </Page>
        );
    }
}

export default Service;