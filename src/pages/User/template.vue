<template>
  <div class="user">
    <section class="user-info">
      <img class="avatar" :src="user.avatar" :alt="user.username" />
      <h3>{{ user.username }}</h3>
    </section>
    <section>
      <router-link
        :to="`/detail/${blog.id}`"
        class="item"
        v-for="blog in blogs"
        :key="blog.id"
      >
        <div class="date">
          <span class="day">{{ splitDate(blog.createdAt).date }}</span>
          <span class="month">{{ splitDate(blog.createdAt).month }}月</span>
          <span class="year">{{ splitDate(blog.createdAt).year }}</span>
        </div>
        <h3>{{ blog.title }}</h3>
        <p>
          {{ blog.description }}
        </p>
      </router-link>
    </section>
    <section>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="onPageChange"
      >
      </el-pagination>
    </section>
  </div>
</template>

<script src="./template.js">
</script>

<style src="../My/template.less" lang="less"></style>
