var dateNow = new Date();
var NewsDb = [{
    Id: 1,
    Title: '关于增加外文原版图书外借数量的公告',
    Cover:'../../images/temp/news.jpg',
    Summary: '为进一步推进全民阅读工作，更好满足少年儿童对外文原版图书馆的借阅需求，即日起,持上海市中心图书馆少儿“一卡通”读者证或电子学生证的读者，可外借的外文原版书籍数量由原来的3册增加至5册，其他规定维持不变。',
    RichText:'为进一步推进全民阅读工作，更好满足少年儿童对外文原版图书馆的借阅需求，即日起,持上海市中心图书馆少儿“一卡通”读者证或电子学生证的读者，可外借的外文原版书籍数量由原来的3册增加至5册，其他规定维持不变。',
    ReadCount: Math.round(Math.random() * 10000),
    IsNew: Math.random() > 0.5,
    ByDate: dateNow.toLocaleDateString()
}, {
    Id: 2,
    Title: '中学部开设“创客”图书专架',
    Cover:'',
    Summary: '国务院在《新一代人工智能发展规划》中明确指出：人工智能已经成为国际竞争的新焦点，应该在中小学阶段开设人工智能的课程；教育部在《关于“十三五”期间全面推进教育信息化工作的指导意见》中鼓励探索创客教育等新的教育模式。',
    RichText:'国务院在《新一代人工智能发展规划》中明确指出：人工智能已经成为国际竞争的新焦点，应该在中小学阶段开设人工智能的课程；教育部在《关于“十三五”期间全面推进教育信息化工作的指导意见》中鼓励探索创客教育等新的教育模式。',
    ReadCount: Math.round(Math.random() * 10000),
    IsNew: Math.random() > 0.5,
    ByDate: dateNow.toLocaleDateString()
}, {
    Id: 3,
    Title: '无人机探索夏日火 暑期实践欢乐多',
    Cover:'../../images/temp/news.jpg',
    Summary: ' 为了贯彻落实《中华人民共和国公共图书馆法》，为远郊少年儿童提供优质公共文化服务，7月8日，上海少年儿童图书馆联手共建单位亭西村，组织开展青少年暑期社会体验活动。',
    RichText:' 为了贯彻落实《中华人民共和国公共图书馆法》，为远郊少年儿童提供优质公共文化服务，7月8日，上海少年儿童图书馆联手共建单位亭西村，组织开展青少年暑期社会体验活动。',
    ReadCount: Math.round(Math.random() * 10000),
    IsNew: Math.random() > 0.5,
    ByDate: dateNow.toLocaleDateString()
}, {
    Id: 4,
    Title: '上海少年儿童图书馆“创客教室”系列活动又添新课程了！',
    Cover:'',
    Summary: '2018年7月29日下午,首堂无人机探索活动在少儿馆大礼堂举行。在中学部老师的指导下，小读者们零距离接触了无人机机体，并亲自组装了无人机的螺旋桨翼，还在老师的帮助下现场体验了无人机自动起飞与降落、跟拍模式和高度浏览拍照等功能。',
    RichText:'2018年7月29日下午,首堂无人机探索活动在少儿馆大礼堂举行。在中学部老师的指导下，小读者们零距离接触了无人机机体，并亲自组装了无人机的螺旋桨翼，还在老师的帮助下现场体验了无人机自动起飞与降落、跟拍模式和高度浏览拍照等功能。',
    ReadCount: Math.round(Math.random() * 10000),
    IsNew: Math.random() > 0.5,
    ByDate: dateNow.toLocaleDateString()
}];

var BookDb = [{
    Id: 1,
    Cover: '../../images/temp/xyj.png',
    Title: '西游记',
    Author: '吴承恩',
    Publisher: '黑龙江人民出版社',
    PublishDate: '1996',
    CallNo: 'I242.4/4921-9#2'
}, {
    Id: 1,
    Cover: '../../images/temp/xyj.png',
    Title: '西游记',
    Author: '吴承恩',
    Publisher: '黑龙江人民出版社',
    PublishDate: '1996',
    CallNo: 'I242.4/4921-9#2'
}, {
    Id: 1,
    Cover: '../../images/temp/xyj.png',
    Title: '西游记',
    Author: '吴承恩',
    Publisher: '黑龙江人民出版社',
    PublishDate: '1996',
    CallNo: 'I242.4/4921-9#2'
}, {
    Id: 1,
    Cover: '../../images/temp/xyj.png',
    Title: '西游记',
    Author: '吴承恩',
    Publisher: '黑龙江人民出版社',
    PublishDate: '1996',
    CallNo: 'I242.4/4921-9#2'
}, {
    Id: 1,
    Cover: '../../images/temp/xyj.png',
    Title: '西游记',
    Author: '吴承恩',
    Publisher: '黑龙江人民出版社',
    PublishDate: '1996',
    CallNo: 'I242.4/4921-9#2'
}, {
    Id: 1,
    Cover: '../../images/temp/xyj.png',
    Title: '西游记',
    Author: '吴承恩',
    Publisher: '黑龙江人民出版社',
    PublishDate: '1996',
    CallNo: 'I242.4/4921-9#2'
}, {
    Id: 1,
    Cover: '../../images/temp/xyj.png',
    Title: '西游记',
    Author: '吴承恩',
    Publisher: '黑龙江人民出版社',
    PublishDate: '1996',
    CallNo: 'I242.4/4921-9#2'
}, {
    Id: 1,
    Cover: '../../images/temp/xyj.png',
    Title: '西游记',
    Author: '吴承恩',
    Publisher: '黑龙江人民出版社',
    PublishDate: '1996',
    CallNo: 'I242.4/4921-9#2'
}, {
    Id: 1,
    Cover: '../../images/temp/xyj.png',
    Title: '西游记',
    Author: '吴承恩',
    Publisher: '黑龙江人民出版社',
    PublishDate: '1996',
    CallNo: 'I242.4/4921-9#2'
}, {
    Id: 1,
    Cover: '../../images/temp/xyj.png',
    Title: '西游记',
    Author: '吴承恩',
    Publisher: '黑龙江人民出版社',
    PublishDate: '1996',
    CallNo: 'I242.4/4921-9#2'
}, {
    Id: 1,
    Cover: '../../images/temp/xyj.png',
    Title: '西游记',
    Author: '吴承恩',
    Publisher: '黑龙江人民出版社',
    PublishDate: '1996',
    CallNo: 'I242.4/4921-9#2'
}]

var ResDb = [{
    Id: 1,
    Title: '贝贝国学',
    Cover: '../images/temp/bbgx.png',
    Category: '国学',
    ReadCount: Math.round(Math.random() * 10000),
    ByDate: '2019-01-15',
    State: '已订购',
    Description: '-暂无内容-',
    Links: [{
        Name: '外网访问',
        Url: 'http://www.bbguoxue.cn/wechat/',
        Tips: ''
    }, {
        Name: '内网访问',
        Url: 'http://www.bbguoxue.cn/wechat/',
        Tips: ''
    }]
}, {
    Id: 2,
    Title: '妙趣手工坊',
    Cover: '../images/temp/mqsgf.png',
    Category: '视频',
    ReadCount: Math.round(Math.random() * 10000),
    ByDate: '2019-01-15',
    State: '已订购',
    Description: '-暂无内容-',
    Links: [{
        Name: '外网访问',
        Url: 'http://www.libdiy.cn/wechat',
        Tips: ''
    }, {
        Name: '内网访问',
        Url: 'http://www.libdiy.cn/wechat',
        Tips: ''
    }]
}, {
    Id: 3,
    Title: '创世神话',
    Cover: '../images/temp/cssh.png',
    Category: '视频',
    ReadCount: Math.round(Math.random() * 10000),
    ByDate: '2019-01-15',
    State: '已订购',
    Description: '-暂无内容-',
    Links: [{
        Name: '外网访问',
        Url: 'http://cssh.yibaolib.com/phone/index.html',
        Tips: ''
    }, {
        Name: '内网访问',
        Url: 'http://cssh.yibaolib.com/phone/index.html',
        Tips: ''
    }]
}, {
    Id: 4,
    Title: '贝贝国学',
    Cover: '../images/temp/bbgx.png',
    Category: '国学',
    ReadCount: Math.round(Math.random() * 10000),
    ByDate: '2019-01-15',
    State: '已订购',
    Description: '-暂无内容-',
    Links: [{
        Name: '外网访问',
        Url: 'http://www.bbguoxue.cn/wechat/',
        Tips: ''
    }, {
        Name: '内网访问',
        Url: 'http://www.bbguoxue.cn/wechat/',
        Tips: ''
    }]
}, {
    Id: 5,
    Title: '妙趣手工坊',
    Cover: '../images/temp/mqsgf.png',
    Category: '视频',
    ReadCount: Math.round(Math.random() * 10000),
    ByDate: '2019-01-15',
    State: '已订购',
    Description: '-暂无内容-',
    Links: [{
        Name: '外网访问',
        Url: 'http://www.libdiy.cn/wechat',
        Tips: ''
    }, {
        Name: '内网访问',
        Url: 'http://www.libdiy.cn/wechat',
        Tips: ''
    }]
}, {
    Id: 6,
    Title: '创世神话',
    Cover: '../images/temp/cssh.png',
    Category: '视频',
    ReadCount: Math.round(Math.random() * 10000),
    ByDate: '2019-01-15',
    State: '已订购',
    Description: '-暂无内容-',
    Links: [{
        Name: '外网访问',
        Url: 'http://cssh.yibaolib.com/phone/index.html',
        Tips: ''
    }, {
        Name: '内网访问',
        Url: 'http://cssh.yibaolib.com/phone/index.html',
        Tips: ''
    }]
}]

var BorrowDb = [
    {
        Id:1,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        ISBN:'9787121317385',
        IsReturn:false,
        ByDate:dateNow.toLocaleDateString(),
        ReturnDate:null
    },{
        Id:2,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        ISBN:'9787121317385',
        IsReturn:false,
        ByDate:dateNow.toLocaleDateString(),
        ReturnDate:null
    },{
        Id:3,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        ISBN:'9787121317385',
        IsReturn:false,
        ByDate:dateNow.toLocaleDateString(),
        ReturnDate:null
    },{
        Id:4,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        ISBN:'9787121317385',
        IsReturn:true,
        ByDate:dateNow.toLocaleDateString(),
        ReturnDate:dateNow.toLocaleDateString()
    },{
        Id:5,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        ISBN:'9787121317385',
        IsReturn:true,
        ByDate:dateNow.toLocaleDateString(),
        ReturnDate:dateNow.toLocaleDateString()
    },{
        Id:6,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        ISBN:'9787121317385',
        IsReturn:true,
        ByDate:dateNow.toLocaleDateString(),
        ReturnDate:dateNow.toLocaleDateString()
    },{
        Id:7,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        ISBN:'9787121317385',
        IsReturn:true,
        ByDate:dateNow.toLocaleDateString(),
        ReturnDate:dateNow.toLocaleDateString()
    },{
        Id:8,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        ISBN:'9787121317385',
        IsReturn:true,
        ByDate:dateNow.toLocaleDateString(),
        ReturnDate:dateNow.toLocaleDateString()
    },{
        Id:9,
        Cover: '../../images/temp/xyj.png',
        Title: '西游记',
        Author: '吴承恩',
        Publisher:'黑龙江人民出版社',
        PublishDate:'1996',
        ISBN:'9787121317385',
        IsReturn:true,
        ByDate:dateNow.toLocaleDateString(),
        ReturnDate:dateNow.toLocaleDateString()
    }
]
var FAQDb = [{
    Id: 1,
    Title: '办理“一卡通”少儿证需要提供什么证件？',
    Summary: '办证时需提供少儿的有效身份证明原件（身份证或户口簿或外籍护照）',
    RichText: '办证时需提供少儿的有效身份证明原件（身份证或户口簿或外籍护照）',
    ReadCount: Math.round(Math.random() * 10000),
    YesCount: Math.round(Math.random() * 1000),
    NoCount: Math.round(Math.random() * 100),
    ByDate: dateNow.toLocaleDateString()
},{
    Id: 2,
    Title: '“一卡通”少儿证在哪里办理？',
    Summary: '“一卡通”少儿证在图书馆办证窗口可以办理，需收取押金100元。',
    RichText: '一卡通”少儿证在图书馆办证窗口可以办理，需收取押金100元。办证时需提供少儿的有效身份证明原件（身份证或户口簿或外籍护照）',
    ReadCount: Math.round(Math.random() * 10000),
    YesCount: Math.round(Math.random() * 1000),
    NoCount: Math.round(Math.random() * 100),
    ByDate: dateNow.toLocaleDateString()
},{
    Id: 3,
    Title: '“一卡通”遗失如何补办？',
    Summary: '“一卡通”少儿证遗失后需携带办证时所提供的少儿有效身份证明原件，至初始申办馆办理挂失、补证、补证需交纳工本费10元。',
    RichText: '“一卡通”少儿证遗失后需携带办证时所提供的少儿有效身份证明原件，至初始申办馆办理挂失、补证、补证需交纳工本费10元。',
    ReadCount: Math.round(Math.random() * 10000),
    YesCount: Math.round(Math.random() * 1000),
    NoCount: Math.round(Math.random() * 100),
    ByDate: dateNow.toLocaleDateString()
},{
    Id: 4,
    Title: '每册图书借阅期是多少天，如何续借？',
    Summary: '每册图书馆借期为可以通过“自助借还机”或“少儿信息港网站”（www.sst.cn)续借，续借限1次，期限为28天。',
    RichText: '每册图书馆借期为可以通过“自助借还机”或“少儿信息港网站”（www.sst.cn)续借，续借限1次，期限为28天。逾期不得续借，逾期费为0.20/元/本/天。',
    ReadCount: Math.round(Math.random() * 10000),
    YesCount: Math.round(Math.random() * 1000),
    NoCount: Math.round(Math.random() * 100),
    ByDate: dateNow.toLocaleDateString()
}]

var ConsultCategoryDb =[{
    label:'一卡通',
    value:'一卡通'
},{
    label:'图书馆',
    value:'图书馆'
},{
    label:'借还书',
    value:'借还书'
},{
    label:'续借',
    value:'续借'
},{
    label:'投诉',
    value:'投诉'
},{
    label:'其他',
    value:'其他'
}]

var ConsultDb = [{
    Id: 1,
    Title: '关于增加图书馆的少儿活动次数的建议。',
    Category:'其他',
    List: [{
        Id: 1,
        Ask:'少儿馆近两年的少儿活动组织的非常，希望可以再多组织几场。',
        Reply:'感谢您的建议，我们一定会加大活动组织力度更好的服务读者。',
        IsRead:false,
        From:'少儿馆老师',
        ByDate:dateNow.toLocaleDateString()
    }],
    NewReply:3,
    ByDate: dateNow.toLocaleDateString()
},{
    Id: 2,
    Title: '请问图书馆可以提供免费停车位吗？',
    Category:'其他',
    List: [{
        Id: 1,
        Ask:'请问图书馆可以提供免费停车位吗？',
        Reply:'您好感谢您的留言，目前还不能提供免费的停车位。您好感谢您的留言，目前还不能提供免费的停车位。您好感谢您的留言，目前还不能提供免费的停车位。您好感谢您的留言，目前还不能提供免费的停车位。',
        IsRead:true,
        From:'少儿馆老师',
        ByDate:dateNow.toLocaleDateString()
    },{
        Id: 2,
        Ask:'如果想提高读者来馆人数，希望可以考虑提供一下。谢谢！',
        Reply:null,
        IsRead:false,
        From:null,
        ByDate:dateNow.toLocaleDateString()
    }],
    NewReply:0,
    ByDate: dateNow.toLocaleDateString()
}]

export {
    NewsDb,
    BookDb,
    ResDb,
    BorrowDb,
    FAQDb,
    ConsultCategoryDb,
    ConsultDb
}