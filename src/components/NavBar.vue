<template>
  <aside 
    class="sidebar" 
    :class="{ collapsed: isCollapsed }" 
    @mouseenter="isCollapsed = false" 
    @mouseleave="isCollapsed = true"
  >
    <div class="sidebar-content">
      <!-- โลโก้อยู่บนสุดตลอด -->
      <div class="logo">
        <router-link to="/homepage">
          <img 
            :src="ImgLogo" 
            alt="Logo" 
            class="logo-img" 
            :class="{ small: isCollapsed }"
          />
        </router-link>
      </div>

      <ul class="nav-links">
        <li v-for="link in links" :key="link.name">
          <router-link :to="link.path" :class="{ active: isActive(link.path) }">
            <img :src="link.icon" alt="" class="icon" />
            <span v-if="!isCollapsed">{{ link.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import ImgLogo from '../assets/logo/BRB-logo1.png'

// 📌 นำเข้าไอคอน
import homeIcon from '../assets/IconNavBar/IconHome.png'
import projectIcon from '../assets/IconNavBar/IconBluePrint.png'
import aboutIcon from '../assets/IconNavBar/IconAbout.png'
import contactIcon from '../assets/IconNavBar/IconContact-us.png'

const route = useRoute()
const isCollapsed = ref(false)

const links = ref([
  { name: 'Home', path: '/homepage', icon: homeIcon },
  { name: 'Projects', path: '/projects', icon: projectIcon },
  { name: 'About Us', path: '/about', icon: aboutIcon },
  { name: 'Contact', path: '/contact', icon: contactIcon },
])

const isActive = (path) => route.path === path
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
  flex-direction: column; /* ✅ แยกแนวตั้ง */
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

</style>
