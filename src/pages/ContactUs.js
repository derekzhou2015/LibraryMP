import React, { Component } from 'react';
import WeUI from 'react-weui';
import Img1 from '../images/us/us_item1.png'
import Footer from '../components/Footer';

const {
    Page,
    Article
} = WeUI;

class ContactUs extends Component {
    constructor(props){
        super(props);
        document.title ='联系我们';
    }

    render() {
        return (
            <Page infiniteLoader={false} ptr = {false}  transition={true}>
                <Article>
                    <h1>联系我们</h1>
                    <section>
                        <h2>By：上海少年儿童图书馆</h2>
                        <section>
                            <section className='article-cover-container no-bgcolor'>
                                <img src={Img1} alt='上海少年儿童图书馆'/>
                            </section>
                            <section>
                                <h2><span className='orange'>联系电话</span></h2>
                                <p>总机： 021-62177029</p>
                                <p>低幼部： 021-62189606</p>
                                <p>小学部： 021-62189987</p>
                                <p>中学部： 021-62189699</p>
                            </section>
                            <section className='us-other'>
                                <h2><span className='orange'>其他联系方式</span></h2>
                                <p className='url'>网址：<a href='http://www.sst.org.cn'>http://www.sst.org.cn</a></p>
                                <p className='weixin'>微信：childlib</p>
                                <p className='weibo'>微博：<a href='http://weibo.com/u/2783572571'>http://weibo.com/u/2783572571</a></p>
                                <p className='mail'>邮箱：sstweixin@163.com</p>
                                <p className='addr'>地址：上海市静安区南京西路962号</p>
                                <p className='zip'>邮编：200041</p>
                            </section>
                        </section>
                    </section>
                    
                </Article>
                <Footer/>
            </Page>
        );
    }
}

export default ContactUs;