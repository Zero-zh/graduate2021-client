<template>
  <div class="homepage">
    <div class="main">
      <div id="top">
        <div id="select">
          <el-select v-model="value" clearable placeholder="选择分享类型">
            <el-option
              id="select_options"
              v-for="item in options"
              :key="item.value"
              :label="item.value"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div id="search">
          <el-input
            placeholder="请输入搜索内容"
            prefix-icon="el-icon-search"
            v-model="input2"
          >
          </el-input>
        </div>
        <div class="bottom">
          <el-button
            id="search_botton"
            type="primary"
            icon="el-icon-search"
            v-on:click="fetchTalkExperienceData"
            >搜索</el-button
          >
        </div>
        <div class="more">
          <el-button
            type="success"
            plain
            size="medium"
            class="themeBtn"
            @click="dialogFormVisible = true"
            >我来发布</el-button
          >
        </div>
      </div>
      <div class="middle">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="分享时间" size="100">
                  <span>{{ props.row.time }}</span>
                </el-form-item>
                <el-form-item label="分享链接">
                  <span class="link">{{ props.row.link }}</span>
                </el-form-item>
                <el-form-item label="标题">
                  <span>{{ props.row.title }}</span>
                </el-form-item>
                <el-form-item label="作者">
                  <span>{{ props.row.author }}</span>
                </el-form-item>
                <el-form-item label="类型">
                  <span>{{ props.row.type }}</span>
                </el-form-item>
                <el-form-item label="浏览次数">
                  <span>{{ props.row.views }}</span>
                </el-form-item>

                <el-form-item label="详细说明" class="all_desc">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
                <el-button id="gotoSee" type="primary" plain>去围观</el-button>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="分享时间" prop="time" width="150">
          </el-table-column>
          <el-table-column label="标题" prop="title" width="300">
          </el-table-column>
          <el-table-column label="作者" prop="author" width="150">
          </el-table-column>
          <el-table-column id="link" label="链接" prop="link">
          </el-table-column>
        </el-table>
      </div>
      <div>
        <!-- <PageHelper /> -->
      </div>
    </div>
    <!-- 提出问题 -->
    <el-dialog title="提出问题" :visible.sync="dialogFormVisible" id="dialog">
      <el-form :model="form">
        <el-form-item label="问题类型" :label-width="formLabelWidth">
          <el-select v-model="form.type" placeholder="请选择活动区域">
            <el-option
              id="select_options"
              v-for="item in options"
              :key="item.value"
              :label="item.value"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="分享标题"
          :label-width="formLabelWidth"
          class="dialogInput"
        >
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="分享链接"
          :label-width="formLabelWidth"
          class="dialogInput"
        >
          <el-input v-model="form.remarks" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item
          label="详细说明"
          :label-width="formLabelWidth"
          class="dialogInput"
        >
          <el-input
            type="textarea"
            v-model="form.desc"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" class="themeBtn"
          >取 消</el-button
        >
        <el-button type="primary" @click="submitData" class="themeBtn"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>


<script>
import SearchComponent from "../../components/search_modual/searchComponent.vue";
import PageHelper from "../../components/pageHelper/pageHelper.vue";
import { getWorkExperience } from "@/api/qAndAForum";
export default {
  components: {
    SearchComponent: SearchComponent,
    PageHelper: PageHelper,
  },
  mounted() {
    this.fetchTalkExperienceData();
  },
  methods: {
    submitData() {
      this.dialogFormVisible = false;
      this.form = {};
    },
    fetchTalkExperienceData() {
      getWorkExperience({
        // showRowsPerPage: this.showRowsPerPage,
        // currentPage: this.currentPage,
        type: this.value,
        content: this.input2.trim(),
      }).then((response) => {
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
      type: "",
      form: {
        id: "",
        type: "",
        title: "",
        remarks: "",
        desc: "",
        author: "",
        time: "",
        reply_nums: "",
      },
      formLabelWidth: "100px",
      dialogFormVisible: false,
      dialogTableVisible: false,
      EditDialogFormVisible: false,
      tableData: [],
      value: "",
      input2: "",
      options: [
        {
          value: "国考",
          label: "选项1",
        },
        {
          value: "生活",
          label: "选项2",
        },
        {
          value: "学习",
          label: "选项3",
        },
        {
          value: "技术",
          label: "选项4",
        },
        {
          value: "娱乐",
          label: "选项5",
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

.middle {
  margin-bottom: 10px;
}
.contents {
  width: 80%;
  background: #ccc;
  margin-left: 8%;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
#gotoSee {
  padding: 10px 15px;
}
.all_desc {
  line-height: 0;
}
.link {
  text-decoration: underline;
  cursor: pointer;
}
.link:hover {
  color: blue;
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
#top {
  margin-bottom: 25px;
}
.pageHelper {
  margin-top: 10px;
  margin-left: 30%;
}
.themeBtn {
  padding: 10px 20px;
}
.dialogInput {
  margin-top: 10px;
  width: 80%;
}
#dialog {
  width: 80%;
  margin-left: 10%;
}
#longtext {
  width: 300px;
  height: 500px;
}
.opBtn {
  padding: 8px 10px;
}
.pageHelper {
  margin-top: 10px;
  margin-left: 30%;
}
.themeBtn {
  padding: 10px 20px;
}
.dialogInput {
  margin-top: 10px;
  width: 80%;
}
#dialog {
  width: 80%;
  margin-left: 10%;
}
#longtext {
  width: 300px;
  height: 500px;
}
.opBtn {
  padding: 8px 10px;
}
</style>