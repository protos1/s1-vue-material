import Vue from "vue";
import App from "./App.vue";

import {
  MdButton,
  MdIcon,
  MdField,
  MdSwitch,
  MdApp,
  MdContent,
  MdDrawer,
  MdElevation,
  MdLayout,
  MdToolbar,
  MdList,
  MdAvatar,
  MdRipple,
  MdBadge,
  MdCard,
  MdDatepicker,
  MdDialog,
  MdMenu
} from "vue-material/dist/components";

//general css file
import "./style/layout.scss";

//theme file
import "./style/theme.scss";

Vue.use(MdButton);
Vue.use(MdIcon);
Vue.use(MdField);
Vue.use(MdSwitch);
Vue.use(MdApp);
Vue.use(MdContent);
Vue.use(MdDrawer);
Vue.use(MdElevation);
Vue.use(MdLayout);
Vue.use(MdToolbar);
Vue.use(MdList);
Vue.use(MdAvatar);
Vue.use(MdRipple);
Vue.use(MdBadge);
Vue.use(MdCard);
Vue.use(MdDatepicker);
Vue.use(MdDialog);
Vue.use(MdMenu);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
