import React, { Component } from 'react';
import WeUI from 'react-weui';
import Footer from '../components/Footer';

import Img1 from '../images/about/about_item1.png'
import Img2 from '../images/about/about_item2.png'
import Img3 from '../images/about/about_item3.png'
import Img4 from '../images/about/about_item4.png'
import Img5 from '../images/about/about_item5.png'
import Img6 from '../images/about/about_item6.png'
import Img7 from '../images/about/about_item7.png'


const {
    Page,
    Article
} = WeUI;

class LibraryAbout extends Component {
    constructor(props){
        super(props);
        document.title ='本馆介绍';
    }
    render() {
        return (
            <Page infiniteLoader={false} ptr = {false}  transition={true}>
                <Article>
                    <h1>本馆介绍</h1>
                    <section>
                        <h2>By：上海少年儿童图书馆</h2>
                        <section>
                            <section className='article-cover-container no-bgcolor'>
                                <img src={Img1} alt='上海少年儿童图书馆'/>
                            </section>
                            <section className='article-cover-container no-bgcolor'>
                                <img src={Img2} alt='上海少年儿童图书馆'/>
                            </section>
                            <section className='article-content'>
                                <p>上海少年儿童图书馆是隶属于上海市文化广播影视管理局的市级公共少儿图书馆。其前身是1941年成立的上海儿童私立图书馆。</p>
                                <p>上海少年儿童图书馆是全国历史最悠久，藏书最多的省级少年儿童图书馆，是上海地区少儿图书资源的中心。
                                    2008年起少儿馆提供原版英语优秀儿童读物外借。保存本书库馆藏有自三十年代以来的“万有文库”、连环画、中国早期儿童书刊和优秀少儿读物。</p>
                            </section>
                            <section className='article-cover-container no-bgcolor'>
                                <img src={Img3} alt='上海少年儿童图书馆'/>
                            </section>
                            <section className='article-content'>
                                <p>上海少年儿童图书馆是公益性事业单位，全年无休并免费向全社会开放。2011年协同组建全市少儿“一卡通”，
                                    截止2017年已在全市190家区县、街道、乡镇少儿图书馆（室）实现通借通还。上海少年儿童图书馆共设63个馆外流动服务点，
                                    为全市少年儿童构建共同的知识和精神文化家园。</p>
                            </section>
                            <section className='article-cover-container no-bgcolor'>
                                <img src={Img4} alt='上海少年儿童图书馆'/>
                            </section>
                            <section className='article-content'>
                                <p>1998年起，上海少年儿童图书馆开设官方网站“少儿信息港”。开发收集少儿信息，并建立“娃娃天地”、“连环画库”、“万有文库”等特色少儿数据库，
                                    年网站访问量244.1万次。2013年起开设官方微博，2014年起开设官方微信，定期更新活动预告与报道，以优质的形象搭建沟通少儿、服务少儿的重要纽带，
                                    为更多的少儿搭建更宽广的交流平台。</p>
                            </section>
                            <section className='article-cover-container no-bgcolor'>
                                <img src={Img5} alt='上海少年儿童图书馆'/>
                            </section>
                            <section className='article-content'>
                                <p>为培养少儿阅读兴趣、塑造少儿高尚人格,积极铸造服务品牌。少儿馆推出上海童话节、少图讲堂、阅读直通车、
                                    娃娃欢乐时光、风铃草读书会、青少年拓展训练等服务，多渠道、多方式发挥城市中心少儿馆的服务辐射功能。</p>
                            </section>
                            <section className='article-cover-container no-bgcolor'>
                                <img src={Img6} alt='上海少年儿童图书馆'/>
                            </section>
                            <section className='article-content'>
                                <p>上海少年儿童图书馆的工作长期以来受到文化部、市文化局（文广局）的关怀与支持。</p>
                                <p>1957年，少儿馆被批准成为全国首个对外开放的少年儿童图书馆，先后与捷克、波兰、日本、新加坡、德国等多个国家的少年儿童图书馆开展互访交流活动。</p>
                                <p>2013-2016年期间曾获得全国维护妇女儿童权益先进集体、全国五星级文化处忙志愿服务团队、上海市文明单位、上海市平安示范单位等多项荣誉称号。</p>
                                <p>目前上海少年儿童图书馆任中国图书馆学会未成年人专业委员会副主任馆；华东少年儿童图书馆协作委员会主任馆。</p>
                            </section>
                            <section className='article-cover-container no-bgcolor'>
                                <img src={Img7} alt='上海少年儿童图书馆'/>
                            </section>
                        </section>
                    </section>
                </Article>
                <Footer/>
            </Page>
        );
    }
}

export default LibraryAbout;