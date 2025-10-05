import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./Router";
import GlobalComponents from "./globalComponents";
// import GlobalComponents from "./globalComponents";
// import * as bootstrap from "bootstrap";

const app = createApp(App)

// ใช้ router
app.use(router)

// ใช้ global components (ถ้ามีฟังก์ชัน install)
app.use(GlobalComponents);
// app.use(GlobalComponents)

app.mount('#app')
