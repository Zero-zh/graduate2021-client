<template>
  <div class="person">
    <div class="main">
      <div id="account">
        <div class="account_number">帐号：</div>
        <div class="account_number">
          <span>17820418132</span>
        </div>
      </div>
      <div id="account" class="email">
        <div class="account_number">邮箱：</div>
        <div class="account_number">
          <span>664827065@qq.com</span>
        </div>
      </div>
      <div class="name_all">
        <div class="account_number" id="name">昵称：</div>
        <div id="account_input">
          <el-input
            placeholder="请输入昵称"
            v-model="input"
            clearable
            maxlength="10"
          >
          </el-input>
        </div>
        <el-button size="small" round>确认</el-button>
      </div>
      <div id="password">
        密码：<el-button type="info" plain size="small" class="botton"
          >修改密码</el-button
        >
      </div>
      <div id="info">
        通知：<el-button size="small" class="botton">我的发布</el-button
        ><el-button size="small" class="botton">我的回答</el-button>
      </div>
      <div id="logout">
        <el-button size="small" type="warning" plain class="botton"
          >退出登录</el-button
        ><el-button size="small" type="danger" plain class="botton"
          >注销帐号</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
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
</style>