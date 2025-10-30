import './style.css';

const products = [
  {
    id: 1,
    name: "Agua Blu",
    category: "Nutrición",
    price: "",
    image: "public/img/1.jpeg",
    rating: 5,
    description: "El agua es un elemento vital para el organismo. Todas las células y órganos dependen de ella para su correcto funcionamiento.",
    features: [
      "Reciclable",
      "Favorece la hidratación del organismo.",
      "Este producto no es medicamento.",
      "Económico",
      "Diseño Limpio",
      "Botella 600ml"
    ]
  },
  {
    id: 2,
    name: "Aloe Beta",
    category: "Digestivo",
    price: "",
    image: "public/img/2.jpeg",
    rating: 3,
    description: "Bebida sabor piña, contiene gel de sábila (aloe vera) y vitaminas E. Disfrutalo frio o a temperatura ambiente 2 a 3 veces al día.",
    features: [
      "Dentro de los componentes del gel de sabila (aloe vera) se encuentran fibras solubles, que pueden colaborar en el bienestar digestivo.",
      "Sabor Piña",
      "Vitaminas A, C y E",
      "Saludable",
      "Bote 960 ml"
    ]
  },
  {
    id: 3,
    name: "Cafezzino Plus",
    category: "Nutrición",
    price: "",
    image: "public/img/3.jpeg",
    rating: 5,
    description: "Producto nutricional con café colombiano, extracto de café verde, cromo y fibra. Ayuda a utilizar la grasa almacenada como fuente de energía.",
    features: [
      "Carton Reciclable",
      "Favorece la nutrición y cuidado saludable del peso.",
      "Económico",
      "Este producto no es medicamento.",
      "Caja c/30 sachets 150g",
    ]
  },
  {
    id: 4,
    name: "Flu-Y",
    category: "Nutrición",
    price: "",
    image: "public/img/4.jpeg",
    rating: 4,
    description: "Suplemento alimenticio, que contiene extracto de naranja dulce y magnesio. Ayuda a fortalecer las defensas naturales del organismo.",
    features: [
      "Bote con 60 cápsulas",
      "El extracto de naranja dulce puede promover un estado de relajación en el organismo.",
      "Por su parte el magnesio es un mineral que puede participar en ciertas actividades que forman parte del funcionamiento del sistema nervioso y muscular.",
      "Económico",
    ]
  },
  {
    id: 5,
    name: "Ego Plant",
    category: "Digestivo",
    price: "",
    image: "public/img/5.jpeg",
    rating: 5,
    description: "Suplemento alimenticio, sabor herbal, que contiene vitaminas B12, D y E. Con extracto de fruto del monje y estevia, endulzantes de origen natural.",
    features: [
      "Botella, contenido neto 200 mililitros",
      "Alto contenido de frutas, verduras, cereales integrales",
      "Este producto no es un medicamento.",
      "Bajo en calorías",
      "Económico",
    ]
  },
  {
    id: 6,
    name: "Fiber´N Plus",
    category: "Digestivo",
    price: "",
    image: "public/img/7.jpeg",
    rating: 5,
    description: "¿Quieres complementar tu aporte de fibra dutante el día? Transita hacia tu bienestar con Fiber N´Plus y disfruta de una mezcla única de fibras, probióticos y prebióticos.",
    features: [
      "Fibra prebiótica: inulina de agave.",
      "Mezcla de fibras.",
      "Probióticos: lactobacillus acidophilus & paracasei.",
      "Vitaminas: C y D.",
      "Minerales.",
      "Caja con 30 sobres. Contenido neto 360 g."
    ]
  },
  {
    id: 7,
    name: "OMNILIFE IQU",
    category: "Nutrición",
    price: "",
    image: "public/img/8.jpeg",
    rating: 5,
    description: "Suplemento alimenticio, sabores de origen natural a jengibre y mandarina, que contiene pirroloquinolina quinona (PQQ), coenzima Q10, vitamina D3 y extracto de café verde. ",
    features: [
      "Disponible en paquete de 6 latas, cada una contiene 355 mililitros",
      "Con endulzantes de origen natural",
      " extracto de fruto de monje y glucósidos de esteviol",
      "Una bebida lista para el consumo, sin calorías, ni azúcares"
    ]
  },
  {
    id: 8,
    name: "Ego",
    category: "Digestivo",
    price: "",
    image: "public/img/9.jpeg",
    rating: 5,
    description: "Sabor frutas del bosque. Contiene extracto de regaliz, colina, glicina, vitaminas del complejo B, tiamina B1, niacina B3, piridoxina B6, B12 y Vitamina C.",
    features: [
      "6 pack - Lata 355 ml",
      "vitaminas del complejo B",
      "Económico",
      "Bajo en calorías"
    ]
  },
  {
    id: 9,
    name: "Estop Plus",
    category: "Nutrición",
    price: "",
    image: "public/img/10.jpeg",
    rating: 5,
    description: "Producto nutricional sabor nuez vainilla, con almendra, fitoesteroles, extracto de cera de caña y vitamina E, que colaboran al cuidado del corazón.",
    features: [
      "Carton reciclable",
      "Caja c/30 sobres 450g",
      "Favorece el equilibrio y mantenimiento saludable de tu nutrición.",
      "Este producto no es medicamento."
    ]
  },
  {
    id: 10,
    name: "OMNILIFE Kolina",
    category: "Digestivo",
    price: "",
    image: "public/img/11.jpeg",
    rating: 4,
    description: "Suplemento alimenticio sabor toronja que contiene extracto de coco y piña, además de vitamina C, con extracto de fruto del monje y estevia, endulzantes de origen natural.",
    features: [
      "Botellín 200 ml",
      "Plastico reciclable",
      "Económico",
      "Sabor toronja",
    ]
  },
  {
    id: 11,
    name: "Kenyanz",
    category: "Nutrición",
    price: "",
    image: "public/img/12.jpeg",
    rating: 5,
    description: "Contiene Colina, glicina, vitaminas del complejo B: Tiamina B1, riboflavina B2, niacina B3, ácido pantoténico B5, piridoxina B6, biotina y B12, vitaminas C y E, además de minerales. Con extracto de fruto del monje y estevia endulzantes de origen natural que no aportan calorías.",
    features: [
      "Cartón reciclable",
      "Caja con 30 sobres, contiene 240 g.",
      "Económico",
      "vitaminas c y e",
    ]
  },
  {
    id: 12,
    name: "Power Maker",
    category: "deportes",
    price: "",
    image: "public/img/13.jpeg",
    rating: 4,
    description: "Suplemento alimenticio sabor a naranja.",
    features: [
      "Carton reciclable",
      "Caja con 30 sobres",
      "contenido neto 300 gramos",
      "Económico",
   
    ]
  }
];

const carouselData = [
  {
    image: "public/img/14.jpeg",
    title: "Nueva Colección",
    subtitle: "Tecnología de última generación"
  },
  {
    image: "public/img/15.jpg",
    title: "Estilo y Confort",
    subtitle: "Para tu hogar ideal"
  },
  {
    image: "public/img/16.jpg",
    title: "Actívate",
    subtitle: "Productos deportivos premium"
  }
];

const collageImages = [
  "public/img/17.jpg",
  "public/img/18.jpg",
  "public/img/19.jpg",
  "public/img/20.jpg",
  "public/img/21.jpg",
  "public/img/22.jpg",
  "public/img/23.jpeg"
];

let currentSlide = 0;
let filteredProducts = [...products];

function initCarousel() {
  const track = document.getElementById('carouselTrack');
  const indicators = document.getElementById('carouselIndicators');

  carouselData.forEach((item, index) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-item';
    slide.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="carousel-item-content">
        <h3>${item.title}</h3>
        <p>${item.subtitle}</p>
      </div>
    `;
    track.appendChild(slide);

    const indicator = document.createElement('div');
    indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
    indicator.addEventListener('click', () => goToSlide(index));
    indicators.appendChild(indicator);
  });

  document.getElementById('prevBtn').addEventListener('click', prevSlide);
  document.getElementById('nextBtn').addEventListener('click', nextSlide);

  setInterval(nextSlide, 5000);
}

function goToSlide(index) {
  const track = document.getElementById('carouselTrack');
  const indicators = document.querySelectorAll('.indicator');

  currentSlide = index;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  indicators.forEach((ind, i) => {
    ind.classList.toggle('active', i === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % carouselData.length;
  goToSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + carouselData.length) % carouselData.length;
  goToSlide(currentSlide);
}

function renderProducts(productsToRender) {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';

  productsToRender.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-category">${getCategoryName(product.category)}</p>
        <p class="product-price">${product.price}</p>
        <div class="product-rating">
          ${generateStars(product.rating)}
        </div>
      </div>
    `;

    card.addEventListener('click', () => openProductModal(product));
    grid.appendChild(card);
  });
}

function getCategoryName(category) {
  const categories = {
    'electronica': 'Electrónica',
    'hogar': 'Hogar',
    'moda': 'Moda',
    'deportes': 'Deportes'
  };
  return categories[category] || category;
}

function generateStars(rating) {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars += '<i class="fas fa-star star"></i>';
    } else {
      stars += '<i class="far fa-star star"></i>';
    }
  }
  return stars;
}

function openProductModal(product) {
  const modal = document.getElementById('productModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalRating = document.getElementById('modalRating');
  const modalPrice = document.getElementById('modalPrice');
  const modalDescription = document.getElementById('modalDescription');
  const modalFeatures = document.getElementById('modalFeatures');
  const whatsappBtn = document.getElementById('whatsappBtn');

  modalImage.src = product.image;
  modalImage.alt = product.name;
  modalTitle.textContent = product.name;
  modalRating.innerHTML = generateStars(product.rating);
  modalPrice.textContent = product.price;
  modalDescription.textContent = product.description;

  modalFeatures.innerHTML = '';
  product.features.forEach(feature => {
    const featureBlock = document.createElement('div');
    featureBlock.className = 'feature-block';
    featureBlock.textContent = feature;
    modalFeatures.appendChild(featureBlock);
  });

  whatsappBtn.onclick = () => {
    const message = encodeURIComponent(`Hola! Estoy interesado en ${product.name} (${product.price})`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
    showToast('Abriendo WhatsApp...', 'success');
  };

  modal.classList.add('active');
  showToast('Detalles del producto cargados', 'info');
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  modal.classList.remove('active');
}

function initCategories() {
  const categoryBtns = document.querySelectorAll('.category-btn');

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.category;
      filterProducts(category);
      showToast(`Mostrando: ${btn.textContent}`, 'info');
    });
  });
}

function filterProducts(category) {
  if (category === 'todos') {
    filteredProducts = [...products];
  } else {
    filteredProducts = products.filter(p => p.category === category);
  }

  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  if (searchTerm) {
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm)
    );
  }

  renderProducts(filteredProducts);
}

function initSearch() {
  const searchInput = document.getElementById('searchInput');
  let searchTimeout;

  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      const searchTerm = e.target.value.toLowerCase();

      if (searchTerm === '') {
        const activeCategory = document.querySelector('.category-btn.active').dataset.category;
        filterProducts(activeCategory);
        return;
      }

      filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        getCategoryName(p.category).toLowerCase().includes(searchTerm)
      );

      renderProducts(filteredProducts);
      showToast(`${filteredProducts.length} productos encontrados`, 'info');

      if (filteredProducts.length === 1) {
        setTimeout(() => {
          openProductModal(filteredProducts[0]);
        }, 500);
      }
    }, 300);
  });

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const searchTerm = e.target.value.toLowerCase();

      const exactMatch = products.find(p =>
        p.name.toLowerCase() === searchTerm
      );

      if (exactMatch) {
        openProductModal(exactMatch);
        return;
      }

      const matchingProducts = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        getCategoryName(p.category).toLowerCase().includes(searchTerm)
      );

      if (matchingProducts.length === 1) {
        openProductModal(matchingProducts[0]);
      } else if (matchingProducts.length > 1) {
        document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}

function initCollage() {
  const collage = document.getElementById('collage');

  collageImages.forEach(image => {
    const item = document.createElement('div');
    item.className = 'collage-item';
    item.innerHTML = `<img src="${image}" alt="Galería Bisao">`;
    collage.appendChild(item);
  });
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');

  const icons = {
    success: 'fa-check-circle',
    error: 'fa-exclamation-circle',
    info: 'fa-info-circle',
    warning: 'fa-exclamation-triangle'
  };

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="fas ${icons[type]} toast-icon"></i>
    <span class="toast-message">${message}</span>
    <button class="toast-close">
      <i class="fas fa-times"></i>
    </button>
  `;

  const closeBtn = toast.querySelector('.toast-close');
  closeBtn.addEventListener('click', () => {
    toast.remove();
  });

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function initModal() {
  const modal = document.getElementById('productModal');
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');

  overlay.addEventListener('click', closeProductModal);
  closeBtn.addEventListener('click', closeProductModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProductModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeProductModal();
    }
  });
}

function init() {
  initCarousel();
  renderProducts(products);
  initCategories();
  initSearch();
  initCollage();
  initModal();

  showToast('Bienvenido a Bisao', 'success');
}

document.addEventListener('DOMContentLoaded', init);
