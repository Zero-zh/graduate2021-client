<template>
  <div class="homepage" id="topAnchor">
    <div class="main">
      <div class="zoumadeng">
        <el-carousel indicator-position="outside">
          <el-carousel-item
            v-for="item in lunbotuPics"
            :key="item"
            id="lunbotu"
          >
            <el-image :src="item.img" id="scroll_item"></el-image>
            <!-- <h3><img :src="item.img" /></h3> -->
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="quickEntry">
        <div class="up">
          <h4>快捷入口</h4>
          <el-tag class="tag" type="danger">校内热点</el-tag>
          <el-tag class="tag" type="danger">疫情防控</el-tag>
          <el-tag class="tag" type="info">综测活动</el-tag>
          <el-tag class="tag" type="info">竞赛专区</el-tag>
          <el-tag class="tag" type="warning">你问我答</el-tag>
          <el-tag class="tag" type="warning">经验之谈</el-tag>
          <el-tag class="tag" type="success">期末攻略</el-tag>
          <el-tag class="tag" type="success">国家证书</el-tag>
          <el-tag class="tag" type="success">国考备战</el-tag>
          <el-tag class="tag" type="danger">当面交易</el-tag>
          <el-tag class="tag" type="info">个人中心</el-tag>
          <el-tag class="tag" type="info">量化订阅</el-tag>
        </div>
        <div class="transaction">
          <h4 class="transaction_title">二手交易</h4>
          <div
            class="transaction_all"
            v-for="transaction in transactions"
            :key="transaction"
          >
            <!-- <div class="block" v-for="title in titles" :key="title"> -->
            <!-- <span class="demonstration">{{ title }}</span> -->
            <el-image
              style="width: 200px; height: 200px"
              :src="transaction.img"
              :title="title"
              class="transaction_pic"
            ></el-image>
            <div class="transaction_text">
              <h4>{{ transaction.title }}</h4>
              <p class="transaction_bottom">
                ￥<span>{{ transaction.price }}</span>
                <span class="transaction_author">{{ transaction.author }}</span>
              </p>
            </div>
            <!-- <span class="demonstration">{{ title }}</span> -->
            <!-- <el-image
              style="width: 200px; height: 150px"
              :src="url"
              :title="title"
            ></el-image> -->
            <!-- <div class="transaction_text">
              <h4>{{ title }}</h4>
              <p class="transaction_bottom">
                ￥<span>288</span>
                <span class="transaction_author">这是作者</span>
              </p>
            </div> -->
          </div>
        </div>
        <div class="feedback">
          <h4 class="feebackh4">意见反馈</h4>
          <p class="feedbackWenti">系统的各种问题都将被解答</p>
          <div id="feedback_botton">
            <el-button size="small" round>去反馈</el-button>
            <el-button size="small" round>历史反馈</el-button>
          </div>
        </div>
      </div>
    </div>

    <div id="middle">
      <div id="left">
        <div id="house">
          <h4 id="redian">热点房间</h4>
          <hr id="line" />
          <el-button id="warnningBotton" type="warning" round size="mini"
            >来bibi一下</el-button
          >
        </div>

        <div class="luntan" id="zixunxinwen">
          <div class="uask">
            <div class="top">
              <i class="el-icon-chat-dot-round">&nbsp;你问我答大厅</i>
              <p>
                <span>{{ uaskPeople }}</span
                >人
              </p>
            </div>
            <p class="contents" v-for="item in uasks" :key="item">
              <el-avatar> {{ item.author }} </el-avatar
              ><span>{{ item.contents }}</span>
            </p>
            <!-- <p class="contents">
              <el-avatar> 李四 </el-avatar><span>这是内容2</span>
            </p> -->
          </div>
          <div class="exprence">
            <div class="top">
              <i class="el-icon-connection">&nbsp;经验之谈</i>
              <p>
                <span>{{ experiencesPeople }}</span
                >人
              </p>
            </div>
            <p class="contents" v-for="item in experiences" :key="item">
              <el-avatar> {{ item.author }} </el-avatar
              ><span>{{ item.contents }}</span>
            </p>
          </div>
        </div>
        <div class="bottom">
          <div class="title_row">
            <p class="title_text">校园通知</p>
          </div>
          <div class="">
            <hr id="line" />

            <div class="title_behive" v-for="item in news" :key="item">
              <a class="content" id="infoBefore">{{ item.info }}</a>
              <a href=""
                ><i class="el-icon-s-promotion" id="source">{{
                  item.source
                }}</i></a
              >

              <a class="title_more">{{ item.time }} </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getEpidemicInfo,
  getEpidemicNews,
  homePageEpidemic,
} from "@/api/brocast";
export default {
  created() {
    this.getEpidemicData();
    this.getEpidemicNews();
  },
  methods: {
    getEpidemicData() {
      getEpidemicInfo().then((response) => {
        console.log(response.data);
        this.info = response.data;
      });
    },
    getEpidemicNews() {
      homePageEpidemic().then((response) => {
        console.log(response.data);
        this.news = response.data;
      });
    },
  },

  data() {
    return {
      lunbotuPics: [
        {
          img: require("@/assets/homePage/scroll/1_gaitubao_1048x300.png"),
          goto: "www.baidu.com",
        },
        {
          img: require("@/assets/homePage/scroll/222.png"),
          goto: "www.baidu.com",
        },
      ],
      //新闻数据
      news: [],

      //你问我答大厅
      uaskPeople: 128,
      experiencesPeople: 64,
      uasks: [
        {
          author: "上岸",
          contents: "有一起图书馆复习考研或者考公的吗",
        },
        {
          author: "学习",
          contents: "图书馆哪些位置可以充电",
        },
      ],
      experiences: [
        {
          author: "国考",
          contents: "国考公务员面试经验2021.4.25",
        },
        {
          author: "兄dei",
          contents: "微信还有这个功能，居然还有人没用过",
        },
      ],

      transactions: [
        {
          title: "男生工装马甲带发票",
          price: 76,
          author: "时尚且穿搭",
          img: require("@/assets/homePage/transaction/衣1.jpg"),
        },
        {
          title: "莆田李宁懂？",
          price: 159,
          author: "莆田yyds",
          img: require("@/assets/homePage/transaction/鞋1.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
#top_icon {
  margin-left: 49%;
  background: #ccc;
  height: 40px;
  width: 40px;
  border-radius: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 20px;
}
#top_icon:hover {
  cursor: pointer;
}
#space {
  margin-bottom: 40px;
}
.transaction_pic:hover {
  background: #ccc;
  transform: scale(1.05);
}
.transaction_all {
  margin-top: 5px;
  margin-bottom: 15px;
  /* background: #ccc; */
  width: 200px;
}
.transaction_all:hover {
  cursor: pointer;
  background: #f2f2f2;
}
.contents:hover {
  background: white;
  cursor: pointer;
}
.top:hover {
  cursor: pointer;
  opacity: 1;
}

.feedbackWenti {
  margin: 0;
  padding: 0;
  margin-bottom: 8px;
  color: #a4a4a4;
}
.feebackh4 {
  padding-top: 15px;
}
.transaction_text {
  margin-top: -3px;
  margin-bottom: 10px;
}
.transaction_text h4 {
  margin: 0;
  padding: 0;
}
.transaction_bottom {
  display: flex;
  align-items: center;
  margin-top: 0px;
}
.transaction_author {
  /* position: absolute;
  left: 140px; */
  /* margin-left: auto;
  margin-right: 86px; */
  margin-left: auto;
}
.transaction_text p {
  margin: 0;
}
.transaction_title {
  margin-bottom: 10px;
}
.transaction {
  margin-top: 5px;
}
.quickEntry {
  /* background: #ccc; */
  height: 1200px;
  margin-bottom: 0;
}
.quickEntry h4 {
  margin-top: 5px;
  margin-bottom: 0;
  padding-bottom: 0;
}
#right {
  position: absolute;
  display: flex;
  width: 20%;
  background: #ccc;
  height: 500px;
}

#middle {
  position: relative;
  display: flex;
  width: 80%;
}
.news {
  display: flex;
  align-items: center;
}

#news_date {
  /* margin-left: 800px; */
  margin-left: auto;
  margin-right: 20px;
}
#news_start {
  display: inline-block;
  margin-left: 20px;
  margin-bottom: 5px;
  margin-top: 40px;
}
#news {
  box-sizing: border-box;
  padding-left: 20px;
  margin-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 1020px;
  background: #f2f2f2;
}

/* .news_recommend {
  margin-left: 20px;
} */
/* #news_start {
  margin-left: 20px;
} */
#warnningBotton {
  margin: 5px;
  margin-top: 15px;
  margin-left: 320px;
  /* height: 40px;
  line-height: 40px; */
}
#house {
  width: 80%;
  display: flex;
  margin-bottom: 3px;
  margin-top: 15px;
}

.contents span {
  margin-left: 10px;
  height: 40px;
  line-height: 40px;
  margin-bottom: 0;
}
.uask,
.exprence {
  background: #f2f2f2;
  padding: 15px;
  padding-bottom: 0;
}
.uask p,
.exprence p {
  display: flex;
}
.luntan div {
  width: 500px;
}
.top {
  display: flex;
  box-sizing: border-box;
  opacity: 0.6;
}
.top p {
  margin: 0;
  padding: 0;

  align-items: flex-start;
  margin-left: auto;
  margin-right: 30px;
}
.top h4 {
  margin-right: 20px;
  margin-bottom: 0px;
}
#redian {
  margin-bottom: 5px;
  padding-bottom: 0;
  margin-left: 20px;
  color: rgb(65, 139, 115);
}
.quickEntry {
  width: 22%;
  margin-left: 10px;
  position: absolute;
  left: 1050px;
  /* height: 250px; */
}
.quickEntry .tag {
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}
.quickEntry .tag:hover {
  font-size: 16px;
}
.luntan {
  width: 100%;
  display: flex;
}

.uask {
  margin-left: 20px;
  margin-right: 20px;
}

/* .quickEntry .tag:nth-child(4n) {
  margin-right: 0px;
} */

.main {
  display: flex;
}
.zoumadeng {
  width: 80%;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
#news {
  margin-bottom: 0;
}
.news:nth-child(n) {
  margin-bottom: 10px;
  margin-top: 10px;
}
.news:nth-child(0) {
  margin-bottom: 10px;
  margin-top: 10px;
}
#news:hover {
  background: #ccc;
  cursor: pointer;
}
#left {
  margin-bottom: 10px;
}
#news_start {
  color: #0080ff;
}

.bottom {
  /* margin-top: 20px; */
  /* margin-left: 82px; */
  width: 87%;
  height: 190px;
  /* background: pink; */
}
/* .title_text {
  font-weight: bold;
  color: #0080ff;
} */
.title_more {
  color: #a4a4a4;
}
.title_more:hover {
  color: black;
  cursor: pointer;
}
.content {
  font-weight: bold;
  font-size: 14px;
}
.content:hover {
  color: #585858;
}
.up_left,
.up_middle {
  margin-right: 20px;
}

#data {
  display: flex;
  text-align: center;
  background: rgb(83, 174, 253);
  height: 65%;
  color: white;
}
#more {
  /* text-align: right; */
  box-sizing: border-box;
  display: flex;
  flex-direction: row-reverse;
  color: #ccc;
  margin-left: 95%;
  /* background: #ccc; */
}
#more:hover {
  cursor: pointer;
  color: black;
}
.money_pic:hover {
  /* opacity: 1;
  transform: scale(2); */
}
.bonus {
  background: rgb(218, 241, 255);
}
.homepage {
  background: #f2f2f2;
}
#line {
  margin-top: 10px;
  margin-bottom: 10px;
}
.logo {
  background: rgb(0, 162, 232);
  margin-left: 80px;
  margin-right: 80px;
  padding-left: 15%;
}
.main {
  padding: 15px;
}

.up_left,
.up_middle,
.up_right {
  width: 30%;
  background: blue;
  margin-left: 10px;
}

.title_behive {
  display: flex;
  font-size: 14px;
  margin-bottom: 15px;
}
.title_more {
  margin-left: auto;
}
.title_row {
  display: flex;
}
.up_left,
.up_middle,
.up_right {
  height: 220px;
  background: white;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 10px;
}
.up_right {
  background: rgb(83, 174, 253);
  color: rgb(0, 120, 189);
  padding: 10px;
  width: 61.5%;
}
.up_right h4 {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
.bottom {
  /* margin-top: 20px; */
  margin-left: 20px;
  width: 87%;
  height: 250px;
  /* background: pink; */
}
.title_text {
  margin-bottom: 0;
  margin-top: 25px;
  margin-bottom: 10px;
  font-weight: bold;
  color: rgb(65, 139, 115);
}
.title_more {
  color: #a4a4a4;
}
.title_more:hover {
  color: black;

  cursor: pointer;
}
.content {
  font-weight: bold;
  font-size: 16px;
}
.content:hover {
  color: #585858;
}
.up_left,
.up_middle {
  margin-right: 20px;
}
.history {
  margin-left: 10px;
}
.width33 {
  width: 33.33%;
}
.text {
  font-size: 26px;
  font-weight: bold;
  /* margin-top: 30px; */
}
.number {
  margin-top: 15px;
  font-size: 20px;
  font-weight: bold;
}
#data_bottom {
  color: white;
  text-align: center;
}
.up_right:hover {
  cursor: pointer;

  transform: scale(1.01);
  transition: 0.2s;
  position: absolute;
  left: 35%;
}
#infoBefore {
  margin-right: 15px;
}
#source {
  color: #706e6e;
  font-size: 14px;
}

#source:hover {
  color: salmon;
  transform: scale(1.2);
  transition: 0.2s;
}
</style>