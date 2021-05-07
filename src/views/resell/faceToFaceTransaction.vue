<template>
  <div class="main">
    <div id="top">
      <div id="image">
        <el-image
          style="width: 350px; height: 100px"
          :src="icon"
          class="transaction_pic"
        ></el-image>
      </div>
      <div id="search">
        <el-input
          id="input_content"
          placeholder="请输入商品名称"
          prefix-icon="el-icon-search"
          v-model="input2"
        >
        </el-input>
        <div class="text_content">
          <span v-for="item in recommends" :key="item">{{ item }}</span>
        </div>
      </div>
      <div class="bottom">
        <el-button id="search_botton" type="primary" icon="el-icon-search"
          >搜索</el-button
        >
      </div>
    </div>

    <div id="price">
      <div id="price_text">价格区间</div>
      <div id="price_scope">
        <div id="price_input">
          <input type="text" placeholder="￥" maxlength="6" />
          <span id="price_line">-</span>
          <input type="text" placeholder="￥" maxlength="6" />
        </div>
      </div>
      <div id="price_submit">
        <!-- <el-button id="search_botton" type="primary" icon="el-icon-search"
          >搜索</el-button
        > -->

        <!-- <el-button id="search_botton" plain>确定</el-button> -->
        <button id="submit_price">确定</button>
      </div>
    </div>

    <div id="middle">
      <a class="commodity_item" v-for="items in commodity_info" :key="items">
        <el-image
          style="width: 205px; height: 205px"
          :src="items.pic"
          class="transaction_pic"
          :fit="scale - down"
        ></el-image>
        <p class="commodity_title">
          {{ items.title }}
        </p>
        <div class="price_layout">
          <p class="commodity_price">￥{{ items.price }}</p>
          <p class="price_delete_line">￥{{ items.priceBefore }}</p>
        </div>
        <div class="icon">
          <i class="el-icon-user"></i>
          <span class="icon_name">{{ items.author }}</span>
        </div>
        <hr style="background-color: #f2f2f2; height: 1px; border: none" />
        <div class="browse_times">
          <div class="textright">
            浏览<span class="browse_nums">{{ items.views }}</span>
          </div>
        </div>
      </a>
    </div>

    <div id="bottom">&nbsp;</div>
  </div>
</template>

<script>
import { getResellData } from "@/api/resell";
export default {
  created() {
    this.fetchResellData();
  },
  methods: {
    fetchResellData() {
      getResellData().then((response) => {
        this.commodity_info = response.data;
        for (let i = 0; i < 12; i++) {
          this.commodity_info[i].pic = this.images[i];
        }
      });
    },
  },
  data() {
    return {
      icon: require("@/assets/tran/tran.png"),
      images: [
        require("@/assets/tran/1.jpg"),
        require("@/assets/tran/2.jpg"),
        require("@/assets/tran/3.jpg"),
        require("@/assets/tran/4.jpg"),
        require("@/assets/tran/5.jpg"),
        require("@/assets/tran/6.jpg"),
        require("@/assets/tran/7.jpg"),
        require("@/assets/tran/8.jpg"),
        require("@/assets/tran/9.jpg"),
        require("@/assets/tran/10.jpg"),
        require("@/assets/tran/11.jpg"),
        require("@/assets/tran/12.jpg"),
      ],
      commodity_info: [{}],
      input2: "",
      recommends: [
        "康康大家都买啥",
        "山地自行车",
        "篮球鞋",
        "二手书籍",
        "充电宝",
        "电影票",
      ],
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#bottom {
  height: 50px;
}
.main {
  padding-top: 30px;
  padding-right: 8%;
  /* background: rgb(236, 240, 241); */
  /* height: 670px; */
  margin-left: 4%;
  /* overflow-y: scroll; */
}
#top {
  margin-bottom: 10px;
  display: flex;
}
#select {
  width: 140px;
  padding-left: 20px;
}
#search {
  width: 400px;
}
#search,
.bottom {
  padding-top: 20px;
}
#search_botton {
  padding: 12px 20px;
}
#select,
#search {
  margin-right: 0;
}
#select_options {
  padding-left: 15px;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.more {
  margin-left: 10%;
  color: rgb(167, 166, 166);
  height: 35px;
  line-height: 55px;
}
.more :hover {
  cursor: pointer;
  color: black;
}
#list_data:hover {
  cursor: pointer;
}
#exam_date {
  margin-left: 30%;
  font-weight: bold;
  font-size: 24px;
  margin-top: 15px;
  margin-bottom: 15px;
}
.middle {
  margin-bottom: 50px;
}
#date_num {
  color: red;
}
#image {
  margin-right: 4%;
  margin-left: 6%;
}

.text_content {
  margin-top: 8px;
  font-size: 13px;
  color: #a4a4a4;
}
.text_content span:nth-child(1) {
  color: red;
}
.text_content span:nth-child(n) {
  margin-right: 10px;
}
.text_content span:last-child() {
  margin-right: 0;
}
.text_content span:nth-child(n):hover {
  cursor: pointer;
  text-decoration: underline;
  color: red;
}
#price {
  display: flex;
  height: 50px;
  line-height: 50px;
  /* background: #ccc; */
}
#price_scope {
  display: flex;
}
#price_input {
  margin-top: 10px;
  display: flex;
  height: 30px;
  line-height: 30px;
}
#price_line {
  margin-left: 5px;
  margin-right: 5px;
}
#search_botton {
}
input {
  max-width: 70px;
}
#submit_price {
  margin-left: 10px;
  margin-top: 11px;
  box-sizing: border-box;
  padding: 5px 10px;
  color: white;
  background: #ff4000;
  border: 0;
  cursor: pointer;
}
#price_text {
  font-size: 14px;
  margin-right: 10px;
  margin-left: 8%;
}
#middle {
  margin-left: 8%;
  margin-right: 6%;
  background: #ccc;
  /* width: 1200px; */
  /* height: 1600px; */
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.commodity_item {
  background: white;
  width: 25%;
  box-sizing: border-box;
  border: 1px solid #e6e6e6;
  height: 360px;
  padding: 20px;
  padding-top: 25px;
  padding-bottom: 10px;
}
.commodity_item:nth-child(n) {
  border-left: 0px solid #e6e6e6;
}
.commodity_item:nth-child(4n-3) {
  border-left: 1px solid #e6e6e6;
}
.commodity_item:nth-child(n-1) {
  border-bottom: 0px solid #e6e6e6;
}
.commodity_item:nth-child(n + 9) {
  border-bottom: 1px solid #e6e6e6;
}
.price_layout {
  display: flex;
}
#middle {
  color: #a4a4a4;
}
.commodity_title {
  margin-top: 5px;
  margin-bottom: 5px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 显示三行，后面省略 */
  overflow: hidden;
  height: 35px;
}
.commodity_price {
  color: #ff4000;
  margin-bottom: 5px;
  font-size: 18px;
}
.price_delete_line {
  margin-left: 8px;
  line-height: 22px;
  font-size: 15px;
  text-decoration: line-through;
}
.el-icon-user {
  color: #fe642e;
}
.icon_name {
  margin-left: 5px;
  font-size: 12px;
}
#line {
  color: #e6e6e6;
}
.browse_times {
  font-size: 12px;
}
.browse_nums {
  /* text-align: right; */
  margin-left: 4px;
}
.textright {
  margin-top: 10px;
  text-align: right;
}
.commodity_item:hover {
  cursor: pointer;
  border: 1px solid salmon;
  transform: scale(1.02);
  transition: 0.2s;
}
</style>