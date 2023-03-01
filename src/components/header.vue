<template>
  <header :class="{ login: isLogin, nologin: !isLogin }">
    <template v-if="!isLogin">
      <h1>welcome</h1>
      <p>个人博客汇聚</p>
      <div class="btns">
        <el-button>立即登录</el-button>
        <el-button>注册账号</el-button>
      </div>
    </template>
    <template v-if="isLogin">
      <h1>写博客</h1>
      <div class="user">
        <a href="https://sm.ms/image/dOPhTWEpbQe6B4I" target="_blank">
          <img
            class="portrait"
            src="https://s2.loli.net/2023/02/27/dOPhTWEpbQe6B4I.jpg"
          />
        </a>
      </div>
    </template>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true,
    };
  },
};
</script>


<style lang="less">
@import "../assets/base.less";

header.nologin {
  padding: 0 12% 30px 12%;
  background: @bgColor;
  display: grid;
  justify-items: center;
  h1 {
    color: #fff;
    font-size: 40px;
    margin: 60px 0 0 0;
    text-transform: uppercase;
  }
  p {
    margin: 15px 0 0 0;
    color: #fff;
  }
  button {
    margin: 20px 5px 0;
  }
  .btns {
    margin-top: 30px;
  }
}

header.login {
  background: @bgColor;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    color: #fff;
    font-size: 40px;
    text-transform: uppercase;
  }
  .portrait {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-left: 15px;
  }
}
</style>

