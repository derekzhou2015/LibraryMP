import React, { Component } from 'react';
import WeUI from 'react-weui';
import Article from '../components/Article';
import {NewsDb} from '../common/Db';
import Footer from '../components/Footer';

const {Page} = WeUI;

class NewsInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:parseInt(this.props.match.params.id),
            content:null
        }
    }

    
    componentWillMount() {
        var model = NewsDb.filter(item => {
            return item.Id === this.state.id;
        })
        this.setState({
            content:model[0]
        })
    }
    

    render() {
        return (
            <Page infiniteLoader={false} ptr = {false}  transition={true}>
                <Article content={this.state.content}/>
                <Footer/>
            </Page>
        );
    }
}

export default NewsInfo;