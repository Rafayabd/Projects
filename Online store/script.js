// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  });

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
  }
}

// Add to Cart
const addToCartButtons = document.querySelectorAll(".add-to-cart");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

addToCartButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const product = button.closest(".product-item");
    const name = product.querySelector("h3").textContent;
    const price = product.querySelector("p").textContent;
    const img = product.querySelector("img").src;

    cart.push({ name, price, img });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`${name} added to cart!`);
  });
});

// Load Cart Items on cart.html
const cartItemsContainer = document.getElementById("cart-items");
if (cartItemsContainer) {
  renderCart();
}

function renderCart() {
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    document.getElementById("cart-total").textContent = "Total: $0";
    return;
  }

  cartItemsContainer.innerHTML = cart.map((item, i) => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}">
      <p><strong>${item.name}</strong> - ${item.price}</p>
      <button class="remove-btn" data-index="${i}">Remove</button>
    </div>
  `).join("");

  // Total
  const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace("$", "")), 0);
  document.getElementById("cart-total").textContent = `Total: $${total}`;

  // Remove functionality
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart(); // reload ki jagah direct render
    });
  });
}



// Quick View Modal
const quickViewButtons = document.querySelectorAll(".quick-view");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeModal = document.getElementById("close-modal");

quickViewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.closest(".product-item");
    const name = product.querySelector("h3").textContent;
    const price = product.querySelector("p").textContent;
    const img = product.querySelector("img").src;

    modalBody.innerHTML = `
      <img src="${img}" alt="${name}" style="width:100%;border-radius:8px;">
      <h3>${name}</h3>
      <p>${price}</p>
      <button class="add-to-cart">Add to Cart</button>
    `;
    modal.style.display = "flex";
  });
});

if (closeModal) {
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

// Price Filter
const priceRange = document.getElementById("price-range");
const priceVal = document.getElementById("price-val");
if (priceRange) {
  priceRange.addEventListener("input", () => {
    priceVal.textContent = priceRange.value;
    document.querySelectorAll(".product-item").forEach(product => {
      const price = parseInt(product.dataset.price);
      product.style.display = price <= priceRange.value ? "block" : "none";
    });
  });
}

// Search Filter
const searchInput = document.getElementById("search");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll(".product-item").forEach(product => {
      const name = product.querySelector("h3").textContent.toLowerCase();
      product.style.display = name.includes(query) ? "block" : "none";
    });
  });
}

// Update cart count on load
updateCartCount();
