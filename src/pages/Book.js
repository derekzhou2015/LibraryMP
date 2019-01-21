import React, { Component } from 'react';
import WeUI from 'react-weui';
import Footer from '../components/Footer';

const {
    Page,
    Article
} = WeUI

const book = {
    Id:1,
    Cover: '../../images/temp/xyj.png',
    Title: '西游记',
    Author: '吴承恩',
    Publisher:'黑龙江人民出版社',
    PublishDate:'1996',
    PublishAddr:'哈尔滨',
    ISBN:'9787121317385',
    Category:'I242.4',
    BarCode:'201901011620',
    CallNo:'I242.4/4921-9#2',
    Type:'普通外借资料',
    Library:'上海少年儿童图书馆',
    Postion:'中文书刊外借室',
    State:'借出',
    Description:'西游记/吴承恩著'
}

class Book extends Component {
    constructor(props){
        super(props);
        document.title ='图书详情';
        this.state = {
            book:book
        }
    }

    render() {
        return (
            <Page infiniteLoader={false} ptr = {true}  transition={true}>
                <Article>
                    <h1>{this.state.book.Title}</h1>
                    <section>
                        <h2>作者：{this.state.book.Author}</h2>
                        <h3>{this.state.book.CallNo}</h3>
                        {
                            this.state.book.Cover && 
                            <section className='book-cover-container'>
                                <img src={this.state.book.Cover} alt={this.state.book.Title}/>
                            </section>
                        }
                        <section>
                            <p>出版社：{this.state.book.Publisher}</p>
                            <p>出版地：{this.state.book.PublishAddr}</p>
                            <p>出版日期:{this.state.book.PublishDate}</p>
                            <p>ISBN:{this.state.book.ISBN}</p>
                            <p>分类号：{this.state.book.Category}</p>
                            <p>条码号：{this.state.book.BarCode}</p>
                            <p>索书号：{this.state.book.CallNo}</p>
                            <p>馆藏类型：{this.state.book.Type}</p>
                            <p>状态：{this.state.book.State}</p>
                            <p>馆藏地址：{this.state.book.Library}</p>
                            <p>馆藏地点：{this.state.book.Postion}</p>
                        </section>
                        <section>
                            <h3>简介：</h3>
                            <p>{this.state.book.Description}</p>
                        </section>
                    </section>
                </Article>
                <Footer/>
            </Page>
        );
    }
}

export default Book;