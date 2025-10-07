import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

const GlobalComponents = {
  install(Vue) {
    Vue.component("NavBar", NavBar);
    Vue.component("Footer", Footer);
  },
};

export default GlobalComponents;
