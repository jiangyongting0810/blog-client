<template>
  <div class="detail">
    <section class="user-info">
      <img class="avatar" :src="user.avatar" :alt="user.username" />
      <h3>{{ title }}</h3>
      <p>
        <router-link :to="`/user/${user.id}`">{{ user.name }}</router-link
        >发布于{{ friendlyDate(createdAt) }}
      </p>
    </section>
    <section class="article" v-html="markdown"></section>
  </div>
</template>

<script src="./template.js">
</script>

<style scoped src="./template.less" lang="less">
</style>
