import NavBar from "./components/NavBar.vue";

const GlobalComponents = {
  install(Vue) {
    Vue.component("NavBar", NavBar);
  },
};

export default GlobalComponents;
