import React, { Component } from 'react';
import WeUI from 'react-weui';
import AboutGrids from '../components/AboutGrids';
import Footer from '../components/Footer';

const {
    Page
} = WeUI

class About extends Component {
    constructor(props){
        super(props);
        document.title ='关于少图';
    }


    

    render() {
        return (
            <Page infiniteLoader={false} ptr = {false}  transition={true} >
                <AboutGrids/>
                <Footer fixed={true}/>
           </Page>
        );
    }
}

export default About;