import Vue from "vue";
import App from "./App.vue";

require("./styles/bootstrap-grid.css");

Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
