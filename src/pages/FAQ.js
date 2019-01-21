import React, { Component } from 'react';
import WeUI from 'react-weui';
import Footer from '../components/Footer';
import {FAQDb} from '../common/Db';



const {
    Page,
    SearchBar,
    Panel,
    PanelHeader,
    PanelBody,
    MediaBox,
    MediaBoxTitle,
    MediaBoxDescription,
    MediaBoxInfo,
    MediaBoxInfoMeta
} = WeUI;


class FAQ extends Component {
    constructor(props){
        super(props);
        document.title ='常见问题';
        this.state = {
            searchText:'',
            results:FAQDb,
            total:FAQDb.length
        }
    }

    handleChange(text,e){
        
    }

    handleClick(id,e){
        e.preventDefault();
        this.props.history.push(`/about/faq/${id}`);
    }

    render() {
        return (
            <Page infiniteLoader={false} ptr = {true}  transition={true}>
                <SearchBar
                    onChange={this.handleChange.bind(this)}
                    defaultValue={this.state.searchText}
                    placeholder="搜索关键词"
                />
                <Panel className='pannel'>
                    <PanelHeader>
                        常见问题解答
                    </PanelHeader>
                    <PanelBody>
                    {
                        this.state.results.map((item,index)=>{
                            return (
                                <MediaBox key={item.Id} onClick={this.handleClick.bind(this,item.Id)}>
                                    <MediaBoxTitle>{(index + 1)}.{item.Title}</MediaBoxTitle>
                                    <MediaBoxDescription>{item.Summary}</MediaBoxDescription>
                                    <MediaBoxInfo>
                                        <MediaBoxInfoMeta>阅读：{item.ReadCount}</MediaBoxInfoMeta>
                                        <MediaBoxInfoMeta>解决：{item.YesCount}</MediaBoxInfoMeta>
                                        <MediaBoxInfoMeta>未解决：{item.NoCount}</MediaBoxInfoMeta>　　　　
                                    </MediaBoxInfo>
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

export default FAQ;