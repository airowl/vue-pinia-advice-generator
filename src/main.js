import { createApp } from "vue";
import { createPinia, setMapStoreSuffix } from "pinia";
import App from "./App.vue";

setMapStoreSuffix("");
setMapStoreSuffix("_store");

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
