import React, { Component } from 'react';
import WeUI from 'react-weui';
import $ from 'JQuery';
import Exception from '../common/Exception';
import {ConsultCategoryDb,ConsultDb} from '../common/Db';

const {
    Page,
    Form,
    CellsTitle,
    FormCell,
    CellBody,
    Label,
    ButtonArea,
    Button,
    Input,
    Select,
    TextArea,
    CellHeader
} = WeUI;

class ConsultNew extends Component {
    constructor(props){
        super(props);
        this.state = {
            select1:ConsultCategoryDb[5].value,
            title:'',
            text1:''
        }
        this.handleOnChanage = this.handleOnChanage.bind(this);
    }

    
  
    handleOnChanage(e){
        let target = e.target;
        this.setState({
            [target.name]:target.value
        });
    }

    handleOnClick(e){
        e.preventDefault();
        try{
            if(!this.state.title){
                throw new Exception(10001,'请输入您的话题.');
            }
            if(!this.state.text1){
                throw new Exception(10002,'请输入留言内容.');
            }

            let dateNow = new Date();
            let model = {
                Id: ConsultDb.length + 1,
                Title: this.state.title,
                Category:this.state.select1,
                List: [{
                    Id: 1,
                    Ask:this.state.text1,
                    Reply:null,
                    IsRead:false,
                    From:null,
                    ByDate:dateNow.toLocaleDateString()
                }],
                NewReply:0,
                ByDate: dateNow.toLocaleDateString()
            }
            ConsultDb.push(model);
            $.alert('您的留言已经成功发送，您可以随时关注回复，感谢您的支持。',()=>{
                this.props.history.push('/service/consult')
            })

        }catch(e){
            $.alert(e.message);
        }
    }

    render() {
        return (
            <Page infiniteLoader={false} ptr = {false}  transition={true}>
                <CellsTitle>咨询建议</CellsTitle>
                <Form>
                    <FormCell select selectPos="after">
                        <CellHeader>
                            <Label>类别</Label>
                        </CellHeader>
                        <CellBody>
                            <Select data={ConsultCategoryDb} name='select1' value={this.state.select1} onChange={this.handleOnChanage}>
                            </Select>
                        </CellBody>
                    </FormCell>    
                    <FormCell>
                        <CellHeader>
                            <Label>主题</Label>
                        </CellHeader>
                        <CellBody>
                            <Input placeholder='请输入您的话题' name='title' value={this.state.title} onChange={this.handleOnChanage} />
                        </CellBody>
                    </FormCell>                   
                    <FormCell>
                        <CellBody>
                            <TextArea placeholder="请写下您宝贵的留言" name='text1' rows="3" maxLength={100} value={this.state.text1} onChange={this.handleOnChanage}></TextArea>
                        </CellBody>
                    </FormCell>
                </Form>
                <ButtonArea>
                        <Button onClick={this.handleOnClick.bind(this)}>提交</Button>
                    </ButtonArea>
            </Page>
        );
    }
}

export default ConsultNew;