<template>
  <div class="main">
    <div class="top"><SearchComponent /></div>
    <div class="middle">
      <div class="table">
        <div class="table_list" id="list_data">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="time" label="考证时间" sortable width="120">
            </el-table-column>
            <el-table-column prop="name" label="证书名称" width="250">
            </el-table-column>
            <el-table-column prop="location" label="考证地点" width="250">
            </el-table-column>
            <el-table-column prop="sponner" label="主办方"> </el-table-column>
            <el-table-column prop="object" label="可参与考证人员" width="250">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>


<script>
import SearchComponent from "../../components/search_modual/searchComponent.vue";
import { getCertificateData } from "@/api/examination";
export default {
  components: {
    SearchComponent: SearchComponent,
  },
  mounted() {
    this.fetchCertificateData();
  },
  methods: {
    fetchCertificateData() {
      getCertificateData().then((response) => {
        console.log(response.data);
        this.tableData = response.data;
      });
    },
    formatter(row, column) {
      return row.address;
    },
  },
  data() {
    return {
      item: require("@/assets/compus/疫情防控.png"),
      guoliPic: require("@/assets/compus/guoli.png"),
      xueyuanPic: require("@/assets/compus/xueyuan.png"),
      currentDate: new Date().toLocaleString(),
      examDate: 201,
      tableData: [
        {
          time: "2016-05-02",
          name: "校园十大歌手决赛",
          location: "上海市普陀区金沙江路 1518 弄",
          sponsor: "计算机学院",
          object: "2018 - 2020级全体学生",
        },
        {
          time: "2016-05-02",
          name: "校园十大歌手决赛",
          location: "上海市普陀区金沙江路 1518 弄",
          sponsor: "计算机学院",
          object: "2018 - 2020级全体学生",
        },
        {
          time: "2016-05-02",
          name: "校园十大歌手决赛",
          location: "上海市普陀区金沙江路 1518 弄",
          sponsor: "计算机学院",
          object: "2018 - 2020级全体学生",
        },
        {
          time: "2016-05-02",
          name: "校园十大歌手决赛",
          location: "上海市普陀区金沙江路 1518 弄",
          sponsor: "计算机学院",
          object: "2018 - 2020级全体学生",
        },
        {
          time: "2016-05-02",
          name: "校园十大歌手决赛",
          location: "上海市普陀区金沙江路 1518 弄",
          sponsor: "计算机学院",
          object: "2018 - 2020级全体学生",
        },
      ],
      options: [
        {
          value: "选项1",
          label: "校级",
        },
        {
          value: "选项2",
          label: "经济学院",
        },
        {
          value: "选项3",
          label: "计算机学院",
        },
      ],
      value: "",
      input2: "",
      info: [
        {
          title: "这是疫情快讯1",
          date: "2020-10-15",
        },
        {
          title: "这是疫情快讯1222",
          date: "2020-10-15",
        },
        {
          title: "这是疫情快讯1122323",
          date: "2020-10-15",
        },
        {
          title: "这是疫情快讯123456356",
          date: "2020-10-15",
        },
        {
          title: "这是疫情快讯1123阿萨德",
          date: "2020-10-15",
        },
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
.main {
  padding-top: 30px;
  padding-left: 8%;
  padding-right: 8%;
  background: rgb(236, 240, 241);
  height: 670px;
  overflow: scroll;
}
#top {
  margin-left: 8%;
  margin-bottom: 10px;
  display: flex;
}
#select {
  width: 140px;
}
#search {
  width: 400px;
}
#search_botton {
  padding: 12px 20px;
}
#select,
#search {
  margin-right: 30px;
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
</style>