<template>
  <header>
    <NavBar />
    <LanguageSwitcher/>
    <Logo />
  </header>
  <div>
    <ImageSlide />
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
