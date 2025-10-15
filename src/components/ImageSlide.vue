<template>
    <div class="slide-container">
        <div class="slide-wrapper" :key="currentIndex" :class="{ fade: isFading }">
            <img :src="currentSlide.image" alt="Slide Image" class="slide-image" />
            <div class="overlay" :class="{ show: !isFading }">
                <h1 class="title">{{ currentSlide.title }}</h1>
                <p class="subtitle">{{ currentSlide.subtitle }}</p>
                <button class="cta-button" @click="Contact">Contact Us</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { slides } from  '../data/imageSlide'

const currentIndex = ref(0)
const currentSlide = computed(() => slides[currentIndex.value])
const isFading = ref(false)

const router = useRouter()

const Contact = () => {
    router.push('/contact')
}

onMounted(() => {
    setInterval(() => {
        isFading.value = true
        setTimeout(() => {
            currentIndex.value = (currentIndex.value + 1) % slides.length
            isFading.value = false
        }, 800)
    }, 5000)
})
</script>

<style scoped>
.slide-container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.slide-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}

.slide-image {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.8s ease-in-out, transform 6s ease-in-out;
}

.slide-wrapper.fade .slide-image {
    opacity: 0;
    transform: scale(1.1);
}

.overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    text-align: center;
    color: white;
    background: rgba(0, 0, 0, 0.35);
    padding: 40px 15px;
    border-radius: 20px;
    opacity: 0;
    transition: opacity 1s ease, transform 1s ease;
}

.overlay.show {
    opacity: 1;
    transform: translate(-50%, -50%);
}

/* แอนิเมชันข้อความ */
.title {
    /* font-family: 'Prompt', sans-serif; */
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 10px;
    animation: slideDown 1.2s ease forwards;
}

.subtitle {
    font-size: 1.5rem;
    margin-bottom: 30px;
    animation: fadeUp 1.5s ease forwards;
}

.cta-button {
    background-color: #ff7f50;
    color: white;
    border: none;
    padding: 12px 32px;
    font-size: 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    opacity: 0;
    animation: floatUp 1.8s ease forwards;
}

.cta-button:hover {
    background-color: #ff5722;
}

/* Keyframes */
@keyframes slideDown {
    0% {
        opacity: 0;
        transform: translateY(-30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeUp {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes floatUp {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.background {
    background-color: black;
    width: 100%;
    height: 100vh;
}
@media only screen and (max-width: 1366px) {
  .title {
    font-size: 3vw;
  }
}
@media only screen and (max-width: 768px) {

    .overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 60%;
    }

    .title {
        font-size: 2rem;
    }

    .subtitle {
        font-size: 1.2rem;
        margin-bottom: 30px;
    }

}

@media only screen and (max-width: 480px) {
    .title {
        font-size: 4vw;
    }

    .subtitle {
        font-size: 3vw;
    }

    .cta-button {
        width: 60%;
        font-size: 3vw;
    }
}
</style>
