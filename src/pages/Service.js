import React, { Component } from 'react';
import WeUI from 'react-weui';
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
            </Page>
        );
    }
}

export default Service;