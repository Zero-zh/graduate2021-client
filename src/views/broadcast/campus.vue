<template>
  <div class="homepage">
    <div class="main">
      <div class="logo">
        <el-image :src="item" id="scroll_item"></el-image>
      </div>
      <div class="up">
        <div class="up_left">
          <div class="title_row">
            <p class="title_text">通知公告</p>
            <a class="title_more">更多>> </a>
          </div>
          <hr id="line" />
          <div class="title_behive" v-for="item in info" :key="item">
            <a class="content">{{ item.title }}</a>
            <a class="title_more">{{ item.time }} </a>
          </div>
        </div>
        <div class="up_middle">
          <div class="title_row">
            <p class="title_text">科研成果</p>
            <a class="title_more">更多>> </a>
          </div>
          <hr id="line" />
          <div class="title_behive" v-for="item in searchers" :key="item">
            <a class="content">{{ item.title }}</a>
            <a class="title_more">{{ item.time }} </a>
          </div>
        </div>
        <div class="up_right">
          <h4 class="bonus">奖学金告示</h4>
          <a href="" class="money_pic"
            ><el-image :src="guoliPic" id="scroll_item"></el-image
          ></a>
          <a href="" class="money_pic"
            ><el-image :src="xueyuanPic" id="scroll_item"></el-image
          ></a>
        </div>
      </div>
      <div class="bottom">
        <div class="title_row">
          <p class="title_text">历史热点</p>
          <a class="title_more">更多>> </a>
        </div>
        <div class="">
          <hr id="line" />
          <div class="title_behive" v-for="item in historys" :key="item">
            <a class="content">{{ item.title }}</a>
            <i class="el-icon-view" id="eyes">&nbsp;{{ item.clicks }}</i>
            <a class="his_date" id="date">{{ item.time }} </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getinfoData, getRearchData, getHistoryData } from "@/api/user";
export default {
  created() {
    this.getInfoData();
    this.getRearchData();
    this.getHistoryData();
  },
  methods: {
    getInfoData() {
      getinfoData().then((response) => {
        console.log(response.data);
        this.info = response.data;
      });
    },

    getRearchData() {
      getRearchData().then((response) => {
        console.log(response.data);
        this.searchers = response.data;
      });
    },

    getHistoryData() {
      getHistoryData().then((response) => {
        console.log(response.data);
        this.historys = response.data;
      });
    },
  },

  data() {
    return {
      item: require("@/assets/compus/校内热点.png"),
      guoliPic: require("@/assets/compus/guoli.png"),
      xueyuanPic: require("@/assets/compus/xueyuan.png"),
      info: [],
      searchers: [],
      historys: [],
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
  background: #ceecf5;
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
  /* background: #ccc; */
  color: rgb(0, 120, 189);
  padding: 0;
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
.title_more,
.his_date {
  color: #a4a4a4;
}
.title_more:hover,
.his_date:hover {
  color: black;

  cursor: pointer;
}
.content {
  font-weight: bold;
  font-size: 14px;
  width: 75%;
  height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
#date {
  /* padding-right: 10px; */
}
#eyes {
  margin-left: 10%;
  width: 6%;
  color: #a4a4a4;
}
.his_date {
  margin-left: 2%;
}
</style>