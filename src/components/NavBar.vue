<template>
  <aside class="sidebar">
    <div class="sidebar-content">
      <div class="logo">
        <router-link to="/homepage">
          <img :src="ImgLogo" alt="Logo" class="logo-img" />
        </router-link>
      </div>

      <ul class="nav-links">
        <li v-for="link in links" :key="link.name">
          <router-link :to="link.path" :class="{ active: isActive(link.path) }">
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import ImgLogo from '../assets/logo/BRB-logo.jpg'

const route = useRoute()

const links = ref([
  { name: 'Home', path: '/homepage' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
])

const isActive = (path) => route.path === path
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 30px; 
  left: 30px; 
  width: 220px;
  height: calc(100vh - 60px);

  /* ✅ พื้นหลังโปร่งแสงแบบสว่างนวล */
  background: rgba(255, 255, 255, 0.175); /* ขาวโปร่งนิดๆ ดูสว่าง */
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);

  border-radius: 20px; 
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.4);

  z-index: 1000;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.logo-img {
  width:100px;
  border-radius: 15px;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.logo-img:hover {
  transform: scale(1.05);
  filter: brightness(1.2);
}

.nav-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 50px;
  padding-right: 22%;
  width: 100%;
}

.nav-links li a {
  display: block;
  width: 80%;
  text-align: center;
  color: #000000;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 10px 0;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.nav-links li a:hover {
  background: rgba(0, 0, 0, 0.15);
  color: #000000;
  transform: translateX(-5px);
}

.nav-links li a.active {
  background: rgba(255, 255, 255, 0.5);
  color: #000000;
  box-shadow: inset 3px 0 0 #ffd900;
}


</style>
