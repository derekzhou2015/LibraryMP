import React, { Component } from 'react';
import WeUI from 'react-weui';
import $ from 'JQuery';
import {FAQDb} from '../common/Db';
import Footer from '../components/Footer';

const {
    Page,
    Article,
    MediaBoxInfo,
    MediaBoxInfoMeta,
    Button
} = WeUI;

class FAQInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:parseInt(this.props.match.params.id),
            content:null
        }
    }

    
    componentWillMount() {
        var model = FAQDb.filter(item => {
            return item.Id === this.state.id;
        })
        this.setState({
            content:model[0]
        })
    }

    handleYesClick(e){
        e.preventDefault();
        $.alert("很高兴能帮助到您，感谢您的支持。",()=>{
            let content = this.state.content;
            content.YesCount++;
            this.setState({
                content:content
            })
            this.props.history.push('/about/faq');
        });
    }
    handleNoClick(e){
        e.preventDefault();
        $.alert("很遗憾未能帮助到您，您可以向我们提交您的问题。",()=>{
            this.props.history.push('/service/consult');
        });
    }
    
    

    render() {
        return (
            <Page infiniteLoader={false} ptr = {false}  transition={true}>
                <Article>
                    <section className='orange'>问：{this.state.content.Title}</section>
                    <section>答：{this.state.content.RichText}</section>
                    <section>
                        <MediaBoxInfo>
                                <MediaBoxInfoMeta>阅读：{this.state.content.ReadCount}</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta>解决：{this.state.content.YesCount}</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta>未解决：{this.state.content.NoCount}</MediaBoxInfoMeta>
                        </MediaBoxInfo>
                        <Button size='small' onClick={this.handleYesClick.bind(this)}>已解决</Button>&nbsp;&nbsp;
                        <Button size='small' onClick={this.handleNoClick.bind(this)}type='default'>仍未解决</Button>
                    </section>
                </Article>
                <Footer fixed={true}/>
            </Page>
        );
    }
}

export default FAQInfo;