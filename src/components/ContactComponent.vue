<template>
    <div class="block-container">
        <div class="text">
            <span style="font-size: 30px; color: #000;">Baan Rim Bueng</span>
            <span> Contact </span>
        </div>
        <div class="subtitle">
            <p>We’re pleased to advise, contact us</p>
        </div>
    </div>
    <div class="background-block">
        <!-- ด้านซ้าย: ข้อความ -->
        <div class="text-section">
            <h2 class="title">Contact of <br /><span>Baan Rim Bueng</span></h2>

            <div class="content">
                <h3>Operating Hours</h3>
                <p>Mon - Sat opens at 8.30 - 17.30</p>
                <p>Closed On Sunday</p>

                <!-- Contact List -->
                <div class="contact-item">
                    <img :src="CallIcon" alt="Call Icon" class="icon" />
                    <span class="label">Call :</span>
                    <p class="value">09xx-xxx-xxx</p>
                </div>

                <div class="contact-item">
                    <img :src="LineIcon" alt="Line Icon" class="icon" />
                    <span class="label">Line :</span>
                    <p class="value">@0000xxxxx</p>
                </div>

                <div class="contact-item">
                    <img :src="GmailIcon" alt="Gmail Icon" class="icon" />
                    <span class="label">Email :</span>
                    <p class="value">sxxxxxxxxx@email.com</p>
                </div>

                <div class="contact-item">
                    <img :src="FacebookIcon" alt="Facebook Icon" class="icon" />
                    <span class="label">Facebook :</span>
                    <p class="value">xxxxxxxxxxxxxxxxxx</p>
                </div>
            </div>
        </div>

        <!-- ด้านขวา: Image Grid -->
        <div class="image-section">
            <div class="row">
                <div class="column" v-for="(colImages, colIndex) in columns" :key="colIndex">
                    <img v-for="(img, index) in colImages" :key="index" :src="img" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import FacebookIcon from "../assets/IconContact/facebook.png";
import GmailIcon from "../assets/IconContact/gmail.png";
import CallIcon from "../assets/IconContact/telephone-call.png";
import LineIcon from "../assets/IconContact/line.png";

const images = ref([
    new URL("../assets/Ex.home/Ex1.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex2.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex3.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex4.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex1.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex2.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex3.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex4.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex1.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex3.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex2.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex3.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex4.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex1.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex1.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex3.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex2.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex4.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex2.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex4.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex4.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex1.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex2.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex3.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex4.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex1.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex2.jpg", import.meta.url).href,
    new URL("../assets/Ex.home/Ex3.jpg", import.meta.url).href,
    // ...อื่น ๆ ตามเดิม
]);

const columns = computed(() => {
    const colCount = 4;
    const cols = Array.from({ length: colCount }, () => []);
    images.value.forEach((img, index) => {
        cols[index % colCount].push(img);
    });
    return cols;
});
</script>

<style scoped>
.block-container {
    top: -25px;
    width: 99vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url("../assets/Ex.home/Ex1.jpg");
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
    font-family: "SacramentoRegular";
    font-size: 80px;
    font-weight: bold;
    color: #b55c00;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.subtitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    margin-top: -10px;
}

.background-block {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    padding: 2rem 0.1rem;
}

.text-section {
    padding-left: 150px;
    max-width: 50%;
}

.text-section .title {
    font-size: 2rem;
    font-weight: 700;
    color: #000;
}

.text-section span {
    color: #b55c00;
}

.text-section .content {
    margin-top: 1.5rem;
}

.text-section h3 {
    color: #b55c00;
    font-size: 1.5rem;
    margin-top: 1.5rem;
}

.text-section p {
    font-size: 1.2rem;
    color: #000;
}

/* ✅ Contact Item ปรับให้อยู่ในบรรทัดเดียว */
.contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 1rem;
}

.icon {
    width: 25px;
    height: 25px;
}

.label {
    font-size: 2rem;
    color: #b55c00;
    font-weight: 600;
}

.value {
    font-size: 1.5rem;
    color: #000;
}

.image-section {
    flex: 1;
    max-height: 800px;
    max-width: 800px;
    overflow-y: auto;
    padding-right: 4px;
}

.row {
    display: flex;
    gap: 8px;
}

.column {
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;
}

.column img {
    width: 100%;
    margin-top: 8px;
    border-radius: 8px;
}

@media only screen and (max-width: 820px) {
    .text-section {
        padding-left: 110px;
    }

    .block-container {
        height: 30vh;
    }

    .text-section .title {
        font-size: 1.5rem;
    }

    .text-section h3 {
        font-size: 1.1rem;
    }

    .label {
        font-size: 1.2rem;
    }

    .value {
        font-size: 1rem;
    }

    .text-section p {
        font-size: 1rem;
    }

    .column img {
        height: 50px;
    }
}
</style>
