import blog from "../../api/blog";

export default {
  data() {
    return {
      blogs: [],
      user: {},
      page: 1,
      total: 0
    };
  },
  created() {
    this.userId = this.$route.parms.userId;
    blog.getBlogsByUserId((this.userId = { page: this.page }));
  }
};
