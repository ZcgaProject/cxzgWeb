<template>
    <div class="intergrityBox">
        <div class="headBoxSheet">
            <van-search
                    v-model="value"
                    shape="round"
                    show-action
                    placeholder="请输入搜索关键词"
                    @search="onSearch"
                    style="width: 100%;height: 100%;"
            >
                <div slot="action" @click="onSearch">
                    <img style="width: 70%;height: 70%;" src="../../assets/homePage/shuaxin.png" alt="">
                </div>
            </van-search>
        </div>
        <div class="intergrityBox_sou">
            <div class="souBox">
                <div class="souBoxOne">
                    <img style="width: 72%;height: 54%" src="../../assets/integrityChina/1.png" alt="">
                </div>
            </div>
            <div class="souBig">
                <div class="souBig_one">
                    <img style="width: 80%;height: 80%" src="../../assets/integrityChina/2.png" alt="">
                </div>
                <div class="souBig_two">
                    <img style="width: 80%;height: 80%" src="../../assets/integrityChina/3.png" alt="">
                </div>
            </div>
        </div>
        <div class="intergrityBox_head">
            <span>推荐</span>
            <span>新闻</span>
            <span>视频</span>
            <span> 信用舆情</span>
            <span>社会</span>
            <span>国际</span>
            <span>综合</span>
            <span class="headSpan">
                 <img style="width: 90%;height: 80%" src="../../assets/integrityChina/4.png" alt="">
            </span>
        </div>
        <div class="intergrityBox_tab">
            <img style="width: 100%;height: 100%" src="../../assets/integrityChina/5.png" alt="">
        </div>
        <div class="intergrityBox_xin">
            <div class="xinBox" @click="xinBox">
                <div class="xinBox_img">
                    <img style="width: 90%;height: 100%" :src="require(`../../assets/integrityChina/${head.imgid}.jpg`)" alt="">
                </div>
                <div class="xinBox_font">
                    <span style="font-size: 0.18rem;color: #666666">{{head.textone}}&#12288;{{head.texttime}}</span>
                    <span style="font-weight: bold">{{head.textthr}}</span>
                    <span style="font-weight: bold">{{head.texttwo}}</span>
                </div>
            </div>
        </div>
        <div class="swiperSheet">
            <div class="swiperSheetBox">
                <van-swipe class="my-swipe" :autoplay="5000"  indicator-color="white">
                    <van-swipe-item @click="swiperOne">
                        <div class="swiperBigBox">
                            <img style="width: 100%;height: 100%" src="../../assets/integrityChina/7.jpg" alt="">
                            <div class="swiperfontBox">李克强：使信用好、有前景的企业“钱途”广阔</div>
                        </div>
                    </van-swipe-item>
                    <van-swipe-item @click="swiperTwo">
                        <div class="swiperBigBox">
                            <img style="width: 100%;height: 100%" src="../../assets/integrityChina/22.png" alt="">
                            <div class="swiperfontBox">为健康寻源 国普惠民政策研究课题组召开研讨会</div>
                        </div>
                    </van-swipe-item>
                    <van-swipe-item @click="swiperThr">
                        <div class="swiperBigBox">
                            <img style="width: 100%;height: 100%" src="../../assets/integrityChina/23.png" alt="">
                            <div class="swiperfontBox">国普惠民政策研究课题组发起研讨会在京召开</div>
                        </div>
                    </van-swipe-item>
                </van-swipe>
            </div>
        </div>
        <div class="intergrityBox_xinLine">
            <div class="xinLineBox" @click="juxing">
                <div class="xinLineBox_img">
                    <img style="width: 50%;height: 50%" src="../../assets/integrityChina/8.jpg" alt="">
                </div>
                <div class="xinLineBox_font">《为健康寻源》栏目新闻发布会在京举行</div>
            </div>
        </div>
        <div class="intergrityBox_tui">
            <div class="tuiBigBox">
                <div class="tuiBox">
                    <div class="tuiBox_nav" :style="{borderBottomWidth:item.borderWidth,borderBottomStyle:item.borderStyle,borderBottomColor:item.borderColor}" v-for="(item, index) in tuiZorro" :key='index' @click="tuiZorroDj(item.location)">
                        <div class="tuiBox_navleft">
                            <img style="width: 100%;height: 100%" :src="require(`../../assets/integrityChina/${item.imgid}`)" alt="">
                        </div>
                        <div class="tuiBox_navright">{{item.fonttext}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="intergrityBox_img">
            <div class="rityBox_img">
                <img style="width: 100%;height: 100%" src="../../assets/integrityChina/12.jpg" alt="">
            </div>
        </div>
        <div class="intergrityBox_focus">
            <div class="rityBoxFocusBox">
                <div class="focusBox_top">
                    <span style="color: #ff0033">要闻</span>
                    <span style="color: #999999">&#12288;Focus</span>
                </div>
                <div class="focusBox_nav">
                    <div class="focusBoxnavBox" :style="{borderBottomWidth:item.borderWidth,borderBottomStyle:item.borderStyle,borderBottomColor:item.borderColor}" v-for="(item, index) in yaoWen" :key='index' @click="yaoWenDj(item.location)">
                        <div class="navBox_leftImg">
                            <img style="width: 100%;height: 100%" :src="require(`../../assets/integrityChina/${item.imgid}`)" alt="">
                        </div>
                        <div class="navBox_leftFont">{{item.fonttext}}</div>
                    </div>
                </div>
                <div class="focusBox_footer">
                    <div class="focusBox_footerBox">
                        <span v-if="iisfontYw" @click="jiazaiMoreYw">加载查看更多</span>
                        <span v-if="iisfonttwoYw">
                                <van-loading size="24px">加载中...</van-loading>
                            </span>
                        <span v-if="iisfontthrYw">没有更多</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="intergrityBox_video">
            <div class="focusBox_top">
                <span style="color: #ff0033">视频</span>
                <span style="color: #999999">&#12288;Video</span>
            </div>
            <div class="rityBox_videoBox">
                <video-player class="video-player vjs-custom-skin"
                              ref="videoPlayer"
                              :playsinline="playsinline"
                              style="object-fit:fill"
                              :options="playerOptions"
                              :x5-video-player-fullscreen="true"
                              @pause="onPlayerPause($event)"
                              @play="onPlayerPlay($event)"
                              @fullscreenchange="onFullscreenChange($event)"
                              @click="fullScreen"
                >
                </video-player>
            </div>
        </div>
        <div class="compreBigBox">
            <div class="intergrityBox_compre">
                <div class="rityBoxcompreBox">
                    <div class="compre_top">
                        <span style="color: #ff0033">综合</span>
                        <span style="color: #999999">&#12288;Comprehensive</span>
                    </div>
                    <div class="compre_nav">
                        <div class="comprenavBox" :style="{borderBottomWidth:item.borderWidth,borderBottomStyle:item.borderStyle,borderBottomColor:item.borderColor}" v-for="(item, index) in zongHe" :key='index' @click="zongHeDj(item.location)">
                            <div class="compre_leftImg">
                                <img style="width: 100%;height: 86%" :src="require(`../../assets/integrityChina/${item.imgid}`)" alt="">
                            </div>
                            <div class="compre_leftFont">{{item.fonttext}}</div>
                        </div>
                    </div>
                    <div class="compre_footer">
                        <div class="compre_footerBox">
                            <span v-if="iisfontZh"  @click="jiazaiMoreZh">加载查看更多</span>
                            <span v-if="iisfonttwoZh">
                                <van-loading size="24px">加载中...</van-loading>
                            </span>
                            <span v-if="iisfontthrZh">没有更多</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="intergrityBox_more">
            <div class="rityBox_moreBox">
                <div class="moreBigBox" :style="{borderBottomWidth:item.borderWidth,borderBottomStyle:item.borderStyle,borderBottomColor:item.borderColor}" v-for="(item, index) in ziXun" :key='index' @click="ziXunDj(item.location)">
                    <div class="moreBox">
                        <div class="moreBoxTop">
                            <span>{{item.textTime}}</span>
                            <span>{{item.texthour}}</span>
                            <span>{{item.textlook}}</span>
                        </div>
                        <div class="moreBoxBot">{{item.textnav}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div style="display: flex;align-items: flex-start;justify-content: center;background-color: #ffffff" class="focusBox_footertwo">
            <div style="height: 0.8rem" class="focusBox_footerBox"  >
                <span v-if="iisfont" @click="jiazaiMore">加载查看更多</span>
                <span v-if="iisfonttwo">
                    <van-loading size="24px">加载中...</van-loading>
                </span>
                <span v-if="iisfontthr">没有更多</span>
            </div>
        </div>
        <div class="nameCardFooterbottom"> 版权所有:<div class="footerbottom_img">
            <img style="width: 70%;height: 70%;" src="../../assets/logozc.png" alt="">
        </div>
            <span>中创国安   投诉热线：400-838-5198 　</span>
        </div>
        <div style="height: 0.6rem" class="nameCardFooterbottom">
            <span @click="beianhao">ICP备案号：琼ICP备19004493号-1</span>
        </div>
    </div>
</template>

<script>
    import configuration from '@/components/common/js/configuration'
    export default {
        name: "IntegrityPage",
        data() {
            return {
                iisfont:true,
                iisfonttwo:false,
                iisfontthr:false,
                iisfontZh:true,
                iisfonttwoZh:false,
                iisfontthrZh:false,
                iisfontYw:true,
                iisfonttwoYw:false,
                iisfontthrYw:false,
                playerOptions : {
                    playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "video/mp4",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
                        src: "http://t.cctvxy.eplans.cn/src/assets/video/6bd4e81a0106340a40f72ec4a53b9771.mp4" //url地址
                    }],
                    poster: "../../assets/integrityChina/video.jpg", //你的封面地址
                    // width: document.documentElement.clientWidth, //播放器宽度
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        fullscreenToggle: true  //全屏按钮
                    }
                },
                value:'',
                head:{
                    imgid:6,
                    textone:'新华网1月21日电',
                    texttwo:'国普惠民政策研究课题组召开研讨会',
                    textthr:'《为健康寻源 》',
                    texttime:'2018/2/5  13:36:26'

                },
                tuiZorro:[
                    {
                        imgid:'9.jpg',
                        fonttext:'“企业信用研讨会”在京召开',
                        borderWidth:'1px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        location:'http://mini.eastday.com/mobile/180311220553904.html'
                    },
                    {
                        imgid:'10.jpg',
                        fonttext:'广州现新型“套路贷”，受害者欲哭无泪',
                        borderWidth:'1px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        location:''
                    },
                    {
                        imgid:'11.png',
                        fonttext:'GIFF峰会|世界品牌暨创新项目投融资高峰论坛',
                        borderWidth:'',
                        borderStyle:'',
                        borderColor:'',
                        location:'http://www.xinhuanet.com/expo/zt/sjppcx/index.htm'
                    }
                    ],
                yaoWen:[
                    {
                        imgid:'13.jpg',
                        fonttext:'蒋松林被授予互联网金融“商业策略专家”称号',
                        borderWidth:'1px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        location:'http://bj.people.com.cn/n2/2017/0330/c233086-29946261.html'
                    },
                    {
                        imgid:'14.jpg',
                        fonttext:'无信不立 习近平为何重视诚信',
                        borderWidth:'1px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        location:'http://www.xinhuanet.com/politics/2018-08/12/c_1123258002.htm'
                    },
                    {
                        imgid:'15.jpg',
                        fonttext:'【抗疫一线·我们在你身边】捐赠物资献爱心 众.....',
                        borderWidth:'1px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        location:'http://www.wzbtv.cn/gysp/qzf/content_46596.shtml'
                    },
                    {
                        imgid:'16.jpg',
                        fonttext:'万州小村大爱：上百户村民自发捐助抗疫一线医.....',
                        borderWidth:'1px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        location:'https://baijiahao.baidu.com/s?id=1659870504313720997&wfr=spider&for=pc'
                    }
                ],
                zongHe:[
                    {
                        imgid:'17.jpg',
                        fonttext:'中铁妙天集团携手国普惠民工程',
                        borderWidth:'1px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        location:'http://yzwb.sjzdaily.com.cn/zs/shangye/2019/0116/5989.html'
                    },
                    {
                        imgid:'18.jpg',
                        fonttext:'习近平的全媒体理念',
                        borderWidth:'1px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        location:'http://news.cctv.com/2019/02/19/ARTIWE9A3w88jSrRErrnK4Rh190219.shtml'
                    },
                    {
                        imgid:'19.jpg',
                        fonttext:'“信用让消费更放心” 回龙圩开展“3·15”.....',
                        borderWidth:'1px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        location:'https://baijiahao.baidu.com/s?id=1628394782973234485&wfr=spider&for=pc'
                    }
                ],
                ziXun:[
                    {
                        borderWidth:'2px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        textTime:'2018/2/5',
                        texthour:'13:36:26',
                        textlook:'来源：新华网',
                        textnav:'“百年中国制造”大型电视记录片 进行全民歌手选拔',
                        location:'http://www.xinhuanet.com/video/2018-02/05/c_129805764.htm'
                    },
                    {
                        borderWidth:'2px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        textTime:'2017/03/29',
                        texthour:'10:15:18',
                        textlook:'来源：人民网',
                        textnav:'互联网金融研究会聘任蒋松林为主任研究员',
                        location:'http://www.xinhuanet.com/itown/2017-03/29/c_136166846.htm'
                    },
                    {
                        borderWidth:'2px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        textTime:'2015/12/17',
                        texthour:'3:34:00',
                        textlook:'来源：全国手工委官网',
                        textnav:'中国手工委联合主办“世界品牌暨创新项目投融资高峰论坛”',
                        location:'http://www.qgsgw.com/index.php?m=content&c=index&a=show&catid=11&id=178'
                    },
                    {
                        borderWidth:'2px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        textTime:'2015/11/11',
                        texthour:'17:33:00',
                        textlook:'来源：新华网',
                        textnav:'外交部原副部长于引会见GIFF峰会组委会一行',
                        location:'http://www.sohu.com/a/41112599_114812'
                    },
                    {
                        borderWidth:'2px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        textTime:'2015/12/5',
                        texthour:'17:42:36',
                        textlook:'来源：中国网',
                        textnav:'资深外交家于引：中国企业走出去要认清自身资源',
                        location:'http://zjnews.china.com.cn/yuanchuan/2015-12-05/35037.html'
                    },
                    {
                        borderWidth:'2px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        textTime:'2015/10/12',
                        texthour:'11:35',
                        textlook:'来源：新华网',
                        textnav:'GIFF峰会组委会正式落户杭州',
                        location:'http://gx.people.com.cn/n/2015/1012/c348117-26754513.html'
                    },
                    {
                        borderWidth:'2px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        textTime:'2015/12/10',
                        texthour:'13:05:23',
                        textlook:'来源：新华网',
                        textnav:'商业模式创新与战略转型发展—大趋势引领未来',
                        location:'http://xiaofei.hangzhou.com.cn/xfzx/content/2015-12/10/content_5913070.htm'
                    },
                    {
                        borderWidth:'2px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        textTime:'2015/8/25',
                        texthour:'17:24:00',
                        textlook:'来源：新华网',
                        textnav:'蒋松林先生参与柴俊【爱拯】全球新闻发布会',
                        location:'http://www.sohu.com/a/29208180_221828'
                    }
                ]
            }
        },
        created() {},
        mounted(){

        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            },
            playsinline() {
                let ua = navigator.userAgent.toLocaleLowerCase()
                // x5内核
                if (ua.match(/tencenttraveler/) != null || ua.match(/qqbrowse/) != null) {
                    return false
                } else {
                    // ios端
                    return true
                }
            },
        },
        methods:{
            fullScreen() {
                const player = this.$refs.videoPlayer.player
                player.requestFullscreen()//调用全屏api方法
                player.isFullscreen(true)
                player.play()
            },
            onPlayerPlay(player) {
                player.play()
            },
            onPlayerPause(player) {
                // alert("pause");
            },
            onSearch(){
                console.log('搜索')
            },
            xinBox(){
                location.href = 'https://www.toutiao.com/i6647755323673149956/?wxshare_count=3&from=singlemessage&pbid=6648628696989304327'
            },
            juxing(){
                location.href = 'http://www.xinhuanet.com/video/2018-08/08/c_129928895.htm'
            },
            tuiZorroDj(index){
                location.href = index
            },
            yaoWenDj(index){
                location.href = index
            },
            zongHeDj(index){
                location.href = index
            },
            ziXunDj(index){
                location.href = index
            },
            swiperOne(){
                location.href = 'http://www.chinanews.com/gn/2014/11-19/6794418.shtml'
            },
            swiperTwo(){
                location.href = 'http://www.xinhuanet.com/video/2019-01/22/c_1210044409.htm'
            },
            swiperThr(){
                location.href = 'https://www.toutiao.com/i6647755323673149956/?wxshare_count=3&from=singlemessage&pbid=6648628696989304327'
            },
            jiazaiMore(){
                this.iisfont = false
                this.iisfonttwo = true
                setTimeout(() =>{
                    this.iisfonttwo = false
                    this.iisfontthr = true
                    configuration.jiazai().then(res => {
                        this.ziXun = this.ziXun.concat(res.data.ziXunTwo)
                        // this.iisfonttwo=false
                    }) .catch(error => {
                    console.log(error)
                    })
                 },1000)
            },
            jiazaiMoreZh(){
                this.iisfontZh = false
                this.iisfonttwoZh = true
                setTimeout(() =>{
                    this.iisfonttwoZh = false
                    this.iisfontthrZh = true,
                    configuration.jiazai().then(res => {
                        this.zongHe = this.zongHe.concat(res.data.zongHeTwo)
                        // this.iisfonttwo=false
                    }) .catch(error => {
                        console.log(error)
                    })
                        configuration.jiazai().then(res => {
                            this.zongHe = this.zongHe.concat(res.data.zongHeTwo)
                            // this.iisfonttwo=false
                        }) .catch(error => {
                            console.log(error)
                        })
                },1000)
            },
            jiazaiMoreYw(){
                this.iisfontYw = false
                this.iisfonttwoYw = true
                setTimeout(() =>{
                    this.iisfonttwoYw = false
                    this.iisfontthrYw = true,
                        configuration.jiazai().then(res => {
                            this.yaoWen = this.yaoWen.concat(res.data.yaoWenTwo)
                            // this.iisfonttwo=false
                        }) .catch(error => {
                            console.log(error)
                        })
                },1000)
            },
            beianhao(){
                location.href = 'http://www.beian.miit.gov.cn/'
            }
        }
    }
</script>
<style src="../../style/integrityChina/integrityPage.css" scoped></style>

<style scoped>
    .van-field__left-icon{
        width: 20px !important;
        height: 100% !important;
    }
    .van-search__action{
        width: 10% !important;
        height: 100% !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
    }
    .my-swipe .van-swipe-item {
        /*width: 100% !important;*/
        height: 100% !important;
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
    }
    .van-swipe{
        height: 100% !important;
    }
    .van-search--show-action{
        width: 100% !important;
        height: 100% !important;
    }
    .van-search{
        background-color: #e6e6e6 !important;
    }
    .van-dropdown-menu{
        height: 10px !important;
    }
    .van-search__action{
        font-size: 12px !important;
    }
    .video-js .vjs-icon-placeholder {
        width: 100%;
        height: 100%;
        display: block;
    }
</style>
