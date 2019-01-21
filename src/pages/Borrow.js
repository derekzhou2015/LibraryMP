import React, { Component } from 'react';
import WeUI from 'react-weui';
import Footer from '../components/Footer';

import {BorrowDb} from '../common/Db';
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


class Borrow extends Component {
    constructor(props){
        super(props);
        document.title ='借阅信息';
        this.state = {
            currentTab:0,
            results:[],
            total:0
        }
    }   

    componentDidMount() {
        let db = this.getBorrowDb(this.state.currentTab !== 0);
        this.setState({
            results:db,
            total:db.length
        })
    }
    

    handleChange(e){
        console.log(this);
    }

    handleNavBarItemClick(navId,e){
        e.preventDefault();
        if(this.state.currentTab !== navId){
            let db = this.getBorrowDb(navId !== 0);
            this.setState({
                currentTab:navId,
                results:db,
                total:db.length
            });
        }
    }

    handleClick(id,e){
        e.preventDefault();
        this.props.history.push(`/service/borrow/${id}`);
    }

    getBorrowDb(isReturn){
        let array = BorrowDb.filter(item=>{
            return item.IsReturn === isReturn;
        })

        return array;
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
                                this.state.results.map((item)=>{
                                    return (
                                        <MediaBox key = {item.Id} type='appmsg' onClick={this.handleClick.bind(this,item.Id)}>
                                            <MediaBoxHeader><img src={item.Cover} alt={item.Title}/></MediaBoxHeader>
                                            <MediaBoxBody>
                                                <MediaBoxTitle>{item.Title}</MediaBoxTitle>
                                                <MediaBoxDescription>
                                                    {item.Author} {item.Publisher} {item.PublishDate}     
                                                </MediaBoxDescription>
                                                <MediaBoxDescription>
                                                    {`ISBN:${item.ISBN}`}
                                                </MediaBoxDescription>
                                                <MediaBoxDescription>
                                                    {item.IsReturn ? `归还时间:${item.ReturnDate}`:`借阅时间:${item.ByDate}`} 
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
                <Footer/>
            </Page>
        );
    }
}

export default Borrow;