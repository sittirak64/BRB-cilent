<template>
    <div class="block-container">
        <div class="text">
            <span> Baan Rim Bueng </span>
        </div>
        <div class="subtitle">
            <p> Portfolios </p>
        </div>
    </div>
    <div>
        <div class="portfolio-section">
            <!-- <h2 class="section-title"></h2> -->
            <div class="card-grid">
                <div class="card" v-for="(item, index) in portfolios" :key="index">
                    <img :src="item.image" alt="Portfolio" class="card-image" />
                    <h3 class="card-title">{{ item.title }}</h3>
                    <p class="card-desc">{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const portfolios = [
    { image: new URL('../assets/Ex.home/Ex1.jpg', import.meta.url).href, title: 'บ้านโมเดิร์น', desc: 'บ้านสไตล์โมเดิร์น 2 ชั้น' },
    { image: new URL('../assets/Ex.home/Ex2.jpg', import.meta.url).href, title: 'บ้านสวน', desc: 'บ้านพักตากอากาศ' },
    { image: new URL('../assets/Ex.home/Ex3.jpg', import.meta.url).href, title: 'บ้านหรู', desc: 'ออกแบบร่วมสมัย' },
    { image: new URL('../assets/Ex.home/Ex4.jpg', import.meta.url).href, title: 'บ้านริมบึง', desc: 'บ้านสไตล์รีสอร์ท' },
    { image: new URL('../assets/Ex.home/Ex1.jpg', import.meta.url).href, title: 'บ้านพักตากอากาศ', desc: 'วิวธรรมชาติ' },
    { image: new URL('../assets/Ex.home/Ex2.jpg', import.meta.url).href, title: 'บ้านโมเดิร์น', desc: 'เรียบหรูมีสไตล์' },
    { image: new URL('../assets/Ex.home/Ex3.jpg', import.meta.url).href, title: 'บ้านชั้นเดียว', desc: 'สำหรับครอบครัวเล็ก' },
    { image: new URL('../assets/Ex.home/Ex4.jpg', import.meta.url).href, title: 'บ้านร่วมสมัย', desc: 'ผสมผสานวัฒนธรรม' },
]
</script>

<style scoped>
.block-container {
    width: 99vw;
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
    font-size: 50px;
    font-weight: bold ;
    color: #b55c00;
}

.subtitle {
    font-size: 25px;
    font-weight: 700;
    margin-top: -10px;
}

.portfolio-section {
    padding-left: 120px;
    padding-top: 50px;
    /* padding: 40px 80px; */
    /* background-color: #f8f8f8; */
    /* background-image: url('../assets/Ex.home/Ex1.jpg'); */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.section-title {
    text-align: center;
    font-size: 36px;
    margin-bottom: 40px;
    font-weight: bold;
}

.card-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* ✅ 4 การ์ดต่อแถว */
    gap: 20px;
}

.card {
    width: 300px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-align: center;
    transition: transform 0.2s ease-in-out;
}

.card:hover {
    transform: translateY(-5px);
}

.card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-title {
    font-size: 20px;
    margin: 10px 0 5px;
    font-weight: 600;
}

.card-desc {
    font-size: 14px;
    /* color: #666; */
    /* padding: 10px 20px; */
}
</style>