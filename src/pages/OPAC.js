import React, { Component } from 'react';
import WeUI from 'react-weui';
import Footer from '../components/Footer';

import {BookDb} from '../common/Db';



const {
    Page,
    SearchBar,
    Panel,
    PanelHeader,
    PanelBody,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription
} = WeUI

class OPAC extends Component {
    constructor(props){
        super(props);
        document.title ='书目检索';
        this.state = {
            searchText: '',
            results: BookDb || [],
            total: BookDb ? BookDb.length : 0
        }
    }


    handleChange(text,e){

    }

    handleClick(id,e){
        e.preventDefault();
        this.props.history.push(`/service/opac/${id}`);
    }

    render() {
        return (
            <Page>
                <SearchBar
                    onChange={this.handleChange.bind(this)}
                    defaultValue={this.state.searchText}
                    placeholder="搜索关键词"
                />
                <Panel className='pannel'>
                    <PanelHeader>
                    检索到 {this.state.total}本相关书籍
                    </PanelHeader>
                    <PanelBody>
                    {
                        this.state.results.map((item,index)=>{
                            return (
                                <MediaBox key = {item + index} type='appmsg' onClick={this.handleClick.bind(this,(index+1))}>
                                    <MediaBoxHeader><img src={item.Cover} alt={item.Title}/></MediaBoxHeader>
                                    <MediaBoxBody>
                                        <MediaBoxTitle>{item.Title}</MediaBoxTitle>
                                        <MediaBoxDescription>
                                            {item.Author} {item.Publisher} {item.PublishDate} 
                                            <br/>
                                            {item.CallNo}
                                        </MediaBoxDescription>
                                    </MediaBoxBody>
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

export default OPAC;