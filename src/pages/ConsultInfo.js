import React, { Component } from 'react';
import WeUI from 'react-weui';
import $ from 'JQuery';
import {ConsultDb} from '../common/Db';

const {
    Page,
    Panel,
    PanelHeader,
    PanelBody,
    MediaBox,
    MediaBoxTitle,
    MediaBoxDescription,
    MediaBoxInfo,
    MediaBoxInfoMeta,
    Form,
    FormCell,
    CellBody,
    Button,
    CellFooter
} = WeUI;

class ConsultInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:parseInt(this.props.match.params.id),
            content:null,
            textValue:''
        }
    }

    
    componentWillMount() {
        var model = ConsultDb.filter(item => {
            return item.Id === this.state.id;
        })
        model[0].NewReply = 0;
        this.setState({
            content:model[0]
        })
    }
  
    handleOnChanage(e){
        this.setState({
            textValue:e.target.value
        });
    }

    handleOnClick(e){
        e.preventDefault();
        if(this.state.textValue){
            let content = this.state.content;
            let model = {
                Id: content.List.length + 1,
                Ask:this.state.textValue,
                Reply:null,
                IsRead:false,
                From:null,
                ByDate:new Date().toLocaleDateString()
            }
            content.List.push(model);
            this.setState({
                content:content,
                textValue:''
            })           

            $.toast("操作成功");
        }
    }

    render() {
        return (
            <Page infiniteLoader={false} ptr = {false}  transition={true}>

               <Panel>
                    <PanelHeader>
                        <h3>[{this.state.content.Category}]话题:{this.state.content.Title}</h3>
                    </PanelHeader>
                    <PanelBody>
                        {
                            this.state.content.List.map(item=>{
                                return (
                                    <MediaBox key={item.Id} type="text">
                                        <MediaBoxTitle className='ask'>我：{item.Ask}</MediaBoxTitle>
                                        <MediaBoxDescription className='reply'>回复：{item.Reply}</MediaBoxDescription>
                                        <MediaBoxInfo>
                                            <MediaBoxInfoMeta>时间：{item.Reply && item.ByDate}</MediaBoxInfoMeta>
                                            <MediaBoxInfoMeta>来自：{item.Reply && item.From}</MediaBoxInfoMeta>
                                        </MediaBoxInfo>
                                    </MediaBox>
                                )
                            })
                        }
                    </PanelBody>
                    <Form>
                        <FormCell vcode>
                            <CellBody>
                                <input className="weui-input" type="text" placeholder="请输入内容" value={this.state.textValue} onChange={this.handleOnChanage.bind(this)}/>
                            </CellBody>
                            <CellFooter>
                                <Button type="vcode" onClick={this.handleOnClick.bind(this)}>发送</Button>
                            </CellFooter>
                        </FormCell>
                    </Form>
                </Panel>
            </Page>
        );
    }
}

export default ConsultInfo;