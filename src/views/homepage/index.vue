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
        <h4 id="news_start">资讯新闻</h4>
        <div id="news" v-for="item in news" :key="item">
          <p class="news">
            <span>{{ item.title }}</span
            ><span id="news_date">{{ item.date }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      news: [
        {
          title: "疫情动态2021年新年报道XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
          date: "2020-05-20",
        },
        { title: "疫情动态2021年新年报道1X", date: "2020-05-20" },
        { title: "疫情动态2021年新年报道2", date: "2020-05-20" },
        { title: "疫情动态2021年新年报道3", date: "2020-05-20" },
        { title: "疫情动态2021年新年报道4", date: "2020-05-20" },
      ],

      //你问我答大厅
      uaskPeople: 1024,
      experiencesPeople: 2254,
      uasks: [
        {
          author: "王五",
          contents: "你问我答内容1",
        },
        {
          author: "赵六",
          contents: "你问我答内容222",
        },
      ],
      experiences: [
        {
          author: "1212",
          contents: "经验之谈1",
        },
        {
          author: "好家伙",
          contents: "经验之谈1222",
        },
      ],

      transactions: [
        {
          title: "这是标题来自数组",
          price: 1024,
          author: "这他吗是作者",
          img: require("@/assets/homePage/transaction/衣1.jpg"),
        },
        {
          title: "这是标题来自数组12",
          price: 1022,
          author: "这他吗是作者2",
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
  margin-top: 30px;
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
</style>