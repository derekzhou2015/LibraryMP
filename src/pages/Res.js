import React, { Component } from 'react';
import WeUI from 'react-weui';
import Footer from '../components/Footer';

import {ResDb} from '../common/Db';


const {
    Page,
    Article,
    Flex,
    FlexItem
} = WeUI


class Res extends Component {
    constructor(props){
        super(props);
        document.title ='资源详情';
        this.state = {
            id:parseInt(this.props.match.params.id),
            content:null
        }
    }

    componentWillMount() {
        var model = ResDb.filter(item => {
            return item.Id === this.state.id;
        })
        this.setState({
            content:model[0]
        })
    }
    render() {
        return (
            <Page infiniteLoader={false} ptr = {false}  transition={true}>
                <Article>
                    <h1>{this.state.content.Title}</h1>
                    <section>
                        <section>
                            <Flex>
                                <FlexItem>类别：{this.state.content.Category}</FlexItem>
                                <FlexItem>状态：{this.state.content.State}</FlexItem>
                            </Flex>
                            <Flex>
                                <FlexItem>收录：{this.state.content.ByDate}</FlexItem>
                                <FlexItem>阅读：{this.state.content.ReadCount}</FlexItem>
                            </Flex>
                        </section>
                        <h3>{this.state.content.CallNo}</h3>
                        {
                            this.state.content.Cover && 
                            <section>
                                <img src={'../' + this.state.content.Cover} alt={this.state.content.Title}/>
                            </section>
                        }
                        <section>
                        {
                            this.state.content.Links && 
                            this.state.content.Links.map((item,index)=>{
                                return (
                                    <a key={index} href={item.Url} title={item.Tips} className="weui-btn weui-btn_primary">{item.Name}点击进入</a>
                                )
                            })
                        }
                        </section>
                        <section>
                            <h3>简介：</h3>
                            <p>{this.state.content.Description}</p>
                        </section>
                    </section>
                </Article>
                <Footer/>
            </Page>
        );
    }
}

export default Res;