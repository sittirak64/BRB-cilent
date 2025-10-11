// portfolios.js
const origamiImages = Object.values(
  import.meta.glob('../assets/BRB-image/*.jpg', { eager: true, import: 'default' })
).sort()
export  const portfolios = [
  {
    images: origamiImages,
    title: 'Origami Cottage',
    status: 'Completed',
    desc: 'Contemporary Minimal',
    detail: 'One of the projects we hold in the highest regard and take great pride in.The design concept began with sketches and model studies to explore the form and function of the space. Inspiration came from the art of Japanese paper folding, which informed the lines, proportions, and perspectives of the cottage, giving it a simple yet clearly articulated rhythm, and ultimately inspiring the name “Origami Cottage.”The interior is designed to feel open and naturally connected. The living hall integrates the lounge, kitchen, and dining area in an open-plan layout, ensuring continuity of use and visual flow. A small bedroom was added under the high roof above the garage, repurposing a space that was originally intended as an additional lounge, adding depth and variety without increasing the overall footprint.The cottage includes three bedrooms, three bathrooms, a garage, and a swimming pool. Overall, the home conveys a sense of simplicity and liveliness, with natural light that shifts throughout the day, enhancing the spatial experience.With the freedom granted by the owner, combined with their attention to detail throughout the process, the result is a project that embodies both enjoyment and warmth, while maintaining a sense of order and refinement throughout the home.'
  },
  {
    images: [
      new URL('../assets/logo/BRB-logo.png', import.meta.url).href,
    ],
    title: 'Comming Soon',
    desc: '',
    status: '',
    detail: ''
  },
  {
    images: [
      new URL('../assets/logo/BRB-logo.png', import.meta.url).href,
    ],
    title: 'Comming Soon',
    desc: '',
    status: '',
    detail: ''
  },
  {
    images: [
      new URL('../assets/logo/BRB-logo.png', import.meta.url).href,
    ],
    title: 'Comming Soon',
    desc: '',
    status: '',
    detail: ''
  },
  {
    images: [
      new URL('../assets/logo/BRB-logo.png', import.meta.url).href,
    ],
    title: 'Comming Soon',
    desc: '',
    status: '',
    detail: ''
  },
]