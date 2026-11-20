document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.getElementById("cart-products");
  const subtotalElement = document.getElementById("subtotal");
  const shippingElement = document.getElementById("shipping");
  const taxElement = document.getElementById("tax");
  const grandTotalElement = document.getElementById("grand-total");

  const cartCountElement = document.getElementById("cart-count");
  const headerCartCount = document.getElementById("header-cart-count");

  const couponInput = document.getElementById("coupon-code");
  const couponMessage = document.getElementById("coupon-message");
  const cartMessage = document.getElementById("cart-message");

  let cartItems = JSON.parse(localStorage.getItem("apexEliteCart")) || [];
  let discount = 0;
  const taxRate = 0.0824;
  const validCoupons = {
    APEX10: 0.1,
  };
  function money(amount) {
    return "$" + amount.toFixed(2);
  }

  function saveCart() {
    localStorage.setItem("apexEliteCart", JSON.stringify(cartItems));
  }

  function renderCart() {
    productsContainer.innerHTML = "";

    if (cartItems.length === 0) {
      productsContainer.innerHTML = `
                <div class="empty-cart">
                    <h2>Your cart is empty</h2>
                    <p>Add your favourite shoes to your bag.</p>
                </div>
            `;
    }

    cartItems.forEach((item) => {
      const product = document.createElement("div");
      product.className = "cart-item";
      product.innerHTML = `
                <div class="cart-item-image">
                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >
                </div>
                <div class="cart-item-info">
                    <div class="item-topline">
                        <p class="item-name">
                            ${item.name}
                        </p>
                        <span class="item-price">
                            ${money(item.price)}
                        </span>
                    </div>
                    <p class="item-variant">
                        APEX ELITE FOOTWEAR
                    </p>
                    <div class="item-controls">
                        <div class="control-group">
                            <label>SIZE (US)</label>
                            <select
                                class="size-select"
                                data-id="${item.id}"
                            >
                                ${[
                                  "8.0",
                                  "8.5",
                                  "9.0",
                                  "9.5",
                                  "10.0",
                                  "10.5",
                                  "11.0",
                                  "11.5",
                                  "12.0",
                                ]
                                  .map(
                                    (size) => `
                                    <option
                                        value="${size}"
                                        ${item.size === size ? "selected" : ""}
                                    >
                                        ${size}
                                    </option>
                                `,
                                  )
                                  .join("")}
                            </select>
                        </div>
                        <div class="control-group">
                            <label>QUANTITY</label>
                            <div class="quantity-control">
                                <button
                                    data-action="decrease"
                                    data-id="${item.id}"
                                >−</button>
                                <span>${item.quantity}</span>
                                <button
                                    data-action="increase"
                                    data-id="${item.id}"
                                >+</button>
                            </div>
                        </div>
                    </div>
                    <div class="item-actions">
                        <button
                            data-action="remove"
                            data-id="${item.id}"
                        >
                          <img src="assets/images/bin.png" alt="">  Remove
                        </button>

                        <button
                            data-action="save"
                            data-id="${item.id}"
                        >
                            <img src="assets/images/SAVE.png" alt=""> ${item.saved ? "Saved for later" : "Save for later"}
                        </button>

                    </div>

                </div>

            `;

      productsContainer.appendChild(product);
    });

    updateTotals();
  }
  function updateTotals() {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );

    const discountedAmount = subtotal * discount;
    const taxableAmount = subtotal - discountedAmount;
    const tax = taxableAmount * taxRate;
    const shipping = 0;
    const grandTotal = taxableAmount + tax + shipping;
    const totalItems = cartItems.reduce(
      (total, item) => total + item.quantity,
      0,
    );

    subtotalElement.textContent = money(subtotal);
    shippingElement.textContent = "FREE";
    taxElement.textContent = money(tax);
    grandTotalElement.textContent = money(grandTotal);
    cartCountElement.textContent = totalItems;
    if (headerCartCount) {
      headerCartCount.textContent = totalItems;
    }
    document.getElementById("checkout-button").disabled =
      cartItems.length === 0;
  }
  productsContainer.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");

    if (!button) return;

    const id = Number(button.dataset.id);

    const item = cartItems.find((product) => product.id === id);

    if (!item) return;

    const action = button.dataset.action;

    if (action === "increase") {
      item.quantity++;
    } else if (action === "decrease") {
      item.quantity = Math.max(1, item.quantity - 1);
    } else if (action === "remove") {
      cartItems = cartItems.filter((product) => product.id !== id);
    } else if (action === "save") {
      item.saved = !item.saved;

      cartMessage.textContent = item.saved
        ? item.name + " saved for later."
        : item.name + " moved back to cart.";
    }

    saveCart();

    renderCart();
  });

  productsContainer.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");

    if (!button) return;

    const id = button.dataset.id;

    const item = cartItems.find((product) => String(product.id) === String(id));

    if (!item) return;

    switch (button.dataset.action) {
      case "increase":
        item.quantity++;
        break;

      case "decrease":
        if (item.quantity > 1) {
          item.quantity--;
        }
        break;

      case "remove":
        cartItems = cartItems.filter(
          (product) => String(product.id) !== String(id),
        );
        break;

      case "save":
        item.saved = !item.saved;

        cartMessage.textContent = item.saved
          ? `${item.name} saved for later.`
          : `${item.name} moved back to your cart.`;

        break;
    }

    saveCart();
    renderCart();
  });
  document.getElementById("apply-coupon").addEventListener("click", () => {
    const code = couponInput.value.trim().toUpperCase();

    if (validCoupons[code]) {
      discount = validCoupons[code];

      couponMessage.textContent = "10% discount applied successfully.";

      couponMessage.style.color = "#8fca91";
    } else {
      discount = 0;

      couponMessage.textContent = "Invalid promo code. Try APEX10.";

      couponMessage.style.color = "#e58b8b";
    }

    updateTotals();
  });

  document.getElementById("checkout-button").addEventListener("click", () => {
    cartMessage.textContent = "Checkout is currently a demo.";
  });
  document.getElementById("continue-shopping").addEventListener("click", () => {
    window.location.href = "index.html";
  });
  const cards = document.getElementById("like-cards-section");

  document.getElementById("prev-products").addEventListener("click", () => {
    cards.scrollBy({
      left: -260,
      behavior: "smooth",
    });
  });

  document.getElementById("next-products").addEventListener("click", () => {
    cards.scrollBy({
      left: 260,
      behavior: "smooth",
    });
  });
  cards.addEventListener("click", (event) => {
    const selectedCard = event.target.closest(".like-card");

    if (!selectedCard) return;
    const productId = selectedCard.dataset.productId;

    if (!productId) return;
    window.location.href = `productDetailPage.html?id=${productId}`;
  });
  renderCart();
});
