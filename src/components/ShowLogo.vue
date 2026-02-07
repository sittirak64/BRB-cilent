<template>
  <div class="logo-container">
    <div class="logo-circle">
      <img :src="logo" alt="BRB Logo" class="logo" />
    </div>
  </div>
</template>

<script setup>
import logo from '../assets/logo/BRB-logo00.png'
</script>

<style scoped>
.logo-container {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 9999;
}

.logo-circle {
  background-color: white;       /* 🔹 พื้นหลังวงกลมสีขาว */
  border-radius: 15%;          
  width: 65px;                   /* ขนาดของวงกลม */
  height: 65px;
  display: flex;                 /* จัดให้รูปอยู่ตรงกลาง */
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2); 
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.logo-circle:hover {
  transform: scale(1.3);
  box-shadow: 0 4px 16px rgba(0,0,0,0.3);
}

.logo {
  width: 100%;        /* 🔹 ปรับให้โลโก้อยู่ในวงกลมสวยๆ */
  height: 100%;
}

@media only screen and (max-width: 480px) {
  .logo-circle {
    width: 25px;
    height: 25px;
  }

  .logo {
    width: 65%;
  }
}
</style>
