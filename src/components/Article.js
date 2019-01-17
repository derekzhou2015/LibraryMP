import React, { Component } from 'react';
import {Article as WeUIArticle} from 'react-weui';


class Article extends Component {
    constructor(props){
        super(props);
        this.state = {
            content:this.props.content
        }
    }

    render() {
        return (
            <WeUIArticle>
                <h1>{this.state.content.Title}</h1>
                <section>
                    <h2>日期：{this.state.content.ByDate}</h2>
                    {
                        this.state.content.Cover && 
                        <section className='article-cover-container'>
                            <img src={this.state.content.Cover} alt={this.state.content.Title}/>
                        </section>
                    }
                    <section>
                        {this.state.content.RichText}
                    </section>
                    <section>
                        <span>阅读：{this.state.content.ReadCount}</span>
                    </section>
                </section>
            </WeUIArticle>
        )
    }
}

export default Article;