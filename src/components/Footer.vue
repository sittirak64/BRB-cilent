<template>
    <footer class="footer-section">
        <div class="footer-content">
            <h2 class="footer-title">
                We offer a complimentary consultation service.
                <span class="underline"></span>
            </h2>
            <p>For more information, please contact : </p>
            <p>Tel : 09xx-xxx-xxx</p>
            <p>Gmail :........................   Line </p>
            <button class="consult-button" @click="Contact">Consultation request</button>
        </div>
        <div class="footer-image"></div>
    </footer>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const Contact = () => {
    router.push('/contact')
}
</script>
<style scoped>
.footer-section {
    padding-bottom: 5px;
    position: relative;
    display: flex;
    width: 100%;
    height: 300px;
    overflow: hidden;
}

.footer-content {
    padding-left: 130px;
    background-color: #2f2f2f;
    color: white;
    flex: 1;
    /* padding: 40px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
}

.footer-title {
    font-size: 28px;
    font-weight: bold;
    position: relative;
    display: inline-block;
    margin-bottom: 5px;
}

.footer-content h2+p {
    margin-top: 4px;
}

.footer-content p+p {
    margin-top: 4px;
    /* 🔹 ระยะห่างระหว่าง p กับ p */
}

/* ✅ เส้นใต้แบบอนิเมชัน */
.footer-title .underline {
    position: absolute; 
    left: 0;
    bottom: -5px;
    width: 0%;
    height: 4px;
    background-color: #fff;
    border-radius: 2px;
    animation: underlineGrow 2s ease forwards;
}

@keyframes underlineGrow {
    from {
        width: 0%;
    }

    to {
        width: 60%;
    }
}

.consult-button {
    margin-top: 20px;
    padding: 12px 30px;
    background-color: #a30000;
    border: none;
    color: white;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
    width: fit-content;
    transition: transform 0.3s ease, background 0.3s ease;
}

.consult-button:hover {
    transform: scale(1.05);
    background-color: #d10000;
}


@media only screen and (max-width: 820px) {
   .footer-title {
    font-size: 3.5vw;
   } 
    .footer-content {
        padding-left: 15px;
    }
}

@media only screen and (max-width: 480px) {
    .footer-section {
        display: none;
    }
    .footer-content {
        padding-left: 15px;
        clip-path: none;
        
    }
    .footer-title {
        font-size: 4vw;
    }
}
</style>
