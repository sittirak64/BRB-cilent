import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Logo from "./components/ShowLogo.vue";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";
const GlobalComponents = {
  install(Vue) {
    Vue.component("NavBar", NavBar);
    Vue.component("Footer", Footer);
    Vue.component("Logo", Logo);
    Vue.component("LanguageSwitcher", LanguageSwitcher);
  },
};

export default GlobalComponents;
