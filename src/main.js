import Vue from "vue";
import App from "./App.vue";

import { MdButton, MdIcon, MdField } from "vue-material/dist/components";

//general css file
import "./style/layout.scss";

//theme file
import "./style/theme.scss";

Vue.use(MdButton);
Vue.use(MdIcon);
Vue.use(MdField);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
