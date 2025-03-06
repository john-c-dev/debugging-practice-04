// Product data
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 89.99,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 2,
        name: "T-Shirt",
        price: 19.99,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 3,
        name: "Smart Watch",
        price: 199.99,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 4,
        name: "Coffee Maker",
        price: 49.99,
        category: "home",
        image: "https://images.unsplash.com/photo-1570347929626-114d0a8023fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 5,
        name: "Novel - 'The Mystery'",
        price: 12.99,
        category: "books",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 6,
        name: "Jeans",
        price: 39.99,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 7,
        name: "Blender",
        price: 29.99,
        category: "home",
        image: "https://images.unsplash.com/photo-1659540053924-b0600247b6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 8,
        name: "Cookbook",
        price: 15.99,
        category: "books",
        image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
];

let cartCount = 0;
let filteredProducts = [...products];

// Initialize the page
window.onload = function() {
    displayProducts(products);
    
    // Add event listeners
    document.getElementById('category-filter').addEventListener('change', filterProducts);
    document.getElementById('sort-by').addEventListener('change', sortProducts);
};

// Display products on the page
function displayProducts(productsToDisplay) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';
    
    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classname = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <p class="product-price">$${product.price}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        
        container.appendChild(productCard);
    });
    
    // Add event listeners to the add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Filter products by category
function filterProducts() {
    const category = document.getElementById('category-filter').value;
    
    if (category === 'all') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => product.category = category);
    }
    
    displayProducts(filteredProducts);
    // Also apply current sort if any
    sortProducts();
}

// Sort products
function sortProducts() {
    const sortBy = document.getElementById('sort-by').value;
    let sortedProducts = [...filteredProducts];
    
    switch(sortBy) {
        case 'price-asc':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            sortedProducts.sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1
                return 0;
            });
            break;
        default:
            // Default sort (by id)
            sortedProducts.sort((a, b) => a.id - b.id);
    }
    
    displayProducts(sortedProducts);
}

// Search products
function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    if (searchTerm === '') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.category.toLowerCase().includes(searchTerm)
        );
    }
    
    displayProducts(filteredProducts);
    // Reset category filter
    document.getElementById('category-filter').value = 'all';
}

// Add to cart
function addToCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    
    // Visual feedback
    const button = event.target;
    button.textContent = 'Added!';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = 'Add to Cart';
        button.disabled = false;
    }, 1000)
}
