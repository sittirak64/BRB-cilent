<template>
    <div class="block-container">
        <div class="text">
            <span style="font-size: 25px; color: #000;">We are</span>
            <span> Baan Rim Bueng </span>
        </div>
        <div class="subtitle">
            <p>We offer a comprehensive construction contracting service, all in one place.</p>
            <p>We oversee everything from design and construction to delivery and occupancy. Our architects </p>
            <p>and engineers support our clients from start to finish.</p>
        </div>
    </div>
    <div class="background-block">
        <!-- ด้านซ้าย: ข้อความ -->
        <div class="text-section">
            <h2 class="title">Background of <br /><span>Baan Rim Bueng</span></h2>
            <div class="content">
                <h3>In 2003</h3>
                <p>
                    We started by being a subcontractor company working for Land and Houses Company
                    and Chuan Chuen Village. We were hired by the direct owner of the project,
                    covering interior design and house and office renovation, processed by our
                    architects and engineers.
                </p>
                <h3>In 2008</h3>
                <p>
                    After that, we registered a limited company named ‘KP Interior Design and
                    Construction Co., Ltd on April 21, 2008. The budget for our work starts from
                    2-15 million baht. Moreover, we use quality equipment and machines for
                    construction which results in successful, high-quality, stable, safe, standard,
                    correct and beautiful construction.
                </p>
            </div>
        </div>

        <!-- ด้านขวา: รูป -->
        <div class="image-section">
            <!-- รูปใหญ่ -->
            <div class="main-image">
                <img :src="currentImage" alt="Main Image" class="main-img" />
            </div>

            <!-- แถวรูปเล็ก -->
            <div class="thumbnail-list">
                <img v-for="(img, index) in images" :key="index" :src="img" class="thumbnail"
                    :class="{ active: currentImage === img }" @click="changeImage(img)" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const images = [
    new URL('../assets/BRB-image/BRB-project (0).jpg', import.meta.url).href,
    new URL('../assets/BRB-image/BRB-project (3).jpg', import.meta.url).href,
    new URL('../assets/BRB-image/BRB-project (4).jpg', import.meta.url).href,
    new URL('../assets/BRB-image/BRB-project (8).jpg', import.meta.url).href,
]

const currentImage = ref(images[0])

function changeImage(img) {
    currentImage.value = img
}
</script>
<style scoped>
.block-container {
    width: 100vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* พื้นหลังเป็นรูป */
    background-image: url('../assets/Ex.home/Ex1.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    /* ใส่เลเยอร์โปร่งแสงทับเพื่อให้ดูเบลอหรือซีดลง */
    position: relative;
    overflow: hidden;
}

/* เพิ่ม overlay ซ้อนทับ */
.block-container::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(255, 255, 255, 0.6);
    /* สีขาวโปร่งแสงครอบรูป */
    backdrop-filter: blur(7px);
    /* ทำให้ภาพพื้นหลังเบลอ */
    z-index: 1;
}

/* ให้ข้อความอยู่เหนือ overlay */
.text,
.subtitle {
    position: relative;
    z-index: 2;
    color: #000;
    /* ปรับสีให้ชัดกับพื้นหลัง */
}

.text {
    font-family: 'SacramentoRegular';
    font-size: 70px;
    font-weight: bold;
    color: #b55c00;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.subtitle {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    margin-top: -10px;
}

.subtitle p+p {
    margin-top: -8px;
}

.background-block {
    position: relative;
    /* ✅ เพิ่มบรรทัดนี้ */
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    background-image: url('../assets/BRB-image/BRB-project (13).jpg');
    background-size: cover;
    background-position: center;
    padding: 2rem 2.8px;
    z-index: 0;
}

.background-block::before {
    content: "";
    position: absolute;
    inset: 0;
    backdrop-filter: blur(15px);
    background-color: rgba(0, 0, 0, 0.2);
    z-index: -1;
}

.text-section {
    padding-left: 130px;
    display: inline;
    /* flex: 1; */
    max-width: 50%;

}

.text-section .title {
    font-size: 2rem;
    font-weight: 700;
    color: #ffffff;
}

.text-section span {
    color: #ffffff;
}

.text-section .content {
    margin-top: 1.5rem;
    
}

.text-section h3 {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    color: #ffffff;
}

.text-section p {
    margin-top: 0.5rem;
    line-height: 1.6;
    color: #ffffff;
}

.image-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main-image {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.main-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.4s ease;
}

.thumbnail-list {
    display: flex;
    gap: 10px;
    margin-top: 12px;
    flex-wrap: wrap;
    justify-content: center;
}

.thumbnail {
    width: 100px;
    height: 70px;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s;
}

.thumbnail:hover,
.thumbnail.active {
    opacity: 1;
    border: 2px solid #b55c00;
}

@media only screen and (max-width: 768px) {
    .block-container {
        width: 100vw;
        height: 25vh;
    }

    .text {
        font-size: 40px;
    }

    .subtitle {
        font-size: 15px;
    }

    .text-section .title {
        font-size: 1.5rem;
    }

    .text-section h3 {
        font-size: 1rem;
    }

    .text-section p {
        font-size: 15px;
    }

    .background-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .text-section {
        padding-left: 10vw;
        max-width: 100%;
    }

    .main-image {
        height: 200px;

    }

    .thumbnail {
        height: 50px;
    }
}

@media only screen and (max-width: 480px) {
    .block-container {
        height: 20vh;
    }

    .text {
        font-size: 10vw;
    }

    .subtitle {
        font-size: 10px;
    }

    .background-block {
        display: flex;
        flex-direction: column;
    }

    .text-section {
        padding-left: 20px;
        max-width: 100%;
    }

    .thumbnail-list {
        padding-bottom: 7vh;
    }
}
</style>