// Initialize an empty cart
const priceFilter = document.getElementById('priceFilter');
        const ratingFilter = document.getElementById('ratingFilter');
        const productList = document.getElementById('productList');
        const products = Array.from(productList.getElementsByClassName('product-card'));

        function filterProducts() {
            const priceValue = priceFilter.value;
            const ratingValue = parseInt(ratingFilter.value);

            products.forEach(product => {
                const productPrice = parseInt(product.getAttribute('data-price'));
                const productRating = parseInt(product.getAttribute('data-rating'));
                
                // Check price filter
                const priceMatch =
                    (priceValue === 'all') ||
                    (priceValue === 'under200' && productPrice < 200) ||
                    (priceValue === '200to300' && productPrice >= 200 && productPrice <= 300) ||
                    (priceValue === 'above300' && productPrice > 300);

                // Check rating filter
                const ratingMatch = (isNaN(ratingValue) || productRating >= ratingValue);

                // Display product if both price and rating match
                if (priceMatch && ratingMatch) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        }

        // Event listeners for filter dropdowns
        priceFilter.addEventListener('change', filterProducts);
        ratingFilter.addEventListener('change', filterProducts);

        // Initial filter setup
        filterProducts();
let count=0
const buttons = document.querySelectorAll(".AddCart");
[...buttons].map(button => button.addEventListener('click', click));
function click(){
count+=1
document.getElementById('cart').innerText=`Cart(${count})`
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add item to cart
function addToCart(event) {
    const productElement = event.target.closest('.product');
    const productId = productElement.getAttribute('data-id');
    const productName = productElement.getAttribute('data-name');
    const productPrice = parseFloat(productElement.getAttribute('data-price'));

    // Check if the item is already in the cart
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        // Increase quantity if already in cart
        existingProduct.quantity += 1;
    } else {
        // Add new item to cart
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Notify the user
    alert(`${productName} added to cart!`);
}


// Function to retrieve and display the cart
function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Cart Items:', cartItems);
}
