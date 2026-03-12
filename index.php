<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>La Vernice </title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="manifest" href="/lv-coffee/manifest.json">
</head>
<body>

<?php
session_start();
include 'db.php';

// Check for success message
$success_script = '';
if (isset($_GET['success']) && isset($_GET['order_id'])) {
    $order_id = intval($_GET['order_id']);
    // Fetch the order data to show bill
    $stmt = $conn->prepare("SELECT * FROM order_items WHERE order_id = ? AND table_name = 'order_status'");
    $stmt->bind_param("i", $order_id);
    $stmt->execute();
    $result = $stmt->get_result();
    $items = [];
    while ($row = $result->fetch_assoc()) {
        $items[] = [
            'name' => $row['item_name'],
            'size' => $row['size'],
            'temp' => $row['temp'],
            'service' => $row['service'],
            'addon' => $row['addon'],
            'price' => floatval($row['price']),
            'quantity' => $row['quantity'],
            'image' => $row['image']
        ];
    }
    $stmt->close();
    
    $stmt = $conn->prepare("SELECT total FROM order_status WHERE id = ?");
    $stmt->bind_param("i", $order_id);
    $stmt->execute();
    $total = $stmt->get_result()->fetch_assoc()['total'];
    $stmt->close();
    
    $order = ['items' => $items, 'total' => $total, 'timestamp' => date('c')];
    $success_script = "<script>alert('Order placed successfully!');</script>";
    $success_script .= "<script>history.replaceState(null, null, window.location.pathname);</script>";
}

// Handle checkout
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['checkout'])) {
    $cart_data = json_decode($_POST['cart_data'] ?? '[]', true);
    $total = floatval($_POST['total'] ?? 0);

    if (is_array($cart_data)) {
        if (!empty($cart_data)) {
            // Insert into order_status
            $stmt = $conn->prepare("INSERT INTO order_status (total) VALUES (?)");
            $stmt->bind_param("d", $total);
            $stmt->execute();
            $order_id = $conn->insert_id;
            $stmt->close();

            // Insert items
            foreach ($cart_data as $item) {
                $stmt = $conn->prepare("INSERT INTO order_items (order_id, table_name, item_name, size, temp, service, addon, price, quantity, image) VALUES (?, 'order_status', ?, ?, ?, ?, ?, ?, ?, ?)");
                $stmt->bind_param("isssssdis", $order_id, $item['name'], $item['size'], $item['temp'], $item['service'], $item['addon'], $item['price'], $item['quantity'], $item['image']);
                $stmt->execute();
                $stmt->close();
            }

            header("Location: index.php?success=1&order_id=$order_id");
            exit;
        } else {
            echo "<script>alert('Your cart is empty!');</script>";
        }
    } else {
        echo "<script>alert('Error: Invalid cart data.');</script>";
    }
}
?>

    <!-- Header Section -->
    <header>
        <div class="container">
            <div class="logo">
                <img src="img/logo.jpg" alt="La Vernice">
                <h1>La Vernice</h1>
            </div>
            
        <nav>
    <ul class="nav-links" style="display: flex; align-items: center; gap: 15px; list-style: none; margin: 0; padding: 0;">
        
<!-- SEARCH BAR -->
        <li class="header-search">
            <input
                type="text"
                id="menuSearchInput"
                placeholder="Search menu..."
                autocomplete="off"
            />
        </li>


        <!-- Cart -->
        <!-- <li><a href="admin.php">Admin</a></li> -->
        <li>
            <a href="#" id="cartLink" style="position: relative; font-size: 44px; color: #333;">
                <i class="fas fa-shopping-cart"></i>
                <span class="cart-count" style="position: absolute; top: -8px; right: -10px; background: red; color: white; border-radius: 50%; padding: 2px 6px; font-size: 12px;">0</span>
            </a>
        </li>
    </ul>
</nav>


        </div>
    </header>

    

     <!-- Menu Section -->
    <section class="menu-page">
        <div class="container">
            <div class="menu-header">
                <h1>LV Menu Test</h1>
                <p>Beverages and Pastries</p>
            </div>
            
            <div class="filter-buttons">
                <button class="filter-btn active" data-category="Best">Best Sellers</button>
                <button class="filter-btn" data-category="Frap">Frappuccino</button>
                <button class="filter-btn" data-category="Coffee">Coffee</button>
                <button class="filter-btn" data-category="Non-Coffee">Non-Coffee</button>
                <button class="filter-btn" data-category="Ice Foam">Ice Foam Series</button>
                <button class="filter-btn" data-category="Pastries">Pastries</button>
            </div>
            <div id="nonCoffeeSubcategories" class="subcategory-buttons" style="display:none;"></div>
            <div id="FrappuccinnoSubcategories" class="subcategory-buttons" style="display:none;"></div>
            
            <div class="food-grid" id="menuFoods">
                <!-- Menu items will be loaded here by JavaScript -->
            </div>
        </div>
    </section>



    <!-- Cart Modal -->
    <div class="cart-modal" id="cartModal">
        <div class="cart-content">
            <div class="cart-header">
                <h2>Your Cart</h2>
                <span class="close-btn" id="closeCart">&times;</span>
            </div>
            <div class="cart-body">
                <div id="cartItems">
                    <!-- Cart items will be loaded here -->
                    <p class="empty-cart-message">Your cart is empty</p>
                </div>
                <div class="cart-footer">
                    <div class="cart-total">
                        <h3>Total: ₱<span id="cartTotal">0.00</span></h3>
                    </div>
                    <form id="checkoutForm" method="POST" style="display: inline;">
                        <input type="hidden" name="checkout" value="1">
                        <input type="hidden" id="cartDataInput" name="cart_data">
                        <input type="hidden" id="totalInput" name="total">
                        <button type="button" id="checkoutBtn" class="btn-primary checkout-btn">Checkout</button>
                    </form>
                </div>
            </div>
        </div>
    </div>



<!-- Size & Temperature & Addon Modal -->
<div class="selection-modal" id="selectionModal">
    <div id="modalPrice" class="modal-price">₱0</div>
    <div class="selection-content">
        <span class="close-btn" id="closeSelection" style="float:right; cursor:pointer; font-size:28px;">&times;</span>
        <h3 id="selectionTitle">Select Options</h3>
        
        <div class="selection-group">
            <p>Size:</p>
            <button class="size-btn" data-size="Grande">Grande</button>
            <button class="size-btn" data-size="Venti">Venti</button>
        </div>
        
       <div class="selection-group" id="tempSelectionGroup">
       <p>Temperature:</p>
        <button class="temp-btn" data-temp="Hot">Hot</button>
        <button class="temp-btn" data-temp="Cold">Cold</button>
       </div>

       <div class="selection-group" id="serviceTypeGroup">
    <p>Service Type:</p>
    <button class="service-btn active" data-service="Dine In">Dine In</button>
    <button class="service-btn" data-service="Take Out">Take Out</button>
</div>

        <div class="selection-group">
            <p>Add-ons:</p>
            <button class="addon-btn active" data-addon="No Addons" data-price="0">No Addons</button>
            <button class="addon-btn" data-addon="Coffee Jelly" data-price="15">Coffee Jelly (+₱15)</button>
            <button class="addon-btn" data-addon="Sub Oat Milk" data-price="50">Sub Oat Milk (+₱50)</button>
            <button class="addon-btn" data-addon="Extra Espresso Shot" data-price="70">Extra Espresso Shot (+₱70)</button>
        </div>
        
        <button id="confirmSelection">Add to Cart</button>
    </div>
</div>



<script src="script.js"></script>

<?php echo $success_script; ?>

<script>
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/lv-coffee/sw.js')
        .then(() => console.log("Service Worker Registered"));
    }
</script>

</body>
<!-- IDLE SCREEN -->
<div id="idleScreen">
    <div class="idle-overlay"></div>

    <div class="idle-content">
        <h1>Welcome to La Vernice </h1>
        <h2>Donuts and Cafe</h2>
        <p>Tap anywhere to begin ordering</p>
    </div>
</div>
</html>