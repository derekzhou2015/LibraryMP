import React, { Component } from 'react';
import WeUI from 'react-weui';
import $ from 'JQuery';
import Footer from '../components/Footer';

const {
    Page,
    Panel,
    PanelHeader,
    PanelBody,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
    Button,
    ButtonArea
} = WeUI

const db = [
    {
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        ISBN:'9787121317385',
        ByDate:'01-14 18:45',
        State:'可续借'
    },{
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        ISBN:'9787121317385',
        ByDate:'01-14 18:45',
        State:'已续借'
    },{
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        ISBN:'9787121317385',
        ByDate:'01-14 18:45',
        State:'可续借'
    }
]

class Renew extends Component {
    constructor(props){
        super(props);
        document.title ='图书续借';
        this.state = {
            results: db || [],
            total: db.length,
            disabled: false
        }
    }

    hasRenewState = ()=>{
        return this.state.results.some(el =>{
            return el.State === '可续借';
        })
    }

    componentDidMount() {
        this.setState({
            disabled:!this.hasRenewState()
        })
    }
 
    handleClick(e){
        e.preventDefault();
        $.confirm("您确定要续借已借图书吗？",()=>{
            this.state.results.forEach(el=>{
                el.State='已续借';
            })
            this.setState({
                disabled:!this.hasRenewState()
            })
        })
    }

    render() {
        return (
            <Page>
                <Panel className='pannel'>
                    <PanelHeader>
                    当前共借阅 {this.state.total}本图书
                    </PanelHeader>
                    <PanelBody>
                    {
                        this.state.results.map((item,index)=>{
                            return (
                                <MediaBox key = {item + index} type='appmsg'>
                                    <MediaBoxHeader><img src={item.Cover} alt={item.Title}/></MediaBoxHeader>
                                    <MediaBoxBody>
                                        <MediaBoxTitle>{item.Title}</MediaBoxTitle>
                                        <MediaBoxDescription>
                                            {item.Author} {item.Publisher} {item.PublishDate}
                                            <br/>
                                            ISBN:{item.ISBN}
                                            <br/>
                                            借阅时间：{item.ByDate}
                                            <br/>
                                            状态：<span className = {item.State === '可续借' ? 'green' : 'gary'}>{item.State}</span>
                                        </MediaBoxDescription>
                                    </MediaBoxBody>
                                </MediaBox>
                            )
                        })
                    }
                    </PanelBody>
                </Panel>
                <ButtonArea>
                    <Button onClick={this.handleClick.bind(this)}  disabled={this.state.disabled}>续借</Button>
                </ButtonArea>
                <Footer/>
            </Page>
        );
    }
}
export default Renew;