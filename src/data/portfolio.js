// portfolios.js
const origamiImages = Object.values(
  import.meta.glob("../assets/BRB-image/Origami/*.jpg", {
    eager: true,
    import: "default",
  })
).sort((a, b) => {
  const numA = parseInt(a.match(/\((\d+)\)/)?.[1] || 0);
  const numB = parseInt(b.match(/\((\d+)\)/)?.[1] || 0);
  return numA - numB;
});

const lakeHouseImage = Object.values(
  import.meta.glob("../assets/BRB-image/Lake-House/*.{png,jpg}", {
    eager: true,
    import: "default",
  })
).sort();

const ContemporaryTwoStorey = Object.values(
  import.meta.glob("../assets/BRB-image/Contemporary-Two-Storey/*.png", {
    eager: true,
    import: "default",
  })
).sort();

const BuiltInRungrat = Object.values(
  import.meta.glob("../assets/BRB-image/Built-in-K.Rungrat/*.{png,jpg}", {
    eager: true,
    import: "default",
  })
).sort((a, b) => {
  const numA = parseInt(a.match(/\((\d+)\)/)?.[1] || 0);
  const numB = parseInt(b.match(/\((\d+)\)/)?.[1] || 0);
  return numA - numB;
});

const renovateByran = Object.values(
  import.meta.glob("../assets/BRB-image/Bryan/*.{png,jpg}", {
    eager: true,
    import: "default",
  })
).sort((a, b) => {
  const numA = parseInt(a.match(/\((\d+)\)/)?.[1] || 0);
  const numB = parseInt(b.match(/\((\d+)\)/)?.[1] || 0);
  return numA - numB;
});

export const portfolios = [
  {
    imageProfile: new URL(
      "../assets/BRB-image/Origami/BRB-project (2).jpg",
      import.meta.url
    ).href,
    images: origamiImages,
    translations: {
      en: {
        title: "Origami Cottage",
        status: "Completed",
        desc: "Contemporary Minimal",
        detail:
          "This is one of our most cherished projects. The concept began with sketches and model studies inspired by Japanese origami — reflected in the lines, proportions, and rhythms of the cottage. The design promotes openness and natural connection, featuring an airy living hall that integrates the lounge, kitchen, and dining area. A small bedroom was cleverly added above the garage without expanding the footprint. The house includes three bedrooms, three bathrooms, a garage, and a swimming pool — exuding simplicity, liveliness, and balance through natural light. With the owner's trust and attention to detail, the result is a project that feels both joyful and refined.",
      },
      th: {
        title: "ออริกามิ คอทเทจ (Origami Cottage)",
        status: "สำเร็จโครงการ",
        desc: "สไตล์ร่วมสมัยมินิมอล",
        detail:
          "หนึ่งในผลงานที่เราภูมิใจที่สุด จุดเริ่มต้นของแนวคิดการออกแบบเกิดจากแบบร่างและโมเดลต้นแบบ โดยได้รับแรงบันดาลใจจากศิลปะการพับกระดาษแบบญี่ปุ่น (Origami) ซึ่งถ่ายทอดออกมาในเส้นสาย สัดส่วน และจังหวะของอาคาร ภายในออกแบบให้โปร่งโล่ง เชื่อมต่อกับธรรมชาติอย่างเป็นอิสระ พื้นที่โถงกลางรวมฟังก์ชันนั่งเล่น ครัว และรับประทานอาหารไว้ในพื้นที่เดียวกัน เพิ่มห้องนอนเล็กบริเวณใต้หลังคาเหนือโรงรถโดยไม่ขยายพื้นที่อาคาร ทำให้บ้านดูมีมิติและสมดุลยิ่งขึ้น บ้านหลังนี้ประกอบด้วย 3 ห้องนอน 3 ห้องน้ำ โรงจอดรถ และสระว่ายน้ำ ถ่ายทอดความเรียบง่าย อบอุ่น และมีชีวิตชีวา ด้วยแสงธรรมชาติที่เปลี่ยนไปในแต่ละช่วงวัน เจ้าของบ้านเปิดโอกาสให้เราออกแบบอย่างอิสระ จึงได้ผลงานที่เต็มไปด้วยความสุข ความละเอียด และความประณีตในทุกมุมมองของบ้านนี้",
      },
    },
  },
  {
    imageProfile: new URL(
      "../assets/BRB-image/Lake-House/Lake-House (66).png",
      import.meta.url
    ).href,
    images: lakeHouseImage,
    translations: {
      en: {
        title: "Lake House",
        status: "In Progress (70%)",
        desc: "Modern Luxury House",
        updateOn: "Updated on October 08, 2025",
        detail:
          "This residence showcases a Modern Luxury style — a fusion of elegance, simplicity, and contemporary design. The architecture features clean lines, large glass panels, and a refined mix of materials like stone, wood, and metal. The interior emphasizes openness and natural light, offering a sense of seamless flow between indoor and outdoor spaces. Every element reflects a balance of comfort, function, and sophistication — providing a lifestyle that’s both modern and timeless.",
      },
      th: {
        title: "เลค เฮาส์ (Lake House)",
        status: "ระหว่างดำเนินการ (70%)",
        desc: "บ้านหรูสไตล์โมเดิร์น",
        updateOn: "อัปเดตเมื่อ 8 ตุลาคม 2025",
        detail:
          "บ้านพักอาศัยหลังนี้นำเสนอความหรูหราในแบบ Modern Luxury ที่ผสมผสานความเรียบง่ายร่วมสมัยเข้ากับความสง่างามเหนือกาลเวลา โดดเด่นด้วยเส้นสายที่คมชัด ช่องกระจกขนาดใหญ่ และวัสดุคุณภาพสูง เช่น หินธรรมชาติ ไม้ และโลหะ ภายในเน้นความโปร่งสบาย เชื่อมโยงพื้นที่ภายในและภายนอกอย่างลงตัว ทุกองค์ประกอบตั้งแต่เฟอร์นิเจอร์ ไปจนถึงแสงไฟ ล้วนออกแบบอย่างพิถีพิถันเพื่อสร้างสมดุลระหว่างความสะดวกสบาย ฟังก์ชัน และความหรูหรา",
      },
    },
  },
  {
    imageProfile: new URL(
      "../assets/BRB-image/Contemporary-Two-Storey/Renovate Two-Storey Residence (1).png",
      import.meta.url
    ).href,
    images: ContemporaryTwoStorey,
    translations: {
      en: {
        title: "Contemporary Two-Storey",
        desc: "Renovate Two-Storey Residence (3D Model)",
        status: "In Progress",
        updateOn: "Coming Soon",
        detail:
          "A renovation project for a two-storey reinforced concrete home in Phuket. The concept blends modern aesthetics with functional living, enhancing both beauty and comfort. The design highlights openness, natural lighting, and materials that harmonize with the tropical environment, creating a refined yet welcoming modern home.",
      },
      th: {
        title: "เรโนเวต บ้านสองชั้นร่วมสมัย",
        desc: "แบบจำลอง 3D ของโครงการปรับปรุงบ้านสองชั้น",
        status: "ระหว่างดำเนินการ",
        updateOn: "เร็วๆ นี้",
        detail:
          "โครงการรีโนเวตบ้านพักอาศัยคอนกรีตเสริมเหล็กสองชั้น จังหวัดภูเก็ต แนวคิดการออกแบบมุ่งเน้นความสวยงามแบบร่วมสมัยควบคู่กับฟังก์ชันการใช้งานที่ตอบโจทย์ เพิ่มความโปร่งโล่งและแสงธรรมชาติ พร้อมเลือกใช้วัสดุที่เข้ากับบรรยากาศเขตร้อน ผลลัพธ์คือบ้านที่ดูทันสมัย อบอุ่น และกลมกลืนกับสภาพแวดล้อม",
      },
    },
  },
  {
    imageProfile: new URL(
      "../assets/BRB-image/Built-in-K.Rungrat/Project (8).png",
      import.meta.url
    ).href,
    images: BuiltInRungrat,
    translations: {
      en: {
        title: "Built-in Design",
        desc: "Modern Contemporary Built-in",
        status: "In Progress (70%)",
        updateOn: "Updated on October 14, 2025",
        detail:
          "A blend of function and elegance. The built-in design uses clean lines, balanced tones, and smart spatial arrangements to create harmony between form and function. Combining modern simplicity with warm, refined comfort, it offers timeless sophistication perfect for living rooms, bedrooms, and workspaces.",
      },
      th: {
        title: "งานบิลท์อิน สไตล์โมเดิร์นคอนเทมโพรารี่",
        desc: "บิลท์อินร่วมสมัยที่ลงตัว",
        status: "ระหว่างดำเนินการ (70%)",
        updateOn: "อัปเดตเมื่อ 14 ตุลาคม 2025",
        detail:
          "การผสมผสานอย่างลงตัวระหว่างฟังก์ชันและความสวยงาม การออกแบบบิลท์อินเน้นเส้นสายที่เรียบง่าย โทนสีอบอุ่น และการจัดสรรพื้นที่ใช้งานอย่างชาญฉลาด ผสานความเรียบหรูแบบโมเดิร์นเข้ากับความอบอุ่นร่วมสมัย เหมาะกับห้องนอน ห้องนั่งเล่น และพื้นที่ทำงานอย่างลงตัว",
      },
    },
  },
  {
    imageProfile: new URL(
      "../assets/BRB-image/Bryan/Byran (37).png",
      import.meta.url
    ).href,
    images: renovateByran,
    translations: {
      en: {
        title: "Bryan Residence",
        desc: "Renovate Two-Storey House (3D Model)",
        status: "In Progress",
        updateOn: "Coming Soon",
        detail:
          "A two-storey home renovation focusing on modern aesthetics and comfort. The design enhances natural light, openness, and harmony with the tropical surroundings for a cozy, elegant living experience.",
      },
      th: {
        title: "โครงการรีโนเวตบ้านสองชั้น ไบรอัน",
        desc: "แบบจำลอง 3D ของโครงการรีโนเวตบ้านสองชั้น",
        status: "ระหว่างดำเนินการ",
        updateOn: "เร็วๆ นี้",
        detail:
          "โครงการรีโนเวตบ้านสองชั้นที่เน้นความเรียบหรูแบบร่วมสมัย เพิ่มความโปร่งโล่งและแสงธรรมชาติ พร้อมบรรยากาศอบอุ่นและกลมกลืนกับธรรมชาติรอบข้าง เพื่อสร้างบ้านที่ทั้งสวยงามและน่าอยู่",
      },
    },
  },
  {
    imageProfile: new URL("../assets/logo/BRB-logo.png", import.meta.url).href,
    images: [new URL("../assets/logo/BRB-logo.png", import.meta.url).href],
    translations: {
      en: { title: "Coming Soon", desc: "", status: "", detail: "" },
      th: { title: "เร็ว ๆ นี้", desc: "", status: "", detail: "" },
    },
  },
];
