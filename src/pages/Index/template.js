import request from "../../helpers/request";
import auth from "../../api/auth";

window.request = request;
window.auth = auth;

export default {
  methods: {
    open() {
      this.$message("这是一条消息提示");
    },
    open1() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    }
  }
};
