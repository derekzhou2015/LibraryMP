import React, { Component } from 'react';
import WeUI from 'react-weui';
import Footer from '../components/Footer';

import Img8 from '../images/notice/notice_know8.png'


const {
    Page,
    Article
} = WeUI;

class Notice extends Component {
    constructor(props){
        super(props);
        document.title ='读者须知';
    }
    render() {
        return (
            <Page infiniteLoader={false} ptr = {false}  transition={true}>
                <Article>
                    <h1>读者须知</h1>
                    <section>
                        <h2>By：上海少年儿童图书馆</h2>
                        <section className='about-notice article-content'>
                            <section  className='item item-1'>
                                <p>上海市中心图书馆少儿“一卡通”读者证又称“一卡通”少儿证。“一卡通”少儿证在全市公共图书馆的少儿图书馆或少儿阅览室通借通还（范围以上海图书馆网站发由的信息为准）。</p>
                            </section>
                            <section  className='item item-2'>
                                <p>每位0-16周岁的读者可以办理一张“一卡通”少儿证，需收取押金<span className='orange'>100元</span>，办证时需提供少儿的有效身份证明原件（身份证或户口簿或外籍护照）。</p>
                            </section>
                            <section  className='item item-3'>
                                <p>小学、初中生的电子学生证可以直接借阅图书，其借阅功能等同于“一卡通”少儿证。</p>
                            </section>
                            <section  className='item item-4'>
                                <p>办证实行“哪里办证、哪里退证、哪里补证”的管理方式。“一卡通”少儿证遗失后需携带办证时所提供的少儿有效身份证明原件，至初始申办馆办理挂失、补证、补证需交纳工本费<span className='orange'>10元</span>。</p>
                            </section>
                            <section  className='item item-5'>
                                <p>“一卡通”少儿证最多可外借图书<span className='orange'>10册</span>，其中包括<span className='orange'>3册</span>英语原版书籍（仅限在上海少年儿童图书馆华借还）。</p>
                            </section>
                            <section  className='item item-6'>
                                <p>每册图书馆借期为<span className='orange'>28天</span>，可以通过“自助借还机”或“少儿信息港网站”（www.sst.cn)续借，续借限<span className='orange'>1次</span>，期限为<span className='orange'>28天</span>，
                                逾期不得续借，逾期费为<span className='orange'>0.20/元/本/天</span>。</p>
                            </section>
                            <section  className='item item-7'>
                                <p>图书遗失需到图书所属图书馆按图书原价赔偿</p>
                            </section>
                            <section className='article-content contact'>
                                <p><img src={Img8} alt='上海少年儿童图书馆' style={{width:'28%'}}/></p>
                                <p>总机： 021-62177029</p>
                                <p>低幼部： 021-62189606</p>
                                <p>小学部： 021-62189987</p>
                                <p>中学部： 021-62189699</p>
                                <p>投诉电话： 62172556（周一至周五）</p>
                            </section>
                        </section>
                    </section>
                    
                </Article>
                <Footer/>
            </Page>
        );
    }
}

export default Notice;