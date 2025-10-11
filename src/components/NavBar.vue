<template>
  <aside class="sidebar" :class="{ collapsed: isCollapsed }" @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <div class="sidebar-content">
      <div class="logo">
        <router-link to="/homepage">
          <img :src="ImgLogo" alt="Logo" class="logo-img" :class="{ small: isCollapsed }" />
        </router-link>
      </div>

      <ul class="nav-links">
        <li v-for="link in links" :key="link.name">
          <router-link :to="link.path" :class="{ active: isActive(link.path) }">
            <img :src="link.icon" alt="" class="icon" />
            <!-- ✅ แสดงชื่อเฉพาะตอนที่ไม่ย่อ และไม่ใช่มือถือ -->
            <span v-if="!isCollapsed && !isMobile">{{ link.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import homeIcon from '../assets/IconNavBar/home-icon-silhouette.png'
import projectIcon from '../assets/IconNavBar/IconBluePrint.png'
import aboutIcon from '../assets/IconNavBar/IconAbout.png'
import contactIcon from '../assets/IconNavBar/IconContact-us.png'
import ImgLogo from '../assets/logo/BRB-logo.png'

const route = useRoute()
const isCollapsed = ref(false) // ✅ เริ่มต้นให้ขยาย
const isMobile = ref(false)
const hasMouse = ref(true)
const isNavigating = ref(false) // ใช้ป้องกันการย่อระหว่างเปลี่ยนหน้า

const links = ref([
  { name: 'Home', path: '/homepage', icon: homeIcon },
  { name: 'Projects', path: '/projects', icon: projectIcon },
  { name: 'About Us', path: '/about', icon: aboutIcon },
  { name: 'Contact', path: '/contact', icon: contactIcon },
])
const isActive = (path) => route.path === path
// ตรวจอุปกรณ์
const checkDevice = () => {
  const width = window.innerWidth
  const pointerType = window.matchMedia('(pointer: fine)').matches

  isMobile.value = width < 768
  hasMouse.value = pointerType

  if (isMobile.value) {
    isCollapsed.value = true // มือถือเริ่มต้นให้ย่อ
  } else {
    isCollapsed.value = false // ✅ desktop เริ่มต้นให้ขยาย
  }
}

onMounted(() => {
  checkDevice()
  window.addEventListener('resize', checkDevice)
})
onUnmounted(() => {
  window.removeEventListener('resize', checkDevice)
})

// Hover เฉพาะ desktop เท่านั้น
const handleMouseEnter = () => {
  if (hasMouse.value && window.innerWidth > 768) {
    isCollapsed.value = false
  }
}

const handleMouseLeave = () => {
  if (hasMouse.value && window.innerWidth > 768 && !isNavigating.value) {
    isCollapsed.value = true
  }
}

// ✅ ขยาย sidebar ทุกครั้งเมื่อเปลี่ยนหน้า
watch(
  () => route.path,
  () => {
    isNavigating.value = true
    isCollapsed.value = false // 🔹 ให้ขยาย bar ทุกครั้งที่ route เปลี่ยน

    setTimeout(() => {
      isNavigating.value = false
    }, 600) // รอให้ transition จบ
  }
)

</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 30px;
  left: 30px;
  width: 220px;
  height: calc(100vh - 80px);
  background: rgba(255, 255, 255, 0.175);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.4);
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  z-index: 1000;
}

.sidebar.collapsed {
  width: 80px;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  transition: all 0.3s ease;
  width: 100%;
}

.logo {
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  width: 100%;
}

.logo-img {
  width: 100px;
  border-radius: 15px;
  transition: all 0.3s ease;
}

.logo-img.small {
  width: 50px;
}

.nav-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  align-items: center;
  margin: 0;
  padding: 0;
}

.nav-links li a {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  color: #000000;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 10px 15px;
  border-radius: 10px;
  gap: 12px;
  position: relative;
}

.sidebar.collapsed .nav-links li a {
  justify-content: center;
  width: 60px;
}

.icon {
  width: 24px;
  height: 24px;
}

.nav-links li a:hover {
  background: rgba(0, 0, 0, 0.15);
  transform: translateX(-3px);
}

.nav-links li a.active {
  background: rgba(255, 255, 255, 0.5);
  box-shadow: inset 3px 0 0 #ffd900;
  transition: all 0.3s ease;
}

/* 🎯 ตอน sidebar ย่อ */
.sidebar.collapsed .nav-links li a.active {
  width: 30px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: inset 3px 0 0 #ffd900;
}

/* 📱 มือถือ: แสดง icon-only */
@media only screen and (max-width: 820px) {
  .sidebar {
    width: 80px;
    height: auto;
    top: 30%;
    left: 20px;
    border-radius: 15px;
  }

  .sidebar-content {
    gap: 20px;
  }

  .logo-img {
    width: 50px;
  }

  .nav-links {
    gap: 20px;
  }

  .nav-links li a {
    justify-content: center;
    width: 60px;
  }

  .nav-links li a span {
    display: none;
    /* 🔥 ซ่อนชื่อเมนู */
  }

  .nav-links li a.active {
    width: 40px;
  }
}

@media only screen and (max-width: 480px) {
  .sidebar {
    top: auto;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    height: 70px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    transition: none;
  }

  .sidebar-content {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    gap: 10px;
    transition: none;
  }

  .sidebar.collapsed {
    width: 90%;
  }

  .logo {
    display: none;
  }

  .nav-links {
    flex-direction: row;
    gap: 15px;
    width: 100%;
    justify-content: space-around;
  }

  .nav-links li a {
    justify-content: center;
    width: auto;
    padding: 8px;
  }

  .nav-links li a span {
    display: none;
    /* ซ่อนชื่อเมนู */
  }

  .icon {
    width: 26px;
    height: 26px;
  }

  .nav-links li a.active {
    background: rgba(255, 255, 255, 0.35);
    box-shadow: inset 0 3px 0 #ffd900;
    /* เส้น active อยู่ด้านบนแทน */
  }
}
</style>
