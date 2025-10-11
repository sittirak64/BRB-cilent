import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Logo from "./components/ShowLogo.vue";

const GlobalComponents = {
  install(Vue) {
    Vue.component("NavBar", NavBar);
    Vue.component("Footer", Footer);
    Vue.component("Logo", Logo);
  },
};

export default GlobalComponents;
