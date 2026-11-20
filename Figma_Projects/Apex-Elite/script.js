
document.addEventListener("DOMContentLoaded", () => {

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartIcon = document.querySelector(".cart");
    let cartItems = JSON.parse(localStorage.getItem("apexEliteCart")) || [];
    let cartCount = document.createElement("span");
    cartCount.className = "cart-count";

    if (cartIcon) {
        cartIcon.style.position = "relative";
        cartIcon.appendChild(cartCount);
    }
    function updateCartCount() {

        const totalItems = cartItems.reduce(
            (total, item) => total + item.quantity,
            0
        );
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? "grid" : "none";
        localStorage.setItem(
            "apexEliteCart",
            JSON.stringify(cartItems)
        );
    }
    addToCartButtons.forEach(button => {

        button.addEventListener("click", () => {
            const productName = button.dataset.name;
            const productPrice = Number(button.dataset.price);
            const productImage = button.dataset.image;
            const existingProduct = cartItems.find(
                item => item.name === productName
            );

            if (existingProduct) {
                existingProduct.quantity += 1;

            } else {
                const newProduct = {
                    id: Date.now(),
                    name: productName,
                    price: productPrice,
                    image: productImage,
                    size: "10.0",
                    quantity: 1,
                    saved: false
                };

                cartItems.push(newProduct);

            }
            localStorage.setItem(
                "apexEliteCart",
                JSON.stringify(cartItems)
            );
            updateCartCount();
            alert(productName + " added to your bag!");

        });

    });
    updateCartCount();

});
