document.addEventListener("DOMContentLoaded", () => {
  const products = {
    "apex-aura": {
      id: "apex-aura",
      name: "APEX AURA",
      series: "ELITE PERFORMANCE SERIES",
      price: 220,
      image: "assets/images/newArrivalshoe.svg",
      description:
        "Experience premium comfort and performance. APEX AURA is designed with advanced cushioning, breathable materials and excellent grip for everyday athletic performance.",
    },

    "velocity-v1": {
      id: "velocity-v1",
      name: "VELOCITY V1",
      series: "SPEED PERFORMANCE SERIES",
      price: 180,
      image: "assets/images/limitedEditionshoe.svg",
      description:
        "Designed for speed and agility. VELOCITY V1 combines lightweight construction, responsive cushioning and a modern athletic design.",
    },

    "ascend-x": {
      id: "ascend-x",
      name: "ASCEND X",
      series: "PREMIUM PERFORMANCE SERIES",
      price: 250,
      image: "assets/images/blackyellowshoe.svg",
      description:
        "Built for exceptional performance. ASCEND X delivers premium comfort, durable construction and advanced traction for every challenge.",
    },

    "heritage-x90": {
      id: "heritage-x90",
      name: "HERITAGE X-90",
      series: "HERITAGE COLLECTION",
      price: 210,
      image: "assets/images/like-shoes-1.jpg",
      description:
        "A timeless footwear design combining classic heritage styling with modern comfort. Built with premium materials, durable construction and excellent everyday support.",
    },

    "pulse-react": {
      id: "pulse-react",
      name: "PULSE REACT",
      series: "PERFORMANCE SERIES",
      price: 195,
      image: "assets/images/like-shoes-2.jpg",
      description:
        "Experience responsive cushioning and lightweight performance. PULSE REACT is designed for active movement, superior comfort and excellent grip.",
    },

    "aura-cloud": {
      id: "aura-cloud",
      name: "AURA CLOUD",
      series: "COMFORT COLLECTION",
      price: 240,
      image: "assets/images/like-shoes-3.jpg",
      description:
        "Discover exceptional comfort with AURA CLOUD. Its premium construction and soft cushioning deliver a smooth and comfortable experience throughout the day.",
    },

    "apex-terrain-v2": {
      id: "apex-terrain-v2",
      name: "APEX TERRAIN V2",
      series: "PRO TRAIL SERIES",
      price: 225,
      image: "assets/images/like-shoes-4.jpg",
      description:
        "Engineered for the most demanding landscapes. The Terrain V2 features an ultra-responsive Nitro-Core midsole and an aggressive Apex-Grip outsole for unparalleled traction on any surface.",
    },
  };

  const urlParams = new URLSearchParams(window.location.search);
  const productId = new URLSearchParams(window.location.search).get("id");
  const product = products[productId];

  // GET HTML ELEMENTS

  const productImage = document.getElementById("product-image");
  const productName = document.getElementById("product-name");
  const productSeries = document.getElementById("product-series");
  const productPrice = document.getElementById("product-price");
  const productDescription = document.getElementById("product-description");
  const sizeButtons = document.querySelectorAll(".size-btn");
  const addToBagButton = document.getElementById("add-to-bag");
  const cartCount = document.getElementById("header-cart-count");

  if (!product) {
    document.querySelector(".main-container").innerHTML =
      "<h2>Product Not Found</h2>";
    return;
  }
  productImage.src = product.image;
  productImage.alt = product.name;

  productName.textContent = product.name;
  productSeries.textContent = product.series;
  productPrice.textContent = "$" + product.price.toFixed(2);
  productDescription.textContent = product.description;
  document.title = product.name + " | APEX ELITE";

  let selectedSize = "10";

  sizeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      sizeButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      selectedSize = button.textContent.trim();
    });
  });

  let cart = JSON.parse(localStorage.getItem("apexEliteCart")) || [];
  function updateCartCount() {
    let totalItems = cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    cartCount.textContent = totalItems;
  }

  updateCartCount();

  addToBagButton.addEventListener("click", () => {
    const existingItem = cart.find(
      (item) => item.id === product.id && item.size === selectedSize,
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: selectedSize,
        quantity: 1,
        saved: false,
      });
    }

    localStorage.setItem("apexEliteCart", JSON.stringify(cart));

    window.location.href = "shoppingCart.html";
  });
  document.getElementById("find-store").addEventListener("click", () => {
    alert("Store locator coming soon!");
  });
});
