// portfolios.js
const origamiImages = Object.values(
  import.meta.glob('../assets/BRB-image/Origami/*.jpg', { eager: true, import: 'default' })
).sort((a, b) => {
  const numA = parseInt(a.match(/\((\d+)\)/)?.[1] || 0);
  const numB = parseInt(b.match(/\((\d+)\)/)?.[1] || 0);
  return numA - numB;
});

const lakeHouseImage = Object.values(
  import.meta.glob('../assets/BRB-image/Lake-House/*.{png,jpg}', { eager: true, import: 'default' })
).sort()

const ContemporaryTwoStorey = Object.values(
  import.meta.glob('../assets/BRB-image/Contemporary-Two-Storey/*.png', { eager: true, import: 'default' })
).sort()

const BuiltInRungrat  = Object.values(
  import.meta.glob('../assets/BRB-image/Built-in-K.Rungrat/*.{png,jpg}', { eager: true, import: 'default' })
).sort((a, b) => {
  const numA = parseInt(a.match(/\((\d+)\)/)?.[1] || 0);
  const numB = parseInt(b.match(/\((\d+)\)/)?.[1] || 0);
  return numA - numB;
});

const renovateByran  = Object.values(
  import.meta.glob('../assets/BRB-image/Bryan/*.{png,jpg}', { eager: true, import: 'default' })
).sort((a, b) => {
  const numA = parseInt(a.match(/\((\d+)\)/)?.[1] || 0);
  const numB = parseInt(b.match(/\((\d+)\)/)?.[1] || 0);
  return numA - numB;
});

export  const portfolios = [
  {
    imageProfile :new URL('../assets/BRB-image/Origami/BRB-project (2).jpg', import.meta.url).href,
    images: origamiImages,
    title: 'Origami Cottage',
    status: 'Completed',
    desc: 'Contemporary Minimal',
    detail: 'One of the projects we hold in the highest regard and take great pride in.The design concept began with sketches and model studies to explore the form and function of the space. Inspiration came from the art of Japanese paper folding, which informed the lines, proportions, and perspectives of the cottage, giving it a simple yet clearly articulated rhythm, and ultimately inspiring the name “Origami Cottage.”The interior is designed to feel open and naturally connected. The living hall integrates the lounge, kitchen, and dining area in an open-plan layout, ensuring continuity of use and visual flow. A small bedroom was added under the high roof above the garage, repurposing a space that was originally intended as an additional lounge, adding depth and variety without increasing the overall footprint.The cottage includes three bedrooms, three bathrooms, a garage, and a swimming pool. Overall, the home conveys a sense of simplicity and liveliness, with natural light that shifts throughout the day, enhancing the spatial experience.With the freedom granted by the owner, combined with their attention to detail throughout the process, the result is a project that embodies both enjoyment and warmth, while maintaining a sense of order and refinement throughout the home.'
  },
  {
    imageProfile :new URL('../assets/BRB-image/Lake-House/Lake-House (66).png', import.meta.url).href,
    images: lakeHouseImage,
    title: 'LAKE HOUSE',
    desc: 'Modern Luxury House',
    status: 'In Progress ',
    updateOn :'Updated on October 08, 2025 (70%)',
    detail: 'This residence showcases a Modern Luxury architectural style, combining contemporary minimalism with sophisticated design elements. The exterior features clean lines, expansive glass panels, and a harmonious mix of premium materials such as natural stone, wood, and metal finishes — creating a sense of elegance and timeless beauty. The interior design emphasizes openness and natural light, with spacious living areas that seamlessly connect indoor and outdoor spaces. Every detail, from the custom-built furniture to the refined lighting and textures, reflects a perfect balance between comfort, functionality, and luxury. This home offers not just a place to live, but a refined lifestyle experience tailored for modern living.'
  },
  {
    imageProfile :new URL('../assets/BRB-image/Contemporary-Two-Storey/Renovate Two-Storey Residence (1).png', import.meta.url).href,
    images: ContemporaryTwoStorey,
    title: 'Contemporary Two-Storey',
    desc: 'Renovate Two-Storey Residence (3D Model)',
    status: 'In Progress',
    updateOn :'Updated in Coming soon',
    detail: 'This project is a renovation of a two-storey reinforced concrete residence, located in Phuket, Thailand. The design concept focuses on blending modern aesthetics with functional living, enhancing both the visual appeal and comfort of the home. The renovation introduces a clean and contemporary style, emphasizing open spaces, natural lighting, and the use of refined materials that complement the tropical surroundings. Every element — from the façade to the interior detailing — has been carefully reimagined to create a harmonious balance between modern design and everyday practicality. The result is a warm, elegant home that reflects a refined modern lifestyle while maintaining its structural integrity and local character.'
  },
  {
    imageProfile :new URL('../assets/BRB-image/Built-in-K.Rungrat/Project (8).png', import.meta.url).href,
    images: BuiltInRungrat,
    title: 'Built-in',
    desc: 'Built in Modern Contemporary ',
    status: 'In Progress',
    updateOn :'Updated on October 14, 2025 (70%)',
    detail: 'A perfect blend of functionality and timeless elegance.The Modern Contemporary built-in design emphasizes clean lines, practical layouts, and warm, balanced tones. Each built-in piece is thoughtfully designed to fit perfectly within the space, creating a seamless harmony between form and function.This style combines the simplicity of modern design with the comfort and sophistication of contemporary living — offering a sense of luxury that feels both stylish and welcoming.Using materials such as natural wood, matte finishes, and soft lighting, the overall atmosphere feels cozy yet refined — ideal for bedrooms, living areas, and workspaces.'
  },
  {
    imageProfile :new URL('../assets/BRB-image//Bryan/Byran (37).png', import.meta.url).href,
    images: renovateByran ,
    title: 'Contemporary Two-Storey',
    desc: 'Renovate Two-Storey Residence (3D Model)',
    updateOn :'Updated in Coming soon',
    status: 'In Progress',
    detail: 'This project is a renovation of a two-storey reinforced concrete residence, located in Phuket, Thailand. The design concept focuses on blending modern aesthetics with functional living, enhancing both the visual appeal and comfort of the home. The renovation introduces a clean and contemporary style, emphasizing open spaces, natural lighting, and the use of refined materials that complement the tropical surroundings. Every element — from the façade to the interior detailing — has been carefully reimagined to create a harmonious balance between modern design and everyday practicality. The result is a warm, elegant home that reflects a refined modern lifestyle while maintaining its structural integrity and local character.'
  },
  {
    imageProfile :  new URL('../assets/logo/BRB-logo.png', import.meta.url).href,
    images: [
      new URL('../assets/logo/BRB-logo.png', import.meta.url).href,
    ],
    title: 'Coming Soon',
    desc: '',
    status: '',
    detail: ''
  },
  {
    imageProfile :  new URL('../assets/logo/BRB-logo.png', import.meta.url).href,
    images: [
      new URL('../assets/logo/BRB-logo.png', import.meta.url).href,
    ],
    title: 'Coming Soon',
    desc: '',
    status: '',
    detail: ''
  },
  {
    imageProfile :  new URL('../assets/logo/BRB-logo.png', import.meta.url).href,
    images: [
      new URL('../assets/logo/BRB-logo.png', import.meta.url).href,
    ],
    title: 'Coming Soon',
    desc: '',
    status: '',
    detail: ''
  },
  {
    imageProfile :  new URL('../assets/logo/BRB-logo.png', import.meta.url).href,
    images: [
      new URL('../assets/logo/BRB-logo.png', import.meta.url).href,
    ],
    title: 'Coming Soon',
    desc: '',
    status: '',
    detail: ''
  },
]