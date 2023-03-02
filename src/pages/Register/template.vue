<template>
  <div>
    <h4>用户名</h4>
    <input v-model="username" placeholder="用户名" />
    <p class="error">当前用户已注册</p>
    <h4>密码</h4>
    <input
      v-model="password"
      type="password"
      placeholder="密码"
      @keyup.enter="onRegister"
    />
    <el-button size="medium" @click="onRegister">立即登录</el-button>
    <P class="notice">没有账号</P>
    <router-link to="/register">注册新用户</router-link>
  </div>
</template>

<script src="./template.js">
</script>

<style scoped src="./template.css">
</style>
