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
              @click="setSlide(index)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const portfolios = [
  {
    images: [
      new URL('../assets/Ex.home/Ex1.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex2.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex3.jpg', import.meta.url).href,
    ],
    title: 'บ้านโมเดิร์น',
    status: 'in progress',
    desc: 'บ้านสไตล์โมเดิร์น 2 ชั้น',
    detail: 'รายละเอียดเพิ่มเติม: บ้านนี้ใช้โครงสร้างเหล็ก ผนังปูนเปลือย และมีพื้นที่ใช้สอย 200 ตร.ม.'
  },
  {
    images: [
      new URL('../assets/Ex.home/Ex4.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex3.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex2.jpg', import.meta.url).href,
    ],
    title: 'บ้านสวน',
    desc: 'บ้านพักตากอากาศ',
    status: 'Completed',
    detail: 'บ้านไม้ทรงไทยร่วมสมัย พร้อมสวนรอบบ้านสำหรับพักผ่อน'
  },
  {
    images: [
      new URL('../assets/Ex.home/Ex4.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex3.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex2.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex1.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex2.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex3.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex3.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex3.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex3.jpg', import.meta.url).href,

    ],
    title: 'บ้านสวน',
    desc: 'บ้านพักตากอากาศ',
    status: 'Completed',
    detail: 'บ้านไม้ทรงไทยร่วมสมัย พร้อมสวนรอบบ้านสำหรับพักผ่อน'
  },
  {
    images: [
      new URL('../assets/Ex.home/Ex4.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex3.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex2.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex1.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex2.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex3.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex3.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex3.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex3.jpg', import.meta.url).href,

    ],
    title: 'บ้านสวน',
    desc: 'บ้านพักตากอากาศ',
    status: 'Completed',
    detail: 'บ้านไม้ทรงไทยร่วมสมัย พร้อมสวนรอบบ้านสำหรับพักผ่อน'
  },
  {
    images: [
      new URL('../assets/Ex.home/Ex4.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex3.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex2.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex1.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex2.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex3.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex3.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex3.jpg', import.meta.url).href,
      new URL('../assets/Ex.home/Ex3.jpg', import.meta.url).href,

    ],
    title: 'บ้านสวน',
    desc: 'บ้านพักตากอากาศ',
    status: 'Completed',
    detail: 'บ้านไม้ทรงไทยร่วมสมัย พร้อมสวนรอบบ้านสำหรับพักผ่อน'
  },
]

const showModal = ref(false)
const selectedItem = ref({})
const slideIndex = ref(0)
const scrollContainer = ref(null)
let autoScrollInterval = null

function openModal(item) {
  selectedItem.value = item
  slideIndex.value = 0
  showModal.value = true
  setTimeout(startAutoScroll, 500) // เริ่ม auto scroll
}

function closeModal() {
  showModal.value = false
  stopAutoScroll()
}

function changeSlide(n) {
  const total = selectedItem.value.images.length
  slideIndex.value = (slideIndex.value + n + total) % total
}

function setSlide(index) {
  slideIndex.value = index
}

// ✅ Auto Scroll Logic
function startAutoScroll() {
  const container = scrollContainer.value
  if (!container) return
  stopAutoScroll() // ป้องกันซ้ำ

  autoScrollInterval = setInterval(() => {
    const maxScrollLeft = container.scrollWidth - container.clientWidth
    // ถ้า scroll ถึงสุดแล้วให้กลับไปจุดเริ่ม
    if (container.scrollLeft >= maxScrollLeft - 10) {
      container.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      container.scrollBy({ left: 150, behavior: 'smooth' })
    }
  }, 2000)
}

function stopAutoScroll() {
  if (autoScrollInterval) clearInterval(autoScrollInterval)
}

onBeforeUnmount(() => {
  stopAutoScroll()
})
</script>


<style scoped>
/* ---------- พื้นหลัง ---------- */
.block-container {
  width: 99vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('../assets/Ex.home/Ex1.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
}

.block-container::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(7px);
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
  padding: 50px 140px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
}

.card {
  width: 300px;
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
  /* overflow: hidden; */
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
  font-size: 14px;
  color: #666;
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

.slideshow-container {
  position: relative;
  width: 100%;
  height: 400px;
  /* ✅ กำหนดกรอบความสูงคงที่ */
  border-radius: 12px;
  overflow: hidden;
  background: #ffffff;
  padding-bottom: 50px;
  /* สีพื้นหลังถ้ารูปโหลดไม่ทัน */
}

.slide {
  width: 100%;
  height: 100%;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.slide-count {
  position: absolute;
  bottom: 60px;
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
}

.scroll-image:hover {
  opacity: 0.8;
}
</style>
