import React, { Component } from 'react';
import WeUI from 'react-weui';
import Dialog from '../components/Dialog';



const {
    Page,
    Article
} = WeUI


class Res extends Component {
    constructor(props){
        super(props);
        document.title ='资源详情';
        this.state = {
            content:this.props.location.query || {}
        }
    }

    render() {
        return (
            <Page infiniteLoader={false} ptr = {true}  transition={true}>
                <Article>
                    <h1>{this.state.content.Title}</h1>
                    <section>
                        <h2>类别：{this.state.content.Category} 阅读：{this.state.content.ReadCount}</h2>
                        <h3>{this.state.content.CallNo}</h3>
                        {
                            this.state.content.Cover && 
                            <section>
                                <img src={'../' + this.state.content.Cover} alt={this.state.content.Title}/>
                            </section>
                        }
                        {
                            this.state.content.Links &&
                            this.state.content.Links.map((item,index)=>{
                                return (
                                    <p key={index}>{item.Name}:<a href={item.Url} title={item.Tips}>点击进入</a></p>
                                )
                            })
                        }
                        <section>
                            <p>收录时间:{this.state.content.ByDate}</p>
                            <p>订购状态:{this.state.content.State}</p>
                        </section>
                        <section>
                            <h3>简介：</h3>
                            <p>{this.state.content.Description}</p>
                        </section>
                    </section>
                </Article>
                <Dialog ref={ref=>this.dialog=ref}/>
            </Page>
        );
    }
}

export default Res;