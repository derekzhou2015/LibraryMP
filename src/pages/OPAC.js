import React, { Component } from 'react';
import WeUI from 'react-weui';



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

const db = [
    {
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        CallNo:'I242.4/4921-9#2'
    },{
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        CallNo:'I242.4/4921-9#2'
    },{
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        CallNo:'I242.4/4921-9#2'
    },{
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        CallNo:'I242.4/4921-9#2'
    },{
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        CallNo:'I242.4/4921-9#2'
    },{
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        CallNo:'I242.4/4921-9#2'
    },{
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        CallNo:'I242.4/4921-9#2'
    },{
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        CallNo:'I242.4/4921-9#2'
    },{
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        CallNo:'I242.4/4921-9#2'
    },{
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        CallNo:'I242.4/4921-9#2'
    },{
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        CallNo:'I242.4/4921-9#2'
    }
]

class OPAC extends Component {
    constructor(props){
        super(props);
        document.title ='书目检索';
        this.state = {
            searchText:'',
            results:db,
            total:db.length
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
            </Page>
        );
    }
}

export default OPAC;