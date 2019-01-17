import React, { Component } from 'react';
import WeUI from 'react-weui';
import Footer from '../components/Footer';

import Img1 from '../images/opening/open_item1.png'
import Img2 from '../images/opening/open_item2.png'


const {
    Page,
    Article
} = WeUI;

class OpeningHours extends Component {
    constructor(props){
        super(props);
        document.title ='开馆时间';
    }
    render() {
        return (
            <Page infiniteLoader={false} ptr = {false}  transition={true}>
                <Article>
                    <h1>开馆时间</h1>
                    <section>
                        <h2>By：上海少年儿童图书馆</h2>
                        <section>
                            <br/>
                            <section className='article-cover-container no-bgcolor'>
                                <img src={Img1} alt='上海少年儿童图书馆' style={{width:'90%'}}/>
                            </section>
                            <section className='article-cover-container no-bgcolor'>
                                <img src={Img2} alt='上海少年儿童图书馆'  style={{width:'30%'}}/>
                            </section>
                            <section className='article-content'>
                                <p>每周一至周五：13:00-16:30</p>
                                <p>每周一至周五（寒暑假）：9:00 - 16:30</p>
                                <p>双休日、国定假期：与借阅开放时间同步<br/><span className='orange'>（全天开放期间，11:45——12:30暂停服务）</span></p>
                            </section>
                        </section>
                    </section>
                    <br/>
                    <br/>
                </Article>
                <Footer/>
            </Page>
        );
    }
}

export default OpeningHours;