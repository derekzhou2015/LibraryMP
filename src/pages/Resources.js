import React, { Component } from 'react';
import WeUI from 'react-weui';



const {
    Page,
    SearchBar,
    Grids,
    Grid,
    GridIcon,
    GridLabel,
    Panel,
    PanelHeader,
    PanelBody
} = WeUI;

const res = [
    {
        Id:1,
        Title:'贝贝国学',
        Cover:'../images/temp/bbgx.png',   
        Category:'国学',
        ReadCount:Math.round(Math.random()*10000),
        ByDate:'2019-01-15',
        State:'已订购',
        Description:'-暂无内容-',
        Links: [{
            Name: '外网访问',
            Url:'http://www.bbguoxue.cn/wechat/',
            Tips:''
        },{
            Name: '内网访问',
            Url:'http://www.bbguoxue.cn/wechat/',
            Tips:''
        }]
    },{
        Id:2,
        Title:'妙趣手工坊',
        Cover:'../images/temp/mqsgf.png',   
        Category:'视频',
        ReadCount:Math.round(Math.random()*10000),
        ByDate:'2019-01-15',
        State:'已订购',
        Description:'-暂无内容-',
        Links: [{
            Name: '外网访问',
            Url:'http://www.libdiy.cn/wechat',
            Tips:''
        },{
            Name: '内网访问',
            Url:'http://www.libdiy.cn/wechat',
            Tips:''
        }]
    },{
        Id:3,
        Title:'创世神话',
        Cover:'../images/temp/cssh.png',   
        Category:'视频',
        ReadCount:Math.round(Math.random()*10000),
        ByDate:'2019-01-15',
        State:'已订购',
        Description:'-暂无内容-',
        Links: [{
            Name: '外网访问',
            Url:'http://cssh.yibaolib.com/phone/index.html',
            Tips:''
        },{
            Name: '内网访问',
            Url:'http://cssh.yibaolib.com/phone/index.html',
            Tips:''
        }]
    },{
        Id:4,
        Title:'贝贝国学',
        Cover:'../images/temp/bbgx.png',   
        Category:'国学',
        ReadCount:Math.round(Math.random()*10000),
        ByDate:'2019-01-15',
        State:'已订购',
        Description:'-暂无内容-',
        Links: [{
            Name: '外网访问',
            Url:'http://www.bbguoxue.cn/wechat/',
            Tips:''
        },{
            Name: '内网访问',
            Url:'http://www.bbguoxue.cn/wechat/',
            Tips:''
        }]
    },{
        Id:5,
        Title:'妙趣手工坊',
        Cover:'../images/temp/mqsgf.png',   
        Category:'视频',
        ReadCount:Math.round(Math.random()*10000),
        ByDate:'2019-01-15',
        State:'已订购',
        Description:'-暂无内容-',
        Links: [{
            Name: '外网访问',
            Url:'http://www.libdiy.cn/wechat',
            Tips:''
        },{
            Name: '内网访问',
            Url:'http://www.libdiy.cn/wechat',
            Tips:''
        }]
    },{
        Id:6,
        Title:'创世神话',
        Cover:'../images/temp/cssh.png',   
        Category:'视频',
        ReadCount:Math.round(Math.random()*10000),
        ByDate:'2019-01-15',
        State:'已订购',
        Description:'-暂无内容-',
        Links: [{
            Name: '外网访问',
            Url:'http://cssh.yibaolib.com/phone/index.html',
            Tips:''
        },{
            Name: '内网访问',
            Url:'http://cssh.yibaolib.com/phone/index.html',
            Tips:''
        }]
    }
]

class UnifyLend extends Component {
    constructor(props){
        super(props);
        document.title ='数字资源';
        this.state = {
            searchText:'',
            results:res,
            total:res.length
        }
    }

    handleChange(text,e){

    }

    handleClick(item,e){
        e.preventDefault();
        this.props.history.push({
            pathname:`/service/resources/${item.Id}`,
            query:item
        });
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
                        共{this.state.total}个资源
                    </PanelHeader>
                    <PanelBody>
                    <Grids>
                    {
                        this.state.results.map((item,index)=>{
                            return(
                                <Grid key = {item.Id} onClick={this.handleClick.bind(this,item)}>
                                    <GridIcon className='res'><img src={item.Cover} alt={item.Title}/></GridIcon>
                                    <GridLabel>{item.Title}</GridLabel>
                                </Grid>
                            )
                        })
                        
                    }
                </Grids>
                    </PanelBody>
                </Panel>
                
            </Page>
        );
    }
}

export default UnifyLend;