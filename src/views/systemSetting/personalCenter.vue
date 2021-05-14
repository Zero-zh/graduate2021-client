<template>
  <div class="person">
    <div class="main">
      <div id="account">
        <div class="account_number">帐号：</div>
        <div class="account_number">
          <span>{{ acct }}</span>
        </div>
      </div>
      <div id="account" class="email">
        <div class="account_number">邮箱：</div>
        <div class="account_number">
          <span>{{ email }}</span>
        </div>
      </div>
      <div class="name_all">
        <div class="account_number" id="name">昵称：</div>
        <div id="account_input">
          <el-input
            :placeholder="userName"
            v-model="userNameInput"
            clearable
            maxlength="10"
          >
          </el-input>
        </div>
        <el-button size="small" round @click="changeUserNameByForm"
          >确认</el-button
        >
      </div>
      <div id="password">
        密码：<el-button
          type="info"
          plain
          size="small"
          class="botton"
          @click="dialogFormVisible = true"
          >修改密码</el-button
        >
      </div>
      <div id="info">
        通知：<el-button size="small" class="botton">我的发布</el-button
        ><el-button size="small" class="botton">我的回答</el-button>
      </div>
      <div id="logout">
        <el-button
          size="small"
          type="warning"
          plain
          class="botton"
          @click="logout"
          >退出登录</el-button
        ><el-button size="small" type="danger" plain class="botton"
          >注销帐号</el-button
        >
      </div>

      <!-- 提出问题 -->
      <el-dialog title="提出问题" :visible.sync="dialogFormVisible" id="dialog">
        <el-form :model="form">
          <el-form-item
            label="原密码"
            :label-width="formLabelWidth"
            class="dialogInput"
          >
            <el-input
              v-model="form.beforePassword"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="新密码"
            :label-width="formLabelWidth"
            class="dialogInput"
          >
            <el-input
              v-model="form.afterPassword"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-form-item
            label="确认密码"
            :label-width="formLabelWidth"
            class="dialogInput"
          >
            <el-input
              v-model="form.confirmedPassword"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false" class="themeBtn"
            >取 消</el-button
          >
          <el-button
            type="primary"
            @click="changePasswordByForm"
            class="themeBtn"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import {
  getSysUserInfo,
  changeUserName,
  changePassword,
  logout,
} from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { resetRouter } from "@/router";

export default {
  created() {
    this.getInfoData();
  },
  methods: {
    getInfoData() {
      getSysUserInfo().then((response) => {
        this.acct = response.data.accountNumber;
        this.email = response.data.email;
        this.userName = response.data.userName;
      });
    },
    changeUserNameByForm() {
      changeUserName({
        userName: this.userNameInput,
      }).then((response) => {
        this.userNameInput = null;
        this.userName = response.data;
      });
    },

    async logoutByPasswordChange() {
      resetRouter();
      removeToken();
      this.$router.push({
        path: "/login",
        query: {
          password: this.form.confirmedPassword,
        },
      });
    },
    async logout() {
      resetRouter();
      removeToken();
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },

    changePasswordByForm() {
      if (this.form.afterPassword !== this.form.confirmedPassword) {
        this.$message({
          type: "error",
          message: "新密码与确认密码必须一致",
        });
        return;
      }
      if (this.form.confirmedPassword.length < 6) {
        this.$message({
          type: "error",
          message: "密码长度不能小于6位",
        });
        return;
      }
      if (this.form.beforePassword === this.form.confirmedPassword) {
        this.$message({
          type: "error",
          message: "原密码与新密码不能相同",
        });
        return;
      }

      changePassword({
        beforePassword: this.form.beforePassword,
        afterPassword: this.form.afterPassword,
        confirmedPassword: this.form.confirmedPassword,
      })
        .then((response) => {
          console.log(response);
          console.log("这是then后面的");
          this.userNameInput = null;
          this.userName = response.data;
          this.dialogFormVisible = false;
          this.$message({
            type: "success",
            message: "密码更改成功，请重新登录",
          });
          this.logoutByPasswordChange();
        })
        .catch(() => {
          console.log("这是catch后面的");
        });
    },
  },

  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: "100px",
      form: {
        id: "",
        beforePassword: "",
        afterPassword: "",
        confirmedPassword: "",
      },
      type: "",
      userNameInput: "",
      acct: "",
      email: "",
      userName: "",
    };
  },
};
</script>

<style scoped>
* {
  font-size: 24px;
  margin: 0;
  padding: 0;
}
.botton {
  margin-top: 10px;
  padding: 8px;
}
.main {
  width: 800px;
  margin: 500px;
  margin-top: 50px;
  /* background: #ccc; */
}
.account_number {
  height: 100%;
  /* line-height: 30px; */
  /* margin-top: 10px; */
}
#account_text {
  margin-top: auto;
  height: 100%;
  padding-top: 10px;
}
#account_input {
  width: 40%;
}
#account {
  display: flex;
  margin-bottom: 10px;
}
.name_all {
  display: flex;
}
#accInput {
  width: 100px;
}
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
.email {
  margin-top: 10px;
  margin-bottom: 50px;
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