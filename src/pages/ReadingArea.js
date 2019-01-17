import React, { Component } from 'react';
import WeUI from 'react-weui';
import Footer from '../components/Footer';

import Img1 from '../images/about/about_item1.png'


const {
    Page,
    Article
} = WeUI;

class ReadingArea extends Component {
    constructor(props){
        super(props);
        document.title ='借阅区介绍';
    }
    render() {
        return (
            <Page infiniteLoader={false} ptr = {false}  transition={true}>
                <Article>
                    <h1>借阅区介绍</h1>
                    <section>
                        <h2>By：上海少年儿童图书馆</h2>
                        <section>
                            <section className='article-cover-container no-bgcolor'>
                                <img src={Img1} alt='上海少年儿童图书馆'/>
                            </section>
                            <section className='article-content'>
                                <p>-暂无内容-</p>
                            </section>
                          </section>
                    </section>
                </Article>
                <Footer/>
            </Page>
        );
    }
}

export default ReadingArea;