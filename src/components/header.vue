<template>
  <header :class="{ login: isLogin, nologin: !isLogin }">
    <template v-if="!isLogin">
      <h1>welcome</h1>
      <p>个人博客汇聚</p>
      <div class="btns">
        <router-link to="/login"><el-button>立即登录</el-button></router-link>
        <router-link to="/register"
          ><el-button>注册账号</el-button></router-link
        >
      </div>
    </template>
    <template v-if="isLogin">
      <h1>写博客</h1>
      <router-link to="/create">写</router-link>
      <div class="user">
        <a href="https://sm.ms/image/dOPhTWEpbQe6B4I" target="_blank">
          <img
            class="avatar"
            :src="user.avatar"
            :alt="user.username"
            :title="user.username"
          />
        </a>
        <ul>
          <li><router-link to="/my">我的</router-link></li>
          <li><a href="#" @click="onLogout">注销</a></li>
        </ul>
      </div>
    </template>
  </header>
</template>

<script>
import auth from "@/api/auth";
window.auth = auth;

import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["isLogin", "user"]),
  },

  created() {
    this.checkLogin();
  },

  methods: {
    ...mapActions(["checkLogin", "logout"]),
    onLogout() {
      this.logout();
    },
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
  .avatar {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-left: 15px;
  }
  .user {
    position: relative;
    ul {
      display: none;
      position: absolute;
      right: 0;
      list-style: none;
      border: 1px solid #eaeaea;
      margin: 0;
      padding: 0;
      background-color: #fff;
      a {
        text-decoration: none;
        color: #333;
        font-size: 12px;
        display: block;
        padding: 5px 10px;
        &:hover {
          background-color: #eaeaea;
        }
      }
    }
    &:hover ul {
      display: block;
    }
  }
}
</style>

