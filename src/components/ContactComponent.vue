<template>
    <div class="block-container">
        <div class="text">
            <span style="font-size: 30px; color: #fff;">Baan Rim Bueng</span>
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
import { computed } from "vue";

// ไอคอน
import FacebookIcon from "../assets/IconContact/facebook.png";
import GmailIcon from "../assets/IconContact/gmail.png";
import CallIcon from "../assets/IconContact/telephone-call.png";
import LineIcon from "../assets/IconContact/line.png";

// ดึงภาพทั้งหมด
const images = Object.values(
  import.meta.glob('../assets/BRB-image/Origami/*.jpg', { eager: true, import: 'default' })
).sort()

// แบ่งเป็น 4 คอลัมน์
const columns = computed(() => {
  const colCount = 4;
  const cols = Array.from({ length: colCount }, () => []);
  
  images.forEach((img, index) => {
    cols[index % colCount].push(img);
  });
  
  return cols;
});

</script>


<style scoped>
.block-container {
    width: 100vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('../assets/BRB-image/Origami/BRB-project (13).jpg');
    background-size: cover;
    background-position: center;
    position: relative;
}

.block-container::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(15px);
    z-index: 1;
}

.text,
.subtitle {
    position: relative;
    z-index: 2;
    color: #fff;
}

.text {
    font-family: "SacramentoRegular";
    font-size: 80px;
    font-weight: bold;
    color: #ff8000;
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
    position: relative;
    /* ✅ เพิ่มบรรทัดนี้ */
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    background-image: url('../assets/BRB-image/Origami/BRB-project (13).jpg');
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
    padding-left: 150px;
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
     color: #ffffff;
}

.text-section h3 {
    color: #ffff;
    font-size: 1.5rem;
    margin-top: 1.5rem;
}

.text-section p {
    font-size: 1.2rem;
    color: #ffff;
}

/* ✅ Contact Item ปรับให้อยู่ในบรรทัดเดียว */
.contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 1rem;
}

.icon {
    /* width: 1vw; */
    height: 3vh;
}

.label {
    font-size: 2rem;
    color: #ff8000;
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
@media only screen and (max-width: 480px) {
  .block-container {
    height: 30vh;
  }
  .background-block {
    height: 70vh;
  }

  .text {
    font-size: 15vw;
  }

  .subtitle {
    font-size: 4vw;
  }

  /* ✅ ซ่อนส่วนภาพ */
  .image-section {
    display: none;
  }

  /* ✅ ให้ข้อความกินเต็มจอ */
  .background-block {
    flex-direction: column;
    padding: 1rem 1.5rem;
  }

  .text-section {
    width: 100%;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
  }

  .text-section .title {
    font-size: 1.6rem;
    text-align: center;
  }

  .text-section h3 {
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  .text-section p {
    font-size: 1rem;
    line-height: 1.6;
    text-align: left;
  }

  .contact-item {
    flex-wrap: wrap; /* ถ้าข้อความยาวจะขึ้นบรรทัดใหม่ */
  }

  .icon {
    width: 18px;
    height: 18px;
  }

  .label {
    font-size: 1.2rem;
  }

  .value {
    font-size: 1rem;
  }
}
@media only screen and (max-width: 380px) {
    .background-block {
    height: 90vh;
  }

}

</style>
