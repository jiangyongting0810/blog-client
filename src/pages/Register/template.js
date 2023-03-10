import { mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["register"]),

    onRegister() {
      this.register({
        username: this.username,
        password: this.password
      }).then(() => {
        //跳转的方法
        this.$router.push({ path: "/" });
      });
    }
  }
};
