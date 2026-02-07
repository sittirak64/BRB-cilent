<template>
  <div class="lang-switcher">
    <label class="switch">
      <input type="checkbox" v-model="isTH" @change="toggleLang" />
      <span class="slider">
        <span class="label-en">EN</span>
        <span class="label-th">TH</span>
      </span>
    </label>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const currentLang = ref('en')

// reactive สำหรับ toggle switch
const isTH = ref(false)

// โหลดค่าภาษา
onMounted(() => {
  const savedLang = sessionStorage.getItem('lang') || 'en'
  currentLang.value = savedLang
  isTH.value = savedLang === 'en'
})

// เมื่อ toggle switch เปลี่ยน
const toggleLang = () => {
  currentLang.value = isTH.value ? 'en' : 'th'
  sessionStorage.setItem('lang', currentLang.value)
  window.dispatchEvent(new CustomEvent('language-changed', { detail: currentLang.value }))
}

// ถ้า currentLang เปลี่ยนจากภายนอก (เช่น load หน้า) → sync switch
watch(currentLang, val => {
  isTH.value = val === 'en'
})
</script>

<style scoped>
.lang-switcher {
  position: fixed;
  top: 20px;
  right: 80px;
  z-index: 9999;
}

/* Toggle Switch */
.switch {
  position: relative;
  display: inline-block;
  width: 70px;
  height: 35px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  background-color: #ccc;
  border-radius: 34px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
}

.slider::before {
  content: "";
  position: absolute;
  height: 27px;
  width: 27px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;
}

/* Slide เมื่อเปิดเป็น TH */
input:checked + .slider::before {
  transform: translateX(35px);
}

/* ตัวอักษร EN / TH */
.label-en, .label-th {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  font-weight: bold;
  color: white;
  pointer-events: none;
}

.label-en {
  left: 10px;
}

.label-th {
  right: 10px;
}

/* สีพื้นหลังตาม toggle */
input:checked + .slider {
  background-color: #4caf50; /* สีเขียวเวลา TH */
}

.slider {
  background-color: #2196f3; /* สีฟ้าเวลา EN */
}
</style>
