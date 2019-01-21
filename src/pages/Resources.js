import React, { Component } from 'react';
import WeUI from 'react-weui';
import Footer from '../components/Footer';
import {ResDb} from '../common/Db';



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


class Resources extends Component {
    constructor(props){
        super(props);
        document.title ='数字资源';
        this.state = {
            searchText:'',
            results:ResDb,
            total:ResDb.length
        }
    }

    handleChange(text,e){
        
    }

    handleClick(id,e){
        e.preventDefault();
        this.props.history.push(`/service/resources/${id}`);
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
                        this.state.results.map((item)=>{
                            return(
                                <Grid key = {item.Id} onClick={this.handleClick.bind(this,item.Id)}>
                                    <GridIcon className='res'><img src={item.Cover} alt={item.Title}/></GridIcon>
                                    <GridLabel>{item.Title}</GridLabel>
                                </Grid>
                            )
                        })
                    }
                </Grids>
                    </PanelBody>
                </Panel>
                <Footer/>
            </Page>
        );
    }
}

export default Resources;