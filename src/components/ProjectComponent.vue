<template>
  <div class="block-container">
    <div class="text">
      <span>Baan Rim Bueng</span>
    </div>
    <div class="subtitle">
      <p>Portfolios</p>
    </div>
  </div>

  <!-- Portfolio Cards -->
  <div class="portfolio-section">
    <div class="card-grid">
      <div class="card" v-for="(item, index) in portfolios" :key="index" @click="openModal(item)">
        <img :src="item.images[0]" alt="Portfolio" class="card-image" />
        <h3 class="card-title">{{ item.title }}</h3>
        <h4 class="card-title">{{ item.status }}</h4>
        <p class="card-desc">{{ item.desc }}</p>
      </div>
    </div>
  </div>

  <!-- ✅ Popup Modal -->
  <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <button class="close-btn" @click="closeModal">✖</button>

      <div class="modal-body">
        <!-- Left Side -->
        <div class="modal-left">
          <h2 class="modal-title">{{ selectedItem.title }}</h2>
          <p class="modal-desc">{{ selectedItem.desc }}</p>
          <p class="modal-detail">{{ selectedItem.detail }}</p>
        </div>

        <!-- Right Side (Slide Show) -->
        <div class="modal-right">
          <div class="slideshow-container">
            <!-- Slide -->
            <div class="slide" v-for="(img, idx) in selectedItem.images" :key="idx" v-show="idx === slideIndex">
              <img :src="img" class="slide-image" />
            </div>

            <p class="slide-count">{{ slideIndex + 1 }} / {{ selectedItem.images.length }}</p>
          </div>

          <!-- ✅ Thumbnail -->
          <div class="scroll-container" ref="scrollContainer">
            <img v-for="(thumb, index) in selectedItem.images" :key="index" :src="thumb" class="scroll-image"
              :class="{ active: index === slideIndex }" @click="setSlide(index)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { portfolios } from '../data/portfolio'

const showModal = ref(false)
const selectedItem = ref({})
const slideIndex = ref(0)
const scrollContainer = ref(null)

function openModal(item) {
  selectedItem.value = item
  slideIndex.value = 0
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

/* ✅ ฟังก์ชันเปลี่ยนสไลด์ พร้อมจัดให้อยู่ตรงกลาง */
function changeSlide(n) {
  const total = selectedItem.value.images.length
  slideIndex.value = (slideIndex.value + n + total) % total
  scrollToActiveThumb()
}

/* ✅ ฟังก์ชันเลือกสไลด์จาก thumbnail */
function setSlide(index) {
  slideIndex.value = index
  scrollToActiveThumb()
}

/* ✅ ฟังก์ชันจัดให้อยู่ตรงกลาง */
function scrollToActiveThumb() {
  const container = scrollContainer.value
  if (!container) return
  const thumbnails = container.querySelectorAll('img')
  const activeThumb = thumbnails[slideIndex.value]

  if (activeThumb) {
    // ✅ คำนวณตำแหน่งให้อยู่ตรงกลาง container เสมอ
    const containerWidth = container.clientWidth
    const thumbCenter = activeThumb.offsetLeft + activeThumb.offsetWidth / 2
    const scrollPosition = thumbCenter - containerWidth / 2

    // ✅ ป้องกัน scrollPosition < 0 (ไม่ให้เด้งซ้ายเกินไป)
    const maxScroll = container.scrollWidth - containerWidth
    const safeScroll = Math.max(0, Math.min(scrollPosition, maxScroll))

    container.scrollTo({ left: safeScroll, behavior: 'smooth' })
  }
}

</script>

<style scoped>
/* ---------- พื้นหลัง ---------- */
.block-container {
  width: 100vw;
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

.text,
.subtitle {
  position: relative;
  z-index: 2;
  color: #000;
}

.text {
  font-family: 'SacramentoRegular';
  font-size: 50px;
  font-weight: bold;
  color: #b55c00;
}

.subtitle {
  font-size: 25px;
  font-weight: 700;
}

/* ---------- การ์ด ---------- */
.portfolio-section {
  position: relative;
  padding: 20px 170px;
  background-image: url('../assets/BRB-image/BRB-project (13).jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  /* ป้องกันเลเยอร์ล้น */
  z-index: 0;
}

.portfolio-section::before {
  content: "";
  position: absolute;
  inset: 0;
  /* ครอบเต็มพื้นที่ */
  backdrop-filter: blur(8px);
  /* ✅ ทำให้พื้นหลังเบลอ */
  background-color: rgba(0, 0, 0, 0.2);
  /* ✅ เพิ่มความจาง */
  z-index: -1;
  /* อยู่หลังเนื้อหา */
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 4vw;
  justify-items: center;
}

.card {
  width: 350px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

/* ---------- Popup Modal ---------- */
.modal-overlay {
  position: fixed;
  inset: 0;
  padding-left: 50px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding-top: 10px;
}

.modal-content {
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  width: 80%;
  height: 85%;
  position: relative;
  display: flex;
  flex-direction: column;
}

.close-btn {
  position: absolute;
  top: 2px;
  right: 2px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

/* ---------- Modal Layout ---------- */
.modal-body {
  display: flex;
  flex: 1;
  gap: 30px;
  overflow: hidden;
}

.modal-left {
  flex: 1;
  width: 100%;
  text-align: left;
  padding: 20px;
  /* overflow-y: auto; */
  background-color: #fff;
}

.modal-title {
  font-size: 28px;
  font-weight: bold;
  color: #b55c00;
}

.modal-desc {
  margin: 10px 0;
  font-size: 18px;
}

.modal-detail {
  font-size: 1.1vw;
  color: #000000;
}

/* ---------- Slideshow ---------- */
.modal-right {
  flex: 1.2;
  position: relative;
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
}

.scroll-container {
  overflow-x: hidden;
  white-space: nowrap;
}

.slide {
  width: 100%;
  height: 100%;
}

.slide-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 12px;
}

.slide-count {
  position: absolute;
  bottom: 20vh;
  right: 15px;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  padding: 4px 8px;
  border-radius: 5px;
  font-size: 14px;
}

/* ✅ Thumbnail */
.thumbnail-row {
  display: flex;
  justify-content: center;
  overflow-x: auto;
  gap: 8px;
  margin-top: 15px;
}

.thumbnail-row::-webkit-scrollbar {
  height: 8px;
}

.thumbnail-row::-webkit-scrollbar-thumb {
  background: #b55c00;
  border-radius: 10px;
}

.thumbnail-row::-webkit-scrollbar-track {
  background: #f0f0f0;
}

.thumb {
  border: 2px solid transparent;
  cursor: pointer;
}

.thumb.active {
  border-color: #b55c00;
}

.thumb-image {
  width: 70px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
  opacity: 0.7;
}

.thumb.active .thumb-image,
.thumb:hover .thumb-image {
  opacity: 1;
}

.scroll-container {
  /* background-color: #2c2c2c; */
  overflow-x: auto;
  white-space: nowrap;
  padding: 10px;
  border-radius: 10px;
  width: 98%;
  scroll-behavior: smooth;
}

.scroll-container::-webkit-scrollbar {
  height: 8px;
}

.scroll-image {
  width: 200px;
  height: 130px;
  margin-right: 10px;
  border-radius: 8px;
  object-fit: cover;
  cursor: pointer;
  display: inline-block;
  transition: all 0.3s ease;
  opacity: 0.6;
  border: 3px solid transparent;
}

/* ✅ แสดง active thumbnail */
.scroll-image.active {
  opacity: 1;
  border-color: #b55c00;
  transform: scale(1.05);
}


.scroll-image:hover {
  opacity: 0.8;
}

@media only screen and (max-width: 1440px) {
  .slide-count {
    bottom: 30vh;
  }

}

@media only screen and (max-width: 820px) {
  .portfolio-section {
    padding: 50px 120px;
  }

  .block-container {
    width: 100vw;
    height: 30vh;
  }

  .slide-count {
    bottom: 15vh;
  }

  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .card {
    width: 300px;
  }

  .modal-overlay {
    padding: 20px;
    z-index: 9999;
  }

  .modal-body {
    flex-direction: column;
    align-items: center;
  }

  .modal-left {
    order: 1;
    width: 100%;
    text-align: center;
    padding: 10px;
  }

  .modal-title {
    font-size: 22px;
  }

  .modal-desc {
    font-size: 16px;
  }

  .modal-detail {
    font-size: 14px;
  }

  /* รูปใหญ่ลงมาด้านล่าง */
  .modal-right {
    order: 2;
    width: 100%;
    margin-top: 10px;
  }

  .slideshow-container {
    height: auto;
    max-height: 350px;
  }

  .slide-image {
    height: auto;
    max-height: 300px;
  }

  /* thumbnail ด้านล่าง */
  .scroll-container {
    margin-top: 10px;
    padding: 5px;
  }

  /* ปรับ layout ทั่วไป */
  .modal-content {
    width: 95%;
    height: auto;
    padding: 20px 10px;
  }

  .close-btn {
    top: 5px;
    right: 5px;
    font-size: 18px;
  }

}

@media only screen and (max-width: 480px) {
  .portfolio-section {
    padding: 30px 20px;
    margin-bottom: 50px;
  }

  .block-container {
    width: 100vw;
    height: 25vh;
    background-position: center;
  }

  .text {
    font-size: 30px;
  }

  .subtitle {
    font-size: 18px;
  }

  /* ✅ การ์ด */
  .card-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .card {
    width: 100%;
    max-width: 330px;
  }

  .card-image {
    height: 180px;
  }

  .card-title {
    font-size: 16px;
  }

  .card-desc {
    font-size: 14px;
    padding: 0 10px 10px;
  }

  /* ✅ Modal */
  .modal-overlay {
    padding: 10px;
  }

  .modal-content {
    width: 95%;
    height: auto;
    max-height: 95%;
    padding: 15px 10px;
    overflow-y: auto;
  }

  .modal-body {
    flex-direction: column;
    align-items: center;
    gap: 15px;
    overflow-y: auto;
  }

  .modal-body::-webkit-scrollbar {
    display: none;
  }

  .modal-left {
    order: 1;
    width: 100%;
    padding: 10px;
    text-align: center;
  }

  .modal-title {
    font-size: 18px;
    margin-bottom: 6px;
  }

  .modal-desc {
    font-size: 14px;
    margin-bottom: 8px;
  }

  .modal-detail {
    font-size: 13px;
    line-height: 1.4;
  }

  .modal-right {
    order: 2;
    width: 100%;
    margin-top: 10px;
  }

  /* ✅ Slide หลัก */
  .slideshow-container {
    width: 100%;
    height: auto;
    max-height: 260px;
  }

  .slide-image {
    width: 100%;
    height: auto;
    max-height: 240px;
    border-radius: 10px;
  }

  .slide-count {
    bottom: 12vh;
  }

  /* ✅ Thumbnail */
  .scroll-container {
    margin-top: 10px;
    padding: 5px;
  }

  .scroll-image {
    width: 100px;
    height: 70px;
    margin-right: 6px;
    border-radius: 6px;
    opacity: 0.7;
  }

  .scroll-image.active {
    border-color: #b55c00;
    opacity: 1;
    transform: scale(1.05);
  }

  .close-btn {
    top: 8px;
    right: 8px;
    font-size: 18px;
  }
}
</style>
