<template>
  <div class="logo-container">
    <img :src="logo" alt="BRB Logo" class="logo" />
  </div>
</template>

<script setup>
import logo from '../assets/logo/BRB-logo.png'
</script>

<style scoped>
.logo-container {
  position: fixed;   /* 🔹 ให้ตรึงอยู่บนจอ */
  top: 10px;         /* ระยะห่างจากขอบบน */
  right: 10px;       /* ระยะห่างจากขอบขวา */
  z-index: 9999;     /* ให้อยู่เหนือทุก element */
}

.logo {
  width: 100px;       /* ปรับขนาดโลโก้ */
  height: auto;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.logo:hover {
  transform: scale(1.1); /* effect เวลา hover */
} 
@media only screen and (max-width: 480px) {
  .logo {
    width: 50px;
  }
}

</style>
