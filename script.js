// Food data
    const foodData = [
        // Best-Sellers
        {
            id: 1,
            name: "Kape Kastila",
            prices: { Grande: 120, Venti: 130 }, // Specific prices
            category: "Best",
            image: "img/coffee/kk.png",
            description: "Creamy espresso with sweetened milk"
        },
        {
            id: 2,
            name: "Caramel Macchiato",
            prices: { Grande: 130, Venti: 140 },
            category: "Best",
            image: "img/coffee/cm.jpg",
            description: "Steamed milk with caramel-flavored espresso."
        },
        {
            id: 3,
            name: "Matcha Latte",
            prices: { Grande: 145, Venti: 165 },
            category: "Best",
            image: "img/coffee/ml.png",
            description: "Premium green tea matcha with creamy milk."
        },
        {
            id: 4,
            name: "Seasalt Matcha",
            prices: { Grande: 145, Venti: 165 },
            category: "Best",
            image: "img/category/ssm.jpg",
            description: "Sweet matcha topped with savory sea salt cream."
        },
        {
            id: 5,
            name: "Lotus Biscoff",
            prices: { Grande: 160, Venti: 190 },
            category: "Best",
             image: "img/category/lb.jpg",
            description: "Frappe with crushed Lotus Biscoff cookies."
        },
        {
            id: 6,
            name: "Java Chip",
            prices: { Grande: 155, Venti: 185 },
            category: "Best",
             image: "img/category/jc.jpg",
            description: "Coffee drink with chocolate chips and mocha."
        },
        {
            id: 7,
            name: "Blueberry Soda",
            prices: { Grande: 120, Venti: 140 },
            category: "Best",
            image: "img/category/bs.jpg",
            description: "Sparkling soda with fresh blueberry syrup."
        },
        {
            id: 8,
            name: "Blueberry Yogurt",
            prices: { Grande: 150, Venti: 180 },
            category: "Best",
            image: "img/category/by.jpg",
            description: "Creamy yogurt with real blueberry swirls."
        },
        {
            id: 9,
            name: "Lychee Fruit Tea",
            prices: { Grande: 110, Venti: 130 },
            category: "Best",
             image: "img/category/ls.jpg",
            description: "Sweet lychee-infused brewed tea."
        },
        {
            id: 10,
            name: "LV Choice",
            prices: { Grande: 135, Venti: 145 }, 
            category: "Best",
             image: "img/category/lvc.jpg",
            description: "Our signature house blend, perfectly roasted."
        // Coffee
        },
        {
            id: 11,
            name: "LV Choice",
            prices: { Grande: 135, Venti: 145 }, 
            category: "Coffee",
            
            description: "Our signature house blend, perfectly roasted."
        },
        {
            id: 12,
            name: "Caramel Macchiato",
            prices: { Grande: 130, Venti: 140 },
            category: "Coffee",
           
            description: "Smooth espresso with vanilla caramel."
        },
        {
            id: 13,
            name: "Sea Salt Latte",
            prices: { Grande: 130, Venti: 140 },
            category: "Coffee",
           
            description: "Espresso with milk and salted cream."
        },
        {
            id: 14,
            name: "Caramel Latte",
            prices: { Grande: 120, Venti: 130 },
            category: "Coffee",
           
            description: "Classic latte with caramel syrup."
        },
        {
            id: 15,
            name: "Roasted Almond",
            prices: { Grande: 120, Venti: 130 },
            category: "Coffee",
            
            description: "Latte with roasted almond flavor."
        },
        {
            id: 16,
            name: "Salted Caramel",
            prices: { Grande: 120, Venti: 130 },
            category: "Coffee",
           
            description: "Sweet and salty caramel latte."
        }, 
        {
            id: 17,
            name: "Hazelnut",
            prices: { Grande: 120, Venti: 130 },
            category: "Coffee",
            
            description: "Espresso latte with nutty hazelnut notes."
        },     
        {
            id: 18,
            name: "Kape Kastila",
            prices: { Grande: 120, Venti: 130 },
            category: "Coffee",
          
            description: "Creamy espresso with sweetened milk."
        },     
        {
            id: 19,
            name: "Matcha Latte",
            prices: { Grande: 120, Venti: 130 },
            category: "Coffee",
           
            description: "Rich matcha latte with milk."
        },     
        {
            id: 20,
            name: "Latte",
            prices: { Grande: 120, Venti: 130 },
            category: "Coffee",
            
            description: "Smooth espresso with steamed milk."
        },   
        {
            id: 21,
            name: "Matcha Espresso",
            prices: { Grande: 130, Venti: 140 },
            category: "Coffee",
           
            description: "Bold espresso with a hint of matcha."
        },
        {
            id: 22,
            name: "Americano",
            prices: { Grande: 85, Venti: 95 },
            category: "Coffee",
            
            description: "Classic espresso with hot water."
        },  
        {
            id: 23,
            name: "Cappucino",
            prices: { Grande: 120, Venti: 140 },
            category: "Coffee",
          
            description: "Espresso with frothy steamed milk."
        }, 
        {
            id: 24,
            name: "White Breve Latte",
            prices: { Grande: 120, Venti: 130 },
            category: "Coffee",
          
            description: "Creamy latte with white cream."
        }, 
        {
            id: 25,
            name: "Strawberry Matcha",
            prices: { Grande: 120, Venti: 130 },
            category: "Coffee",
       
            description: "Fruity strawberry blended with matcha."
        }, 
        {
            id: 26,
            name: "Lotus Biscoff Latte",
            prices: { Grande: 140, Venti: 150 },
            category: "Coffee",
          
            description: "Latte with crushed Lotus Biscoff cookies."
        }, 
        //Non-Coffee
    // Milktea
        {
            id: 27,
            name: "Matcha Milktea",
            prices: { Grande: 120, Venti: 130 },
            category: "Milk Tea",
            
            description: "Creamy matcha tea with milk."
        }, 
        {
            id: 28,
            name: "Dark Chocolate Milktea",
            prices: { Grande: 120, Venti: 130 },
            category: "Milk Tea",
            
            description: "Chocolatey milk tea delight."
        },
        {
            id: 29,
            name: "Cookies & Cream Milktea",
            prices: { Grande: 120, Venti: 130 },
            category: "Milk Tea",
            
            description: "Milk tea with cookies & cream blend."
        },
        {
            id: 30,
            name: "Java Chip Milktea",
            prices: { Grande: 120, Venti: 130 },
            category: "Milk Tea",
            
            description: "Chocolate chip-infused milk tea."
        },
    // Milkshake
        {
            id: 31,
            name: "Avocado Milkshake",
            prices: { Grande: 120, Venti: 130 },
            category: "Milkshake",
            
            description: "Creamy avocado blended shake."
        }, 
        {
            id: 32,
            name: "Ube Milkshake",
            prices: { Grande: 120, Venti: 130 },
            category: "Milkshake",
            
            description: "Sweet ube milkshake."
        }, 
        {
            id: 33,
            name: "Chocolate Milkshake",
            prices: { Grande: 120, Venti: 130 },
            category: "Milkshake",
            
            description: "Rich chocolate blended with milk."
        },
        {
            id: 34,
            name: "Cookies & Cream Milkshake",
            prices: { Grande: 120, Venti: 130 },
            category: "Milkshake",
            
            description: "Creamy shake with cookie pieces."
        },
            {
            id: 35,
            name: "House Blend Iced Tea",
            prices: { Grande: 90, Venti: 100 },
            category: "Juice",
            
            description: "Refreshing brewed iced tea."
        },
        {
            id: 36,
            name: "Lemonade",
            prices: { Grande: 90, Venti: 100 },
            category: "Juice",
            
            description: "Classic sweet and tangy lemonade."
        }, 
        {
            id: 37,
            name: "Blueberry Yogurt",
            prices: { Grande: 110, Venti: 130 },
            category: "Yogurt",
            
            description: "Creamy yogurt with blueberry swirls."
        },
        {
            id: 38,
            name: "Mango Graham Yogurt",
            prices: { Grande: 110, Venti: 130 },
            category: "Yogurt",
            
            description: "Sweet mango yogurt with graham bits."
        },
        {
            id: 39,
            name: "Ube Yogurt",
            prices: { Grande: 110, Venti: 130 },
            category: "Yogurt",
            
            description: "Creamy ube-flavored yogurt."
        },
        {
            id: 40,
            name: "Strawberry Yogurt",
            prices: { Grande: 110, Venti: 130 },
            category: "Yogurt",
            
            description: "Fresh strawberry yogurt blend."
        },   
        {
            id: 41,
            name: "Blueberry Soda",
            prices: { Grande: 110, Venti: 130 },
            category: "Refreshers",
            
            description: "Sparkling blueberry soda."
        },
        {
            id: 42,
            name: "Mango Soda",
            prices: { Grande: 110, Venti: 130 },
            category: "Refreshers",
            
            description: "Refreshing mango soda."
        },
        {
            id: 43,
            name: "Strawberry Soda",
            prices: { Grande: 110, Venti: 130 },
            category: "Refreshers",
            
            description: "Fruity sparkling strawberry soda."
        },
        {
            id: 44,
            name: "Lychee Butterflypea Soda",
            prices: { Grande: 110, Venti: 130 },
            category: "Refreshers",
            
            description: "Lychee tea with butterfly pea color."
        },
        {
            id: 45,
            name: "Hot Mint Tea",
            prices: { Grande: 90, Venti: 100 },
            category: "Refreshers",
            
            description: "Soothing hot mint tea."
        },
        {
            id: 46,
            name: "Hot Lemon Tea",
            prices: { Grande: 90, Venti: 100 },
            category: "Refreshers",
            
            description: "Warm lemon-infused tea."
        },
        // Frappuccino

        {
            id: 47,
            name: "Lotus Biscoff",
            prices: { Grande: 140, Venti: 170 },
            category: "Non-Coffee Based",
            
            description: "Creamy frappe with Lotus Biscoff crumbs."
        },
        {
            id: 48,
            name: "Caramel",
            prices: { Grande: 140, Venti: 170 },
            category: "Coffee Based",
            
            description: "Sweet caramel blended frappe."
        },
        {
            id: 49,
            name: "Mocha",
            prices: { Grande: 140, Venti: 170 },
            category: "Coffee Based",
            
            description: "Chocolate and coffee frappe blend."
        },
        {
            id: 50,
            name: "Java Chip",
            prices: { Grande: 140, Venti: 170 },
            category: "Coffee Based",
            
            description: "Coffee frappe with chocolate chips."
        },
        {
            id: 51,
            name: "Strawberry",
            prices: { Grande: 140, Venti: 170 },
            category: "Non-Coffee Based",
            
            description: "Fruity strawberry blended frappe."
        },
        {
            id: 52,
            name: "White Chocolate",
            prices: { Grande: 140, Venti: 170 },
            category: "Non-Coffee Based",
            
            description: "Smooth white chocolate frappe."
        },
        {
            id: 53,
            name: "Mango Graham",
            prices: { Grande: 140, Venti: 170 },
            category: "Non-Coffee Based",
            
            description: "Mango frappe with graham notes."
        },
        {
            id: 54,
            name: "Matcha",
            prices: { Grande: 140, Venti: 170 },
            category: "Non-Coffee Based",
            
            description: "Matcha-flavored blended frappe."
        },



        // Ice Foam Series

        {
            id: 55,
            name: "Caramel Foam",
            prices: { Grande: 110, Venti: 120 },
            category: "Ice Foam",
            
            description: "Espresso topped with creamy caramel foam."
        },
        {
            id: 56,
            name: "Salted Caramel Foam",
            prices: { Grande: 110, Venti: 120 },
            category: "Ice Foam",
            
            description: "Sweet & salty caramel foam latte."
        },
        {
            id: 57,
            name: "Spanish Foam",
            prices: { Grande: 110, Venti: 120 },
            category: "Ice Foam",
            
            description: "Creamy Spanish-style foam coffee."
        },
        {
            id: 58,
            name: "Hazelnut Foam",
            prices: { Grande: 110, Venti: 120 },
            category: "Ice Foam",
            
            description: "Espresso with nutty foam topping."
        },
        {
            id: 59,
            name: "Roasted Almond Foam",
            prices: { Grande: 110, Venti: 120 },
            category: "Ice Foam",
            
            description: "Almond-flavored creamy foam."
        },
        {
            id: 60,
            name: "Vanilla Foam",
            prices: { Grande: 110, Venti: 120 },
            category: "Ice Foam",
            
            description: "Smooth vanilla-topped coffee."
        },
        {
            id: 61,
            name: "Chocolate Foam",
            prices: { Grande: 110, Venti: 120 },
            category: "Ice Foam",
            
            description: "Rich chocolate foam latte."
        },
        {
            id: 62,
            name: "Americano Foam",
            prices: { Grande: 110, Venti: 120 },
            category: "Ice Foam",
            
            description: "Americano with frothy foam."
        },
        {
            id: 63,
            name: "Strawberry Foam",
            prices: { Grande: 110, Venti: 120 },
            category: "Ice Foam",
            
            description: "Strawberry-flavored coffee foam."
        },
        {
            id: 64,
            name: "Matcha Foam",
            prices: { Grande: 120, Venti: 130 },
            category: "Ice Foam",
            
            description: "Creamy matcha-topped espresso."
        },
        {
            id: 65,
            name: "Newyork Cheesecake",
            fixedPrice: 165,
            category: "Pastries",
            
            description: "Classic creamy cheesecake."
        },
        {
            id: 66,
            name: "Blueberry Cheesecake",
            fixedPrice: 170,
            category: "Pastries",
            
            description: "Cheesecake with fresh blueberries."
        },
        {
            id: 68,
            name: "Oreo Cheesecake",
            fixedPrice: 195,
            category: "Pastries",
            
            description: "Creamy cheesecake with Oreo crumble."
        },
        {
            id: 69,
            name: "Biscoff Cheesecake",
            fixedPrice: 195,
            category: "Pastries",
            
            description: "Cheesecake with Biscoff crust."
        },
        {
            id: 70,
            name: "Chocolate Chip Cookie",
            fixedPrice: 70,
            category: "Pastries",
            
            description: "Soft baked chocolate chip cookie."
        },
        {
            id: 71,
            name: "Brownies",
            fixedPrice: 80,
            category: "Pastries",
            
            description: "Rich and fudgy chocolate brownies."
        },
        {
            id: 72,
            name: "Cake Pops",
            fixedPrice: 80,
            category: "Pastries",
            
            description: "Bite-sized sweet cake on a stick."
        },

    ];


    // Cart array
    let cart = [];

        // DOM Elements
    const cartLink = document.getElementById('cartLink');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.getElementById('closeCart');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartCount = document.querySelector('.cart-count');
    const featuredFoods = document.getElementById('featuredFoods');
    const menuSearchInput = document.getElementById('menuSearchInput');
    let activeMenuCategory = 'Best';


    // Initialize the app
    document.addEventListener('DOMContentLoaded', function() {
        displayFeaturedFoods();
        updateCartUI();
       

        // --- START OF NEW MODAL BUTTON LISTENERS ---
        
        // Size Selection (Grande/Venti)
        document.querySelectorAll('.size-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                selectedSize = this.getAttribute('data-size');
            });
        });

        // Temp Selection (Hot/Cold)
        document.querySelectorAll('.temp-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.temp-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                selectedTemp = this.getAttribute('data-temp');
            });
        });

        // Confirm Selection Button
        const confirmBtn = document.getElementById('confirmSelection');
        if (confirmBtn) {
            confirmBtn.addEventListener('click', finalizeAddToCart);
        }

        // Close Selection Modal Button
        const closeSelect = document.getElementById('closeSelection');
        if (closeSelect) {
            closeSelect.addEventListener('click', () => {
                document.getElementById('selectionModal').style.display = 'none';
            });
        }

        // --- END OF NEW MODAL BUTTON LISTENERS ---

        // Your Existing Event Listeners
        if (cartLink) {
            cartLink.addEventListener('click', function(e) {
                e.preventDefault();
                openCart();
            });
        }
        
        if (closeCart) {
            closeCart.addEventListener('click', closeCartModal);
        }

        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', checkout);
        }
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === cartModal) {
                closeCartModal();
            }
            // Also close selection modal if clicking outside
            const selectModal = document.getElementById('selectionModal');
            if (event.target === selectModal) {
                selectModal.style.display = 'none';
            }
    // Addon Selection
    document.querySelectorAll('.addon-btn').forEach(btn => {
        btn.addEventListener('click', function () {

            const addonName = this.getAttribute('data-addon');
            const addonPrice = parseFloat(this.getAttribute('data-price'));

            // If "No Addons"
            if (addonName === 'No Addons') {
                document.querySelectorAll('.addon-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                selectedAddons = [];
                selectedAddonTotal = 0;
                return;
            }

            // Remove "No Addons" if another addon is selected
            document.querySelector('[data-addon="No Addons"]').classList.remove('active');

            this.classList.toggle('active');

            if (this.classList.contains('active')) {
                selectedAddons.push(addonName);
                selectedAddonTotal += addonPrice;
            } else {
                selectedAddons = selectedAddons.filter(a => a !== addonName);
                selectedAddonTotal -= addonPrice;
            }
        });
    });
        });
    });


    // Add item to cart with size and temperature prompt
    // Variables to track current selection
    let currentFoodId = null;
    let selectedSize = 'Grande';
    let selectedTemp = 'Hot';
    let selectedAddons = [];  // New
    let selectedAddonTotal = 0;      // New
    let selectedService = "Dine In"; // New

    // 1. This opens the modal instead of using prompt
    // Open selection modal for any food item
function openSelectionModal(foodId) {
    const food = foodData.find(item => item.id === foodId);
    if (!food) return;

    currentFoodId = foodId;

    document.getElementById('selectionTitle').textContent = `Customize ${food.name}`;

    // Reset selections
    selectedSize = 'Grande';
    selectedTemp = 'Hot';
    selectedAddons = [];
    selectedAddonTotal = 0;

    // Reset all buttons
    document.querySelectorAll('.size-btn, .temp-btn, .addon-btn, .service-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-size="Grande"]').classList.add('active');
    document.querySelector('[data-temp="Hot"]').classList.add('active');
    document.querySelector('[data-addon="No Addons"]').classList.add('active');
    document.querySelector('[data-service="Dine In"]').classList.add('active');

    // DOM groups
    const sizeGroup = document.querySelector('.selection-group:nth-of-type(1)'); // Size
    const tempGroup = document.getElementById('tempSelectionGroup');             // Temperature
    const serviceGroup = document.getElementById('serviceTypeGroup');            // Service Type
    const addonGroup = document.querySelectorAll('.selection-group')[3];         // Add-ons

    const coldOnlyCategories = ["Ice Foam", "Juice", "Frappuccino", "Yogurt", "Refreshers", "Milkshake", "Milk Tea"];

if (food.category === "Pastries") {
    sizeGroup.style.display = 'none';
    tempGroup.style.display = 'none';
    addonGroup.style.display = 'none';
    serviceGroup.style.display = 'flex'; // keep visible
} else {
    sizeGroup.style.display = 'flex';
    tempGroup.style.display = coldOnlyCategories.includes(food.category) ? 'none' : 'flex';
    addonGroup.style.display = 'flex';
    serviceGroup.style.display = 'flex';
}
    document.getElementById('selectionModal').style.display = 'flex';
}
document.querySelectorAll('.service-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active from all buttons in the group
        document.querySelectorAll('.service-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        selectedService = this.dataset.service; // store selection
    });
});

    // 2. This is called when the green "Add to Cart" button inside the modal is clicked

    function finalizeAddToCart() {
        const food = foodData.find(item => item.id === currentFoodId);
        // Base price + Addon price
        let basePrice = food.fixedPrice !== undefined ? food.fixedPrice : food.prices[selectedSize];
        const finalPrice = basePrice + selectedAddonTotal;

        // Check if EXACT item exists (Same ID, Size, Temp, AND Addon)
        const existingItem = cart.find(item => 
            item.id === currentFoodId && 
            item.size === selectedSize && 
            item.temp === selectedTemp &&
            item.addon === (selectedAddons.length ? selectedAddons.join(', ') : 'No Addons')
        );

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: food.id,
                name: food.name,
                size: selectedSize,
                temp: selectedTemp,
                addon: selectedAddons.length ? selectedAddons.join(', ') : 'No Addons',
                 service: selectedService,  // <-- NEW
                price: finalPrice,
                image: food.image,
                quantity: 1
            });
        }

        updateCartUI();
        document.getElementById('selectionModal').style.display = 'none';
    }


    // --- NEW FUNCTION: Helper to just render HTML from an array ---
    function renderMenuList(foodsToRender) {
        const menuFoods = document.getElementById('menuFoods');
        if (!menuFoods) return;

        menuFoods.innerHTML = '';

        if (foodsToRender.length === 0) {
            menuFoods.innerHTML = '<p style="padding: 20px; text-align: center; color: #666;">No items match your search.</p>';
            return;
        }

        foodsToRender.forEach(food => {
            const foodCard = document.createElement('div');
            foodCard.className = 'food-card';
            // NOTE: Using fixedPrice if available, falling back to Grande price
            const priceToDisplay = food.fixedPrice !== undefined ? food.fixedPrice : food.prices.Grande;

            foodCard.innerHTML = `
                ${food.image ? `<img src="${food.image}" alt="${food.name}">` : ''}
                <div class="food-info">
                    <h3>${food.name}</h3>
                    <p>${food.description}</p>
                <span class="price">
                    ₱${priceToDisplay.toFixed(2)}
                </span>
                    <button class="add-to-cart" data-id="${food.id}">Add to Cart</button>
                </div>
            `;
            menuFoods.appendChild(foodCard);
        });

        // Re-attach listeners to the new buttons
        attachAddToCartListeners();
    }

        // 3.  Updated Display Functions to show the base price (Grande)
   function displayMenuFoods(category = 'all') {
    activeMenuCategory = category;
    const menuFoods = document.getElementById('menuFoods');
    if(menuSearchInput) menuSearchInput.value = '';

    if (!menuFoods) return;

    const filteredFoods = foodData.filter(f => {
    if (f.categories) return f.categories.includes(category);
    if (f.category) return f.category === category;
    return false;
});

    // Render the foods ONLY ONCE
    renderMenuList(filteredFoods);
}

    // 4. THIS IS THE SHIT THAT SHOWS FOOD ITEMS
   function displayFeaturedFoods(foods = foodData) {
    const featuredFoods = document.getElementById('featuredFoods');
    if (!featuredFoods) return;

    featuredFoods.innerHTML = '';

    if (foods.length === 0) {
        featuredFoods.innerHTML = '<p style="padding:20px;">No results found.</p>';
        return;
    }

    foods.forEach(food => {
        const foodCard = document.createElement('div');
        foodCard.className = 'food-card';
        foodCard.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <div class="food-info">
                <h3>${food.name}</h3>
                <p>${food.description}</p>
                <span class="price">
                    ₱${food.fixedPrice !== undefined ? food.fixedPrice.toFixed(2) : food.prices.Grande.toFixed(2)}
                </span>
                <button class="add-to-cart" data-id="${food.id}">Add to Cart</button>
            </div>
        `;
        featuredFoods.appendChild(foodCard);
    });

    attachAddToCartListeners();
}


    // Helper to keep code clean
    function attachAddToCartListeners() {
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const foodId = parseInt(this.getAttribute('data-id'));
                openSelectionModal(foodId); // Changed this line
            });
        });
    }


    // Remove item from cart
    function removeFromCart(foodId) {
        cart = cart.filter(item => item.id !== foodId);
        updateCartUI();
    }

    // Update item quantity
    function updateQuantity(foodId, change) {
        const item = cart.find(item => item.id === foodId);
        
        if (item) {
            item.quantity += change;
            
            if (item.quantity <= 0) {
                removeFromCart(foodId);
            } else {
                updateCartUI();
            }
        }
    }

    // Update cart UI
    function updateCartUI() {
        // Update cart count
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        // Update cart modal
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart-message">Your cart is empty</p>';
            cartTotal.textContent = '0.00';
            return;
        }
        
        cartItems.innerHTML = '';
        let total = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
        cartItem.innerHTML = `
        <div class="item-info">
        <h4>${item.name}</h4>
        <small>${item.size}, ${item.temp}, ${item.addon}</small>
        <p class="item-price">₱${item.price.toFixed(2)} each</p>
        </div>
        <div class="item-quantity">
            <button class="quantity-btn minus" data-id="${item.id}" data-size="${item.size}" data-temp="${item.temp}" data-addon="${item.addon}">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="quantity-btn plus" data-id="${item.id}" data-size="${item.size}" data-temp="${item.temp}" data-addon="${item.addon}">+</button>
        </div>
        <button class="remove-item" data-id="${item.id}" data-size="${item.size}" data-temp="${item.temp}" data-addon="${item.addon}">×</button>
    `;
            
            cartItems.appendChild(cartItem);
        });
        
        cartTotal.textContent = total.toFixed(2);
        
        // Add event listeners to cart buttons
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
        button.addEventListener('click', function() {
            updateQuantityWithSize(
                parseInt(this.getAttribute('data-id')), 
                this.getAttribute('data-size'), 
                this.getAttribute('data-temp'), 
                this.getAttribute('data-addon'), 
                -1
            );
        });
    });

    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
        button.addEventListener('click', function() {
            updateQuantityWithSize(
                parseInt(this.getAttribute('data-id')), 
                this.getAttribute('data-size'), 
                this.getAttribute('data-temp'), 
                this.getAttribute('data-addon'), 
                1
            );
        });
    });

    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const foodId = parseInt(this.getAttribute('data-id'));
            const size = this.getAttribute('data-size');
            const temp = this.getAttribute('data-temp');
            const addon = this.getAttribute('data-addon'); 

            removeFromCartWithSize(foodId, size, temp, addon); 
        });
    });

    }

    // Open cart modal
    function openCart() {
        cartModal.style.display = 'flex';
    }

    // Close cart modal
    function closeCartModal() {
        cartModal.style.display = 'none';
    }

    // Checkout function
    function checkout() {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        // Create an order object from the cart
        const order = {
            items: cart.map(item => ({
                id: item.id,
                name: item.name,
                size: item.size,
                temp: item.temp,
                addon: item.addon,
                service: item.service,
                price: item.price,
                quantity: item.quantity
            })),
            timestamp: new Date().toISOString()  // Add a timestamp for the bill
        };
        
        generateBillPreview(order);
        
        closeCartModal();
    }

    // Generate bill preview
function generateBillPreview(order) {
    let total = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    let billContent = `
=====================================
        La Vernice
         Your BILL
=====================================

Date: ${new Date(order.timestamp).toLocaleString()}

Items:
-------------------------------------
`;

    order.items.forEach(item => {
        const itemTotal = (item.price * item.quantity).toFixed(2);
        let itemDetails = `${item.name}`;
        if (item.size) itemDetails += ` (${item.size})`;
        if (item.temp) itemDetails += ` - ${item.temp}`;
        if (item.service) itemDetails += ` - ${item.service}`;
        if (item.addon && item.addon !== 'No Addons') itemDetails += ` - ${item.addon}`;
        billContent += `${itemDetails}
Price: ₱${item.price.toFixed(2)} x ${item.quantity} = ₱${itemTotal}
-------------------------------------
`;
    });

    billContent += `TOTAL: ₱${total.toFixed(2)}
-------------------------------------

=====================================
    Thank you for your order!
Visit us again at La Vernice
=====================================
`;

    showBillPreview(billContent, order);
}

// Show bill preview modal
function showBillPreview(billContent, order) {
    let billModal = document.getElementById('billModal');

    const total = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (!billModal) {
        billModal = document.createElement('div');
        billModal.id = 'billModal';
        billModal.className = 'cart-modal';

        billModal.innerHTML = `
    <div class="cart-content" style="width: 90%; max-width: 700px;">
        <div class="cart-header">
            <h2>Order Bill Preview</h2>
            <span class="close-btn" id="closeBill">&times;</span>
        </div>

        <div class="cart-body" style="padding: 20px;">
            
            <pre id="billPreview"
                style="white-space: pre-wrap;
                       font-family: monospace;
                       background: #f8f9fa;
                       padding: 20px;
                       border-radius: 5px;
                       max-height: 300px;
                       overflow-y: auto;">
            </pre>

            <!-- CASH PAYMENT -->
            <div id="cashTotalContainer"
                style="display:none; text-align:center; margin-top:30px;">
                <h1 id="cashTotalAmount">₱${total.toFixed(2)}</h1>
                <p>Please proceed to the cashier</p>
                <br>
                <button class="btn-primary confirm-order-btn">Confirm Order</button>
            </div>

            <!-- ONLINE PAYMENT (QR) -->
            <div id="qrContainer" style="display:none; text-align:center; margin-top:20px;">
                <h2 id="qrTotal">Total: ₱${total.toFixed(2)}</h2>
                <h3>Scan to Pay</h3>
                <img src="img/lvqr.jpg" style="width:400px; height:auto;">
                <br>
                <button class="btn-primary confirm-order-btn">Confirm Order</button>
            </div>  

            <div class="cart-footer" id="paymentButtons"
                style="display:flex; gap:10px; justify-content:center; margin-top:20px;">
                <button class="btn-primary" id="cashPay">Cash Payment</button>
                <button class="btn-primary" id="onlinePay">Online Payment</button>
                <button class="btn-primary" id="closeBillBtn">Close</button>
            </div>
        </div>
    </div>
`;

        document.body.appendChild(billModal);

        document.getElementById('closeBill').onclick = closeBill;
        document.getElementById('closeBillBtn').onclick = closeBill;

        document.getElementById('cashPay').onclick = () => {
            document.getElementById('billPreview').style.display = 'none';
            document.getElementById('paymentButtons').style.display = 'none';
            document.getElementById('cashTotalContainer').style.display = 'block';
        };

        document.getElementById('onlinePay').onclick = () => {
            document.getElementById('billPreview').style.display = 'none';
            document.getElementById('paymentButtons').style.display = 'none';
            document.getElementById('qrContainer').style.display = 'block';
        };

        billModal.onclick = (e) => {
            if (e.target === billModal) closeBill();
        };

        document.querySelectorAll('.confirm-order-btn').forEach(btn => {
            btn.onclick = () => {
                document.getElementById('cartDataInput').value = JSON.stringify(cart);
                document.getElementById('totalInput').value = cartTotal.textContent;
                
                document.getElementById('checkoutForm').submit();
                
                cart = [];
                updateCartUI();
                
                closeBill();
            };
        });
    }

    document.getElementById('billPreview').textContent = billContent;

    document.getElementById('cashTotalAmount').textContent = `₱${total.toFixed(2)}`;
    document.getElementById('qrTotal').textContent = `Total: ₱${total.toFixed(2)}`;

    billModal.style.display = 'flex';

    function closeBill() {
        billModal.style.display = 'none';
        document.getElementById('billPreview').style.display = 'block';
        document.getElementById('paymentButtons').style.display = 'flex';
        document.getElementById('qrContainer').style.display = 'none';
        document.getElementById('cashTotalContainer').style.display = 'none';
    }
}


    function setupFilterButtons() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const nonCoffeeContainer = document.getElementById('nonCoffeeSubcategories');
        const frappuccinoContainer = document.getElementById('FrappuccinnoSubcategories');

        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                const category = this.getAttribute('data-category');

                // Hide both subcategory containers first
                nonCoffeeContainer.style.display = 'none';
                frappuccinoContainer.style.display = 'none';

                /* ===== NON-COFFEE ===== */
                if (category === 'Non-Coffee') {
                    nonCoffeeContainer.innerHTML = '';
                    nonCoffeeContainer.style.display = 'flex';

                    nonCoffeeSubcategories.forEach(sub => {
                        const subBtn = document.createElement('button');
                        subBtn.className = 'filter-btn sub-btn';
                        subBtn.textContent = sub;
                        subBtn.dataset.category = sub;

                        subBtn.addEventListener('click', function () {
                            nonCoffeeContainer.querySelectorAll('.sub-btn')
                                .forEach(b => b.classList.remove('active'));
                            this.classList.add('active');
                            displayMenuFoods(sub);
                        });

                        nonCoffeeContainer.appendChild(subBtn);
                    });

                    displayMenuFoods('none');
                }

                /* ===== FRAPPUCCINO ===== */
                else if (category === 'Frap') {
                    frappuccinoContainer.innerHTML = '';
                    frappuccinoContainer.style.display = 'flex';

                    frappuccinoSubcategories.forEach(sub => {
                        const subBtn = document.createElement('button');
                        subBtn.className = 'filter-btn sub-btn';
                        subBtn.textContent = sub;
                        subBtn.dataset.category = sub;

                        subBtn.addEventListener('click', function () {
                            frappuccinoContainer.querySelectorAll('.sub-btn')
                                .forEach(b => b.classList.remove('active'));
                            this.classList.add('active');
                            displayMenuFoods(sub);
                        });

                        frappuccinoContainer.appendChild(subBtn);
                    });

                    displayMenuFoods('none');
                }

                /* ===== NORMAL CATEGORIES ===== */
                else {
                    displayMenuFoods(category);
                }
            });
        });
    }
    // Initialize menu page if on menu page
    if (document.querySelector('.menu-page')) {
        document.addEventListener('DOMContentLoaded', function() {
            updateCartUI();
            displayMenuFoods('Best');
            setActiveFilter('Best');
            setupFilterButtons();

// --- START OF NEW SEARCH IMPLEMENTATION ---
        if (menuSearchInput) {
            menuSearchInput.addEventListener('input', function(e) {
                const searchTerm = e.target.value.toLowerCase().trim();

                // If search is empty, restore the currently active category view
                if (searchTerm === '') {
                    displayMenuFoods(activeMenuCategory);
                    return;
                }

                // Filter the global foodData array based on Name OR Description
                const searchResults = foodData.filter(food => {
                    return food.name.toLowerCase().includes(searchTerm) || 
                           food.description.toLowerCase().includes(searchTerm);
                });

                // Render the search results using the new helper
                renderMenuList(searchResults);

                // Optional: visually deselect filter buttons while searching
                document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                // Hide subcategory containers while searching
                document.getElementById('nonCoffeeSubcategories').style.display = 'none';
                document.getElementById('FrappuccinnoSubcategories').style.display = 'none';
            });
        }

            

       
                 

            // Cart modal event listeners
            const cartLink = document.getElementById('cartLink');
            if (cartLink) {
                cartLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    openCart();
                });
            }
            closeCart.addEventListener('click', closeCartModal);

            // Close modal when clicking outside
            window.addEventListener('click', function(event) {
                if (event.target === cartModal) {
                    closeCartModal();
                }
            });
        });
    }

    

    function updateQuantityWithSize(foodId, size, temp, addon, change) {
        const item = cart.find(item => 
            item.id === foodId && 
            item.size === size && 
            item.temp === temp && 
            item.addon === addon
        );
        
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                removeFromCartWithSize(foodId, size, temp, addon);
            } else {
                updateCartUI();
            }
        }
    }

    function removeFromCartWithSize(foodId, size, temp, addon) {
        cart = cart.filter(item => 
            !(item.id === foodId && item.size === size && item.temp === temp && item.addon === addon)
        );
        updateCartUI();
    }

    const nonCoffeeSubcategories = [
        "Milk Tea",
        "Milkshake",
        "Juice",
        "Yogurt",
        "Refreshers",
        "Hot Tea"
    ];

    const frappuccinoSubcategories = [
        "Coffee Based",
        "Non-Coffee Based"
    ];

    function printBill(billContent) {
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
            <head>
                <title>La Vernice Receipt</title>
                <style>
                    body { font-family: monospace; padding: 20px; }
                    pre { white-space: pre-wrap; }
                </style>
            </head>
            <body>
                <pre>${billContent}</pre>
                <script>
                    window.onload = function () {
                        window.print();
                    }
                </script>
            </body>
            </html>
        `);
        printWindow.document.close();
    }
    function showGCashQR() {
        document.getElementById('qrContainer').style.display = 'block';
    }
    function printBill(billContent) {
        const win = window.open('', '_blank');
        win.document.write(`
            <html>
            <head>
                <title>La Vernice Receipt</title>
                <style>
                    body { font-family: monospace; padding: 20px; }
                    pre { white-space: pre-wrap; }
                </style>
            </head>
            <body>
                <pre>${billContent}</pre>
                <script>
                    window.onload = () => window.print();
                </script>
            </body>
            </html>
        `);
        win.document.close();
    }

    function getCartTotal() {
        return cart.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

// ================================
// KIOSK IDLE TIMER (SAFE VERSION)
// ================================
document.addEventListener('DOMContentLoaded', () => {

    const idleScreen = document.getElementById('idleScreen');
    const menuPage = document.querySelector('.menu-page');
    const header = document.querySelector('header');

    if (!idleScreen) return;

    let idleTimer;
    const IDLE_TIME = 6000  ; // 5 seconds

    function showIdleScreen() {
        idleScreen.style.display = 'flex';
        // DO NOT hide menu or header
    }

    function hideIdleScreen() {
        idleScreen.style.display = 'none';
    }

    // Hide idle screen on first tap anywhere
    idleScreen.addEventListener('click', hideIdleScreen);

    // Reset idle timer on user activity
    function resetIdleTimer() {
        clearTimeout(idleTimer);
        idleTimer = setTimeout(showIdleScreen, IDLE_TIME);
    }

    document.addEventListener('mousemove', resetIdleTimer);
    document.addEventListener('keydown', resetIdleTimer);
    document.addEventListener('touchstart', resetIdleTimer);

    // **Show content immediately**
    if (menuPage) menuPage.style.display = 'block';
    if (header) header.style.display = 'flex';
    displayMenuFoods('Best'); // show featured menu

    resetIdleTimer(); // start idle timer
});

function setActiveFilter(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle(
            'active',
            btn.getAttribute('data-category') === category
        );
    });
}