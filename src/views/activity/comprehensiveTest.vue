<template>
  <div class="homepage">
    <div class="main">
      <div class="search"></div>
      <div class="active_type"></div>
      <div class="active_all">
        <div id="left">
          <div id="left_up">
            <div class="container">
              <a href="" class="big_pic">
                <el-image
                  style="width: 378px; height: 210px"
                  :src="bigPicData.pic"
                ></el-image
              ></a>
              <a href="" class="big_text"
                >{{ bigPicData.title
                }}<span class="icon" id="topIcon"
                  ><i class="el-icon-magic-stick" id="icon_big"></i></span
              ></a>
            </div>
          </div>
          <div id="left_bottom">
            <div class="container" v-for="items in dataWithPic" :key="items">
              <a href="" class="bot_pic">
                <el-image
                  style="width: 180px; height: 100px"
                  :src="items.pic"
                  class="transaction_pic"
                ></el-image
              ></a>
              <a href="" class="bot_text">{{ items.title }}</a>
            </div>
          </div>
        </div>
        <div id="right">
          <div class="right_up">
            <ul>
              <li class="right_content" v-for="item1 in upData" :key="item1">
                <div>
                  <span class="title"
                    >{{ item1.title }}
                    <span class="icon" id="topIcon"
                      ><i class="el-icon-magic-stick" id="icon"></i
                    ></span> </span
                  ><span class="date">{{ item1.time }}</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="right_bottom">
            <ul>
              <li class="right_content" v-for="item2 in downData" :key="item2">
                <span class="title"
                  >{{ item2.title }}
                  <span class="icon"
                    ><i class="el-icon-magic-stick" id="icon"></i
                  ></span> </span
                ><span class="date">{{ item2.time }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getComprehensiveUpData, getComprehensiveDownData } from "@/api/active";
export default {
  created() {
    this.fetchUpData();
    this.fetchDownData();
  },
  methods: {
    fetchUpData() {
      getComprehensiveUpData().then((response) => {
        console.log(response.data);
        this.upData = response.data;
      });
    },
    fetchDownData() {
      getComprehensiveDownData().then((response) => {
        console.log(response.data);
        this.downData = response.data;
      });
    },
  },
  data() {
    return {
      upData: [],
      downData: [],
      bigPicData: {
        title: "大学生知识竞赛",
        pic: require("@/assets/comprehensiveTest/we.jpg"),
      },
      dataWithPic: [
        {
          title: "校园运动会学院赛",
          pic: require("@/assets/comprehensiveTest/aa.jpg"),
        },
        {
          title: "主持人大赛总决赛",
          pic: require("@/assets/comprehensiveTest/bb.jpeg"),
        },
        {
          title: "马拉松梅州赛区",
          pic: require("@/assets/comprehensiveTest/cc.jpg"),
        },
        {
          title: "定向越野",
          pic: require("@/assets/comprehensiveTest/dd.png"),
        },
      ],

      upData: [],
      downData: [],
    };
  },
};
</script>

<style scoped>
* {
  color: rgb(18, 46, 103);
  margin: 0;
  padding: 0;
}
.homepage {
  background: rgb(236, 240, 241);
  height: 670px;
  padding-top: 30px;
  padding-left: 8%;
  padding-right: 8%;
}
.main {
  background: white;
  padding-bottom: 30px;
}
#left {
  width: 38%;
  height: 590px;
  /* margin: 20px; */
  margin-right: 50px;
  background: white;
  box-sizing: border-box;
}
#left_up {
  width: 100%;
  height: 46%;
  /* background: #ccc; */
  margin-right: 10px;
}
#left_bottom {
  margin-top: 20px;
  /* background: #ccc; */
  height: 54%;
  display: flex;
  flex-wrap: wrap;
}
.active_all {
  display: flex;
}
.container {
  display: flex;
  flex-direction: column;
  /* padding: 10px; */
  /* margin-right: 10px; */
  padding-left: 20px;
  padding-top: 10px;
  margin-bottom: 20px;
}
.bot_pic {
  background: pink;
  width: 180px;
  height: 100px;
  margin-bottom: 10px;
}
.bot_text {
  padding-top: 0;
  text-align: center;
}
.bot_text:hover,
.big_text:hover {
  cursor: pointer;
  text-decoration: underline;
  color: salmon;
  transform: scale(1.1);
  transition: 0.2s;
}
.big_pic {
  margin-top: 10px;
  background: pink;
  height: 210px;
  width: 378px;
}
.big_text {
  margin-top: 10px;
  font-size: 18px;
  text-align: center;
}
#right {
  margin-top: 20px;
  width: 70%;
}
.right_up {
  margin-bottom: 50px;
}
.right_content {
  padding-right: 20px;
  width: 100%;
  margin-bottom: 10px;
}

.title {
  /* margin-left: auto; */
}
.date {
  position: absolute;
  right: 10%;
  margin-left: auto;
  /* margin-left: 100px; */
}
.right_content:nth-child(1) {
  font-weight: bold;
}
.title:hover,
.date:hover {
  cursor: pointer;
  color: sandybrown;
  text-decoration: underline;
  font-size: 18px;
  transition: 0.2s;
}
.big_pic:hover,
.bot_pic:hover {
  transform: scale(1.1);
  transition: 0.2s;
}
.big_text,
.bot_text {
  color: black;
}
.right_content:nth-child(n) .icon {
  font-size: 0;
}
.right_content:first-child .icon {
  font-size: 24px;
}
.right_content:nth-of-type(2) #topIcon {
  font-size: 20px;
}
#icon_big {
  font-size: 24px;
}
</style>