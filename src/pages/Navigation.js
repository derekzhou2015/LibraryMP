import React, { Component } from 'react';
import WeUI from 'react-weui';
import Footer from '../components/Footer';

import Img1 from '../images/navigation/nav_item1.png'
import Img2 from '../images/navigation/nav_item2.png'
import Img3 from '../images/navigation/nav_item3.png'


const {
    Page,
    Article
} = WeUI;

class Navigation extends Component {
    constructor(props){
        super(props);
        document.title ='本馆导航';
    }
    render() {
        return (
            <Page infiniteLoader={false} ptr = {false}  transition={true}>
                <Article>
                    <h1>本馆导航</h1>
                    <section>
                        <h2>By：上海少年儿童图书馆</h2>
                        <br/>
                        <section>
                            <section className='article-cover-container no-bgcolor'>
                                <img src={Img3} alt='上海少年儿童图书馆'/>
                                <h2>（三楼小学部）</h2>
                            </section>
                            <section className='article-cover-container no-bgcolor'>
                                <img src={Img2} alt='上海少年儿童图书馆'/>
                                <h2>（二楼小学部）</h2>
                            </section>
                            <section className='article-cover-container no-bgcolor'>
                                <img src={Img1} alt='上海少年儿童图书馆'/>
                                <h2>（一楼办公部，办证处）</h2>
                            </section>
                          </section>
                    </section>
                </Article>
                <Footer/>
            </Page>
        );
    }
}

export default Navigation;