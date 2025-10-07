<template>
    <header>
        <NavBar/>
    </header>
    <main>
        <AboutComponent/>
    </main>
    <footer>
      <Footer/>
    </footer>
</template>
<script>
import AboutComponent from '../components/AboutComponent.vue';
export default {
  name: 'About', 
  components: {
    AboutComponent
  },
};

</script>