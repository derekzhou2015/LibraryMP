import React, { Component } from 'react';
import WeUI from 'react-weui';
import Footer from '../components/Footer';
import {ConsultDb} from '../common/Db';



const {
    Page,
    SearchBar,
    Panel,
    PanelHeader,
    PanelBody,
    MediaBox,
    MediaBoxTitle,
    MediaBoxInfo,
    MediaBoxInfoMeta,
    Badge,
    ButtonArea,
    Button,
} = WeUI;


class Consult extends Component {
    constructor(props){
        super(props);
        document.title ='咨询建议';
        this.state = {
            searchText:'',
            results:ConsultDb,
            total:ConsultDb.length
        }
    }

    handleChange(text,e){
        
    }

    handleClick(id,e){
        e.preventDefault();
        this.props.history.push(`/service/consult/${id}`);
    }

    
    handleOnAddClick(e){
        e.preventDefault();
        this.props.history.push('/service/add-consult');
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
                        我的咨询或建议
                    </PanelHeader>
                    <PanelBody>
                    {
                        this.state.results.map((item,index)=>{
                            return (
                                <MediaBox key={item.Id} onClick={this.handleClick.bind(this,item.Id)}>
                                    <MediaBoxTitle>
                                        {item.NewReply > 0&&<Badge preset="footer">{item.NewReply}</Badge>}
                                        {(index + 1)}.{item.Title}
                                    </MediaBoxTitle>
                                    <MediaBoxInfo>
                                        <MediaBoxInfoMeta>类别：{item.Category}</MediaBoxInfoMeta>
                                        <MediaBoxInfoMeta>时间：{item.ByDate}</MediaBoxInfoMeta>
                                    </MediaBoxInfo>
                                </MediaBox>
                            )
                        })
                    }
                    </PanelBody>
                </Panel>
                <ButtonArea>
                    <Button onClick={this.handleOnAddClick.bind(this)}>新的咨询</Button>
                </ButtonArea>
                <Footer fixed={true}/>
            </Page>
        );
    }
}

export default Consult;