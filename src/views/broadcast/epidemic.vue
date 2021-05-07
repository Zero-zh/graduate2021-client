<template>
  <div class="homepage">
    <div class="main">
      <div class="logo">
        <el-image :src="item" id="scroll_item"></el-image>
      </div>
      <div class="up">
        <div class="up_left">
          <div class="title_row">
            <p class="title_text">疫情通知</p>
            <a class="title_more">更多>> </a>
          </div>
          <hr id="line" />
          <div class="title_behive" v-for="item in info" :key="item">
            <a class="content">{{ item.info }}</a>
            <a class="title_more">{{ item.time }} </a>
          </div>
        </div>

        <div class="up_right">
          <!-- <h4 class="bonus">奖学金告示</h4> -->
          <!-- <a href="" class="money_pic"
            ><el-image :src="guoliPic" id="scroll_item"></el-image
          ></a>
          <a href="" class="money_pic"
            ><el-image :src="xueyuanPic" id="scroll_item"></el-image
          ></a> -->
          <a id="more">详情</a>
          <div id="data">
            <div id="data_left" class="width33">
              <p class="text">累计接种</p>
              <p class="number">4.0亿剂</p>
            </div>
            <div id="data_middle" class="width33">
              <p class="text">新增确诊</p>
              <p class="number">0人</p>
            </div>
            <div id="data_right" class="width33">
              <p class="text">现存确诊</p>
              <p class="number">30人</p>
            </div>
          </div>
          <div id="data_bottom">
            统计全国31省区市本土病例&nbsp;截至{{ currentDate }}
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="title_row">
          <p class="title_text">疫情快讯</p>
          <a class="title_more">更多>> </a>
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
</template>

<script>
import { getEpidemicInfo, getEpidemicNews } from "@/api/brocast";
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
      getEpidemicNews().then((response) => {
        console.log(response.data);
        this.news = response.data;
      });
    },
  },
  data() {
    return {
      item: require("@/assets/compus/疫情防控.png"),
      guoliPic: require("@/assets/compus/guoli.png"),
      xueyuanPic: require("@/assets/compus/xueyuan.png"),
      currentDate: new Date().toLocaleString(),
      info: [],
      news: [],
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.up {
  margin-left: 80px;
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
.up {
  display: flex;
  overflow: auto;
  /* flex-direction: column; */
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
  margin-top: 20px;
  margin-left: 82px;
  width: 87%;
  height: 190px;
  /* background: pink; */
}
.title_text {
  font-weight: bold;
  color: #0080ff;
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
  font-size: 14px;
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
  font-size: 24px;
  font-weight: bold;
  margin-top: 30px;
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