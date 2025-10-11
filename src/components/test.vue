<template>
    <div class="block-container">
        <div class="text">
            <span style="font-size: 30px; color: #000;">Baan Rim Bueng</span>
            <span> Contact </span>
        </div>
        <div class="subtitle">
            <p>We’re pleased to advise, contact us</p>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.block-container {
  width: 99vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('../assets/BRB-image/BRB-project (13).jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}

.block-container::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  z-index: 1;
}
</style>
