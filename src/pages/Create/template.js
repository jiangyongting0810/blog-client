import blog from "../../api/blog";

export default {
  data() {
    return {
      title: "",
      description: "",
      content: "",
      atIndex: true
    };
  },
  methods: {
    onCreate() {
      blog
        .createBlog({
          title: this.title,
          content: this.content,
          description: this.description,
          atIndex: this.atIndex
        })
        .then(res => {
          this.$message.success(res.msg);
          this.$router.push({ path: `/detail/${res.data.id}` });
        });
    }
  }
};
