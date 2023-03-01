<template>
  <div class="my">
    <section class="user-info">
      <img
        class="avatar"
        src="https://s2.loli.net/2023/02/27/dOPhTWEpbQe6B4I.jpg"
        alt=""
      />
      <h3>永挺</h3>
    </section>
    <section>
      <div class="item">
        <div class="date">
          <span class="day">20</span>
          <span class="month">5月</span>
          <span class="year">2018</span>
        </div>
        <h3>前端大揭秘</h3>
        <p>
          本文以个简单的文件读写为例，讲解了异步的不同写法，包括
          普通的callback.ES2016中的Promise和Generator、Node用于解决回调的co模块、ES2017中的async/await。适合初步接触
          Node.js以及少量ES6语法的同学阅读。
          本文以个简单的文件读写为例，讲解了异步的不同写法，包括
          普通的callback.ES2016中的Promise和Generator、Node用于解决回调的co模块、ES2017中的async/await。适合初步接触
          Node.js以及少量ES6语法的同学阅读。
        </p>
        <div class="actions">
          <router-link to="/edit"><button>编辑</button></router-link>
          <a href="#"><button>删除</button></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script src="./template.js">
</script>
<style scoped src="./template.less" lang="less">
</style>