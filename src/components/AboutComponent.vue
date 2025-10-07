<template>
    <div class="block-container">
        <div class="text">
            <span style="font-size: 25px;">We are</span>
            <span> Baan Rim Bueng </span>
        </div>
        <div class="subtitle">
            <p>We offer a comprehensive construction contracting service, all in one place.</p>
            <p>We oversee everything from design and construction to delivery and occupancy. Our architects </p>
            <p>and engineers support our clients from start to finish.</p>
        </div>
    </div>
</template>
<script setup>

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
    color:#b55c00;
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
    margin-top:-8px ;
}
</style>