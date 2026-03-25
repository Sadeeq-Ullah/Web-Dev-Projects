// ============================================================
// TESTIMONIAL SLIDER
// ============================================================

const slider = document.querySelector(".testimonials-wrapper");

if (slider) {
    function sliderHandle() {

        
        const cards = slider.querySelectorAll(".testimonial-card");
        const leftBtn = document.querySelector("#left-arrow");
        const rightBtn = document.querySelector("#right-arrow");

        const totalCards = cards.length;

        // Clone first and last cards to create infinite loop illusion
        slider.appendChild(cards[0].cloneNode(true));
        slider.insertBefore(cards[totalCards - 1].cloneNode(true), slider.firstChild);

        let position = 1;
        slider.style.transform = `translateX(-100%)`;

        function slide(newPosition) {
            // Disable buttons during transition to prevent rapid clicking
            if (leftBtn) leftBtn.disabled = true;
            if (rightBtn) rightBtn.disabled = true;

            slider.style.transition = 'transform 800ms ease';
            slider.style.transform = `translateX(-${newPosition * 100}%)`;

            setTimeout(() => {
                // Snap to real card when a clone is reached
                if (newPosition === totalCards + 1) {
                    position = 1;
                    slider.style.transition = 'none';
                    slider.style.transform = 'translateX(-100%)';
                } else if (newPosition === 0) {
                    position = totalCards;
                    slider.style.transition = 'none';
                    slider.style.transform = `translateX(-${totalCards * 100}%)`;
                }

                if (leftBtn) leftBtn.disabled = false;
                if (rightBtn) rightBtn.disabled = false;
            }, 500);
        }

        if (leftBtn && rightBtn) {
            leftBtn.onclick = () => slide(--position);
            rightBtn.onclick = () => slide(++position);
        }
    }
    sliderHandle();
}


// ============================================================
// COUNTRY DROPDOWN — fetches and populates via REST Countries API
// ============================================================

const navlinks = document.querySelectorAll(".navbar-links");

async function getSortedCountryData() {
    const countrySelect = document.getElementById('country');
    if (!countrySelect) return;

    try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,cca3');
        const data = await response.json();

        const formattedData = data.map(country => ({
            name: country.name.common,
            code: country.cca3
        }));

        // Sort alphabetically before rendering
        formattedData.sort((a, b) => a.name.localeCompare(b.name));

        formattedData.forEach(country => {
            const option = document.createElement('option');
            option.value = country.code;
            option.textContent = country.name;
            countrySelect.appendChild(option);
        });

    } catch (error) {
        console.error('Error fetching or processing country data:', error);
        return null;
    }
}
getSortedCountryData();


// ============================================================
// CART BUTTON — saves selected product to localStorage and redirects
// ============================================================

const cartButtons = document.querySelectorAll(".cart-btn");

function handleCartButtonClick() {
    if (cartButtons.length > 0) {
        cartButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                const productCard = btn.closest(".prod-card");
                const productName = productCard.querySelector(".product-title").textContent;
                const productPrice = productCard.querySelector(".product-price").textContent;
                const productImage = productCard.querySelector(".product-img").src;

                const productData = { name: productName, price: productPrice, image: productImage };

                localStorage.setItem("selectedProduct", JSON.stringify(productData));
                window.location.href = "/Ecommerce web/cart.html";
            });
        });
    }
}
handleCartButtonClick();


// ============================================================
// CART PAGE — renders product info and handles quantity changes
// ============================================================

const prodImg = document.querySelector("#prod-pic");
const prodName = document.querySelector("#prod-name");
const prodRate = document.querySelector("#prod-rate");
const incdecamount = document.querySelector(".text-amount");
const total = document.querySelector(".total-amount");
const subtotal = document.querySelector(".subtotal-amount");

function cartPageValues() {
    if (prodImg && prodName && prodRate) {
        const storedProduct = localStorage.getItem("selectedProduct");

        if (storedProduct) {
            const product = JSON.parse(storedProduct);

            prodName.textContent = product.name;
            prodRate.textContent = product.price;
            prodImg.src = product.image;

            function initializeCartValues() {
                if (incdecamount) incdecamount.textContent = product.price;
                if (subtotal) subtotal.textContent = product.price;
                // Total = product price + flat $10 shipping
                if (total) total.textContent = `$${(parseFloat(product.price.replace("$", "")) + 10).toFixed(2)}`;
            }
            initializeCartValues();
        };

        const quant = document.querySelector(".quantity");

        // Delegated click — handles both plus and minus from a single listener
        document.addEventListener("click", (event) => {
            const isPlus = event.target.closest(".plus");
            const isMinus = event.target.closest(".minus");

            if (isPlus || isMinus) {
                if (!quant || !prodRate || !incdecamount || !subtotal || !total) return;

                const input = quant.querySelector(".quantity-input");
                let currentVal = parseInt(input.value);
                if (isPlus) currentVal++;
                if (isMinus && currentVal > 1) currentVal--;
                input.value = currentVal;

                const rate = parseFloat(prodRate.textContent.replace("$", ""));
                const totalAmount = (currentVal * rate).toFixed(2);

                incdecamount.textContent = `$${totalAmount}`;
                subtotal.textContent = `$${totalAmount}`;
                total.textContent = `$${parseFloat(totalAmount) + 10}`;
            }
        });
    }
}
cartPageValues();


// ============================================================
// CHECKOUT — saves cart summary to localStorage and redirects
// ============================================================

function handleCheckout() {
    const checkoutbtn = document.querySelector(".checkout-btn");
    if (!checkoutbtn) return;

    checkoutbtn.addEventListener("click", () => {
        const cartDetails = {
            Prodname: prodName ? prodName.textContent : "",
            Prodrate: prodRate ? prodRate.textContent : "",
            Prodtotal: total ? total.textContent : "",
            Prodsubtotal: subtotal ? subtotal.textContent : ""
        };
        localStorage.setItem("cartDetails", JSON.stringify(cartDetails));
        window.location.href = "/Ecommerce web/cart_proceed.html";
    });
}
handleCheckout();


// ============================================================
// PROCEED PAGE — populates order summary from localStorage
// ============================================================

function proceedPageValues() {
    const chairName = document.querySelector(".chair");
    const chairRate = document.querySelector(".chair .chair-price");
    const cartProcSubtotalEl = document.querySelector(".cart_proc_subtotal .subtotal-amount");
    const cartProcTotalEl = document.querySelector(".cart_proc_total .total-amount");

    if (!chairName || !chairRate || !cartProcSubtotalEl || !cartProcTotalEl) return;

    const stored = localStorage.getItem("cartDetails");
    if (!stored) return;

    const details = JSON.parse(stored);

    chairName.firstChild.textContent = details.Prodname;
    chairRate.textContent = details.Prodrate;
    cartProcSubtotalEl.textContent = details.Prodsubtotal;
    cartProcTotalEl.textContent = details.Prodtotal;
}
proceedPageValues();


// ============================================================
// HAMBURGER MENU — runs after dynamic components are injected
// ============================================================

document.addEventListener("componentsLoaded", () => {
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector(".navbar-links");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", (e) => {
            e.stopPropagation();
            navMenu.classList.toggle("active");
        });

        // Close menu when clicking outside of it
        document.addEventListener("click", (e) => {
            if (
                navMenu.classList.contains("active") &&
                !navMenu.contains(e.target) &&
                !hamburger.contains(e.target)
            ) {
                navMenu.classList.remove("active");
            }
        });
    }
});