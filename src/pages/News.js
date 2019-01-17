import React, { Component } from 'react';
import WeUI from 'react-weui';
import Footer from '../components/Footer';

import {NewsDb} from '../common/Db';
const {
    Page,
    Panel,
    PanelHeader,
    PanelBody,
    MediaBox,
    MediaBoxTitle,
    MediaBoxDescription,
    MediaBoxInfo,
    Badge

} = WeUI;

class News extends Component {
    constructor(props){
        super(props);
        this.state = {
            results: NewsDb || [],
            total: NewsDb ? NewsDb.length : 0
        }
        document.title ='最新公告';
    }

    handleClick(id,e){
        e.preventDefault();
        this.props.history.push(`/about/news/${id}`);
    }

    render() {
        return (
            <Page infiniteLoader={false} ptr = {true}  transition={true}>
                <Panel>
                    <PanelHeader>共{this.state.total}条信息</PanelHeader>
                    <PanelBody>
                        {
                            this.state.results.map((item,index)=>{
                                return (
                                    <MediaBox key={item.Id} onClick={this.handleClick.bind(this,item.Id)}>
                                        <MediaBoxTitle>{index < 2 && <Badge dot preset="footer"/> }{item.Title}
                                        </MediaBoxTitle>
                                        <MediaBoxDescription>{item.Summary}</MediaBoxDescription>
                                        <MediaBoxInfo>阅读：{item.ReadCount}次 时间：{item.ByDate} </MediaBoxInfo>
                                    </MediaBox>
                                )
                            })
                        }
                    </PanelBody>
                </Panel>
                <Footer/>
            </Page>
        );
    }
}

export default News;