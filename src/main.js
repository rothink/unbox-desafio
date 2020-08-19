import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router/index";
import "./plugins/axios";
import helper from "./helper/index";

Vue.config.productionTip = false;

window.helper = helper;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
