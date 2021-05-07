<template>
  <div class="homepage">
    <div class="main">
      <div id="top">
        <div id="select">
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              id="select_options"
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div id="search">
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input2"
          >
          </el-input>
        </div>
        <div class="bottom">
          <el-button id="search_botton" type="primary" icon="el-icon-search"
            >搜索</el-button
          >
        </div>
        <div class="more"><span>更多>></span></div>
      </div>
      <div class="table">
        <div class="table_list" id="list_data">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="日期" sortable width="150">
            </el-table-column>
            <el-table-column prop="activityName" label="活动名称" width="280">
            </el-table-column>
            <el-table-column prop="location" label="地点" width="220">
            </el-table-column>
            <el-table-column prop="sponsor" label="主办方" width="200">
            </el-table-column>
            <el-table-column prop="activityObject" label="可参与活动人员">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCompetitionData } from "@/api/active";
export default {
  mounted() {
    this.fetchCompetitionData();
  },
  methods: {
    fetchCompetitionData() {
      getCompetitionData().then((response) => {
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
      tableData: [],
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
      // input2: "",
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
</style>