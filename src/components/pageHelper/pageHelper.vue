<template>
  <el-pagination
    class="pageHelper"
    background
    layout="prev, pager, next"
    :total="50"
  >
  </el-pagination>
</template>

<script>
export default {
  name: "pageHelper",
  data() {
    return {};
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.pageHelper {
  margin-top: 10px;
  margin-left: 30%;
}
</style>
