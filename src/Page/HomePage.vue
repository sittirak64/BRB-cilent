<template>
    <header>
        <NavBar/>
    </header>
    <div>
        <ImageSlide/>
    </div>
</template>
<script>
import ImageSlide from '../components/ImageSlide.vue';

export default {
  name: 'HomePage', 
  components: {
    ImageSlide
  },
};
</script>
<style scoped>
.background {
  background-color: black;
}
</style>