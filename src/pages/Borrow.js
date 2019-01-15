import React, { Component } from 'react';
import WeUI from 'react-weui';


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
    Tab,
    NavBar,
    NavBarItem,
    TabBody
} = WeUI

const db2 = [
    {
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        ISBN:'9787121317385',
        ByDate:'2019-01-14 18:45'
    },{
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        ISBN:'9787121317385',
        ByDate:'2019-01-14 18:45'
    },{
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        ISBN:'9787121317385',
        ByDate:'2019-01-14 18:45'
    },{
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        ISBN:'9787121317385',
        ByDate:'2019-01-14 18:45'
    },{
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        ISBN:'9787121317385',
        ByDate:'2019-01-14 18:45'
    },{
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        ISBN:'9787121317385',
        ByDate:'2019-01-14 18:45'
    },{
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        ISBN:'9787121317385',
        ByDate:'2019-01-14 18:45'
    }
]

const db1 = [
    {
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        ISBN:'9787121317385',
        ByDate:'2019-01-14 18:45'
    },{
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        ISBN:'9787121317385',
        ByDate:'2019-01-14 18:45'
    },{
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        ISBN:'9787121317385',
        ByDate:'2019-01-14 18:45'
    }
]

class Borrow extends Component {
    constructor(props){
        super(props);
        document.title ='借阅信息';
        this.state = {
            currentTab:0,
            results:db1||[],
            total:db1.length
        }
    }   

    handleChange(e){
        console.log(this);
    }

    handleNavBarItemClick(id,e){
        e.preventDefault();
        if(this.state.currentTab !== id){
            var db = id === 0 ? db1 : db2;
            this.setState({
                currentTab:id,
                results:db,
                total:db.length
            });
        }
    }

    handleClick(id,e){
        e.preventDefault();
        this.props.history.push(`/service/borrow/${id}`);
    }

    render() {
        return (
            <Page>
                
                <Tab>
                    <NavBar className="borrow-navbar">
                        <NavBarItem className='borrow-navbar-item' active={this.state.currentTab === 0} onClick={this.handleNavBarItemClick.bind(this,0)}>当前借阅</NavBarItem>
                        <NavBarItem className='borrow-navbar-item' active={this.state.currentTab === 1} onClick={this.handleNavBarItemClick.bind(this,1)}>历史借阅</NavBarItem>
                    </NavBar>

                    <TabBody>
                        <Panel>
                            <PanelHeader>
                                {this.state.currentTab === 0 ? '当前借阅':'历史借阅'}：{this.state.total}本
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
                                                    ISBN:{item.ISBN}
                                                    <br/>
                                                    {this.state.currentTab === 0 ? '借阅时间':'归还时间'}：{item.ByDate}
                                                </MediaBoxDescription>
                                            </MediaBoxBody>
                                        </MediaBox>
                                    )
                                })
                            }
                            </PanelBody>
                        </Panel>
                    </TabBody>
                </Tab>
            </Page>
        );
    }
}

export default Borrow;