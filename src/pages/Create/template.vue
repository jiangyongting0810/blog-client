<template>
  <div class="create">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <el-input type="textarea" v-model="title"></el-input>
    <p class="msg">限30个字</p>
    <h3>内容简介</h3>
    <el-input type="textarea" rows="3" v-model="description"></el-input>
    <p class="msg">限30个字</p>
    <el-input type="textarea" rows="20" v-model="content"></el-input>
    <p class="msg">限30个字</p>
    <p>
      <label>是否展示到首页</label>
      <el-switch
        v-model="atIndex"
        active-color="#13ce66"
        inactive-color="#ff4949"
      >
      </el-switch>
    </p>
    <el-button @click="onCreate">确定</el-button>
  </div>
</template>

<script src="./template.js">
</script>

<style scoped src="./template.less" lang="less">
</style>
