import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Default from "./layouts/Default";
import AuthLayout from "./layouts/AuthLayout";
import './index.css'

createApp(App)
  .component('auth-layout', AuthLayout)
  .component('default-layout', Default)
  .use(store)
  .use(router)
  .mount("#app");
