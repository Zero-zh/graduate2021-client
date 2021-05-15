<template>
  <div class="homepage">
    <div class="main">
      <div id="top">
        <div id="select">
          <el-select v-model="value" clearable placeholder="选择问题类型">
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
            v-on:click="fetchAskAndAnswerData"
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
            >我来提问</el-button
          >
        </div>
      </div>
      <div class="middle">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="提出时间">
                  <span>{{ props.row.time }}</span>
                </el-form-item>
                <el-form-item label="备注">
                  <span>{{ props.row.remarks }}</span>
                </el-form-item>
                <el-form-item label="问题标题">
                  <span>{{ props.row.title }}</span>
                </el-form-item>
                <el-form-item label="作者">
                  <span>{{ props.row.author }}</span>
                </el-form-item>
                <el-form-item label="类型">
                  <span>{{ props.row.type }}</span>
                </el-form-item>
                <el-form-item label="回答次数">
                  <span>{{ props.row.replyNums }}</span>
                </el-form-item>
                <el-form-item label="详细说明" class="all_desc">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
                <el-button id="gotoSee" type="primary" plain
                  >去 BiBi 一下</el-button
                >
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="提问时间" prop="time" width="250">
          </el-table-column>
          <el-table-column label="问题标题" prop="title" width="200">
          </el-table-column>
          <el-table-column label="发布者" prop="author" width="200">
          </el-table-column>
          <el-table-column label="类型" prop="type" width="150">
          </el-table-column>
          <el-table-column label="操作" prop="" width="200">
            <template slot-scope="scope">
              <!-- <el-button
                @click="updateFromTable(scope.row)"
                type="text"
                size="small"
                >查看</el-button
              >
              <el-button type="text" size="small">编辑</el-button> -->
              <el-button
                type="primary"
                class="opBtn"
                plain
                @click="showUpdateFromTable(scope.row)"
                >编辑</el-button
              >
              <el-button
                type="danger"
                class="opBtn"
                plain
                @click="deleteFromTable(scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div>
        <el-pagination
          class="pageHelper"
          background
          layout="prev, pager, next"
          :page-size="showRowsPerPage"
          :total="rowsCount"
          :current-page="currentPage"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
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
          label="问题标题"
          :label-width="formLabelWidth"
          class="dialogInput"
        >
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="问题备注"
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
        <el-button type="primary" @click="askQuestionFromTable" class="themeBtn"
          >确 定</el-button
        >
      </div>
    </el-dialog>

    <!-- 编辑问题 -->
    <el-dialog
      title="编辑问题"
      :visible.sync="EditDialogFormVisible"
      id="dialog"
    >
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
          label="问题标题"
          :label-width="formLabelWidth"
          class="dialogInput"
        >
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="问题备注"
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
        <!-- <el-button @click="EditDialogFormVisible = false" class="themeBtn"
          >取 消</el-button
        >
        <el-button type="primary" @click="updateFromTable" class="themeBtn"
          >确 定</el-button
        > -->

        <template>
          <el-button @click="EditDialogFormVisible = false" class="themeBtn"
            >取 消</el-button
          >
          <el-button type="primary" @click="updateFromTable" class="themeBtn"
            >确 定</el-button
          >
        </template>
      </div>
    </el-dialog>

    <el-dialog
      title="提示"
      :visible.sync="deleteDialog"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>


<script>
import SearchComponent from "../../components/search_modual/searchComponent.vue";
import PageHelper from "../../components/pageHelper/pageHelper.vue";
import {
  getAskAndAnswerData,
  addAskQuestion,
  deleteAskQuestion,
  updateAskQuestion,
} from "@/api/qAndAForum";
export default {
  components: {
    SearchComponent: SearchComponent,
    PageHelper: PageHelper,
  },
  inject: ["reload"],
  mounted() {
    this.fetchAskAndAnswerData();
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
      this.fetchAskAndAnswerData();
    },

    fetchAskAndAnswerData() {
      getAskAndAnswerData({
        showRowsPerPage: this.showRowsPerPage,
        currentPage: this.currentPage,
        type: this.value,
        content: this.input2.trim(),
      }).then((response) => {
        this.rowsCount = response.data.rowsCount;
        this.tableData = response.data.t;
      });
    },
    askQuestionFromTable() {
      if (
        this.form.type === "" ||
        this.form.title === "" ||
        this.form.remarks === "" ||
        this.form.desc === ""
      ) {
        //内容不能为空
        this.$message({
          type: "error",
          message: "内容不能为空",
        });
        return;
      }
      addAskQuestion({
        type: this.form.type,
        title: this.form.title,
        remarks: this.form.remarks,
        desc: this.form.desc,
      })
        .then((response) => {
          console.log(response);
          // if (response.msg == -1) {
          //   this.$message({
          //     type: "error",
          //     message: "新增失败，数据库中已经存在该数据",
          //   });
          //   return;
          // }
          // if (response.code === 0) {
          //   console.log("这是成功");
          // }
          if (response !== undefined) {
            //新增成功
            this.reload();
            this.form = {};
            this.$message({
              type: "success",
              message: "新增成功",
            });
            this.EditDialogFormVisible = false;
          }
        })
        .catch((error) => {
          console.log("这是错误");
          console.log(error);
        });
    },

    showUpdateFromTable(rowData) {
      this.form.id = rowData.id;
      this.form.title = rowData.title;
      this.form.desc = rowData.desc;
      this.form.remarks = rowData.remarks;
      this.form.type = rowData.type;
      this.EditDialogFormVisible = true;
    },
    updateFromTable() {
      updateAskQuestion({
        id: this.form.id,
        type: this.form.type,
        title: this.form.title,
        remarks: this.form.remarks,
        desc: this.form.desc,
      }).then((response) => {
        this.reload();
        this.form = {};
        this.$message({
          type: "success",
          message: "编辑成功",
        });
        this.EditDialogFormVisible = false;
      });
    },

    //真正删除
    deleteFromTable(rowData) {
      this.$confirm("此操作将删除该记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          console.log(rowData);
          this.form.id = rowData.id;
          console.log(rowData);
          deleteAskQuestion({
            questionId: this.form.id,
          }).then((response) => {
            this.reload();
            this.form = {};
            this.EditDialogFormVisible = false;
          });
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    handleClose() {
      this.reload;
    },

    formatter(row, column) {
      return row.address;
    },
    getChildMsg() {
      this.msgFromChild = this.$children.child2Msg;
      console.log(this.msgFromChild);
    },
  },
  data() {
    return {
      deleteDialog: false,
      showRowsPerPage: 10,
      rowsCount: 1,
      currentPage: 1,
      prop: {},
      props: {},
      scope: {},
      dialogTableVisible: false,
      dialogFormVisible: false,
      EditDialogFormVisible: false,
      questionId: "",
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
      currentPage: 1,
      totalNum: 50,
      pageNum: 4,
      total: "",
      type: "",
      content: "",
      input2: "",
      tableData: [],
      options: [
        {
          value: "失物招领",
          label: "选项1",
        },
        {
          value: "学业学习",
          label: "选项2",
        },
        {
          value: "生活方式",
          label: "选项3",
        },
        {
          value: "兼职赚钱",
          label: "选项4",
        },
        {
          value: "户外娱乐",
          label: "选项5",
        },
      ],
      value: "",
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

/* .middle {
  margin-bottom: 10px;
} */
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
</style>