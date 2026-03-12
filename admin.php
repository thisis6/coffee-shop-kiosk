<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sales Report - La Vernice</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>

    <?php
    session_start();
    include 'db.php';
    if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
        header("Location: login.php");
        exit();
    }

    // Handle approve, deny, delete
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_POST['approve'])) {
            $order_id = intval($_POST['order_id']);
            // Get order from order_status
            $stmt = $conn->prepare("SELECT total FROM order_status WHERE id = ?");
            $stmt->bind_param("i", $order_id);
            $stmt->execute();
            $result = $stmt->get_result();
            if ($row = $result->fetch_assoc()) {
                // Insert into transaction_history
                $stmt2 = $conn->prepare("INSERT INTO transaction_history (total) VALUES (?)");
                $stmt2->bind_param("d", $row['total']);
                $stmt2->execute();
                $new_id = $conn->insert_id;
                $stmt2->close();

                // Move items
                $stmt3 = $conn->prepare("UPDATE order_items SET order_id = ?, table_name = 'transaction_history' WHERE order_id = ? AND table_name = 'order_status'");
                $stmt3->bind_param("ii", $new_id, $order_id);
                $stmt3->execute();
                $stmt3->close();

                // Delete from order_status
                $stmt4 = $conn->prepare("DELETE FROM order_status WHERE id = ?");
                $stmt4->bind_param("i", $order_id);
                $stmt4->execute();
                $stmt4->close();
            }
            $stmt->close();
        } elseif (isset($_POST['deny'])) {
            $order_id = intval($_POST['order_id']);
            // Delete order and items
            $stmt = $conn->prepare("DELETE FROM order_items WHERE order_id = ? AND table_name = 'order_status'");
            $stmt->bind_param("i", $order_id);
            $stmt->execute();
            $stmt->close();

            $stmt = $conn->prepare("DELETE FROM order_status WHERE id = ?");
            $stmt->bind_param("i", $order_id);
            $stmt->execute();
            $stmt->close();
        } elseif (isset($_POST['delete'])) {
            $order_id = intval($_POST['order_id']);
            // Delete from transaction_history and items
            $stmt = $conn->prepare("DELETE FROM order_items WHERE order_id = ? AND table_name = 'transaction_history'");
            $stmt->bind_param("i", $order_id);
            $stmt->execute();
            $stmt->close();

            $stmt = $conn->prepare("DELETE FROM transaction_history WHERE id = ?");
            $stmt->bind_param("i", $order_id);
            $stmt->execute();
            $stmt->close();
        } elseif (isset($_POST['clear_all'])) {
            // Clear all transaction_history
            $stmt = $conn->prepare("DELETE FROM order_items WHERE table_name = 'transaction_history'");
            $stmt->execute();
            $stmt->close();

            $stmt = $conn->prepare("DELETE FROM transaction_history");
            $stmt->execute();
            $stmt->close();
        }
    }
    ?>

    <!-- Header Section -->
    <header>
        <div class="container">
            <div class="logo">
                <img src="img/logo.jpg" alt="Foodie Delight Logo">
                <h1>Admin / Staff</h1>
            </div>
            <nav>
                <ul class="nav-links">
                    <li><a href="logout.php">Logout</a></li>
                    <!-- <li><a href="index.php">Back to Site</a></li> -->
                </ul>
            </nav>
        </div>
    </header>

    <!-- Sales Report Section -->
    <section class="admin-dashboard">
        <div class="container">
            <h1>Sales Report</h1>

            <!-- Summary Cards -->
            <div class="summary-cards">
                <?php
                $total_orders_result = $conn->query("SELECT COUNT(*) as count FROM transaction_history");
                $total_orders = $total_orders_result->fetch_assoc()['count'];
                
                $total_sales_result = $conn->query("SELECT SUM(total) as sum FROM transaction_history");
                $total_sales = $total_sales_result->fetch_assoc()['sum'] ?? 0;
                
                $average_order = $total_orders > 0 ? $total_sales / $total_orders : 0;
                ?>
                <div class="summary-card">
                    <h3>Total Orders</h3>
                    <p id="totalOrders"><?php echo $total_orders; ?></p>
                </div>
                <div class="summary-card">
                    <h3>Total Sales</h3>
                    <p id="totalSales">₱<?php echo number_format($total_sales, 2); ?></p>
                </div>
                <div class="summary-card">
                    <h3>Average Order</h3>
                    <p id="averageOrder">₱<?php echo number_format($average_order, 2); ?></p>
                </div>
            </div>

            <!-- Order Status Table -->
            <div class="transactions-section">
                <h2>Order Status</h2>
                <table id="orderStatusTable">
                    <thead>
                        <tr>
                            <th style="width: 80px;">Order ID</th>
                            <th style="width: 150px;">Date & Time</th>
                            <th>Items</th>
                            <th style="width: 100px;">Total</th>
                            <th style="width: 120px;">Actions</th>
                        </tr>
                    </thead>
                    <tbody id="orderStatusBody">
                        <?php
                        $result = $conn->query("SELECT * FROM order_status ORDER BY timestamp DESC");
                        while ($order = $result->fetch_assoc()) {
                            $order_id = $order['id'];
                            $timestamp = $order['timestamp'];
                            $total = $order['total'];
                            
                            // Get items
                            $items_result = $conn->query("SELECT * FROM order_items WHERE order_id = $order_id AND table_name = 'order_status'");
                            $items_list = '';
                            while ($item = $items_result->fetch_assoc()) {
                                $price = $item['price'] * $item['quantity'];
                                $items_list .= '<div style="display: flex; align-items: center; margin-bottom: 8px; padding: 8px; border: 1px solid #eee; border-radius: 8px; background: #f9f9fa;">
                                    <img src="' . htmlspecialchars($item['image']) . '" alt="' . htmlspecialchars($item['item_name']) . '" style="width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin-right: 12px; border: 2px solid #ddd;">
                                    <div style="flex-grow: 1;">
                                        <div style="font-weight: bold; font-size: 14px; color: #333; margin-bottom: 4px;">' . htmlspecialchars($item['item_name']) . ' (x' . $item['quantity'] . ')</div>
                                        <div style="font-size: 12px; color: #666; line-height: 1.4;">';
                                if ($item['size']) $items_list .= 'Size: ' . htmlspecialchars($item['size']) . ' • ';
                                if ($item['temp']) $items_list .= 'Temp: ' . htmlspecialchars($item['temp']) . ' • ';
                                if ($item['service']) $items_list .= 'Service: ' . htmlspecialchars($item['service']);
                                if ($item['addon'] && $item['addon'] != 'No Addons') $items_list .= ' • Add-ons: ' . htmlspecialchars($item['addon']);
                                $items_list .= '</div>
                                        <div style="font-weight: bold; font-size: 13px; color: #1e3c72; margin-top: 4px;">₱' . number_format($price, 2) . '</div>
                                    </div>
                                </div>';
                            }
                            
                            echo "<tr>
                                <td>$order_id</td>
                                <td>$timestamp</td>
                                <td>$items_list</td>
                                <td>₱" . number_format($total, 2) . "</td>
                                <td>
                                    <form method='POST' style='display: inline;'>
                                        <input type='hidden' name='order_id' value='$order_id'>
                                        <button type='submit' name='approve' class='btn-approve'>✓</button>
                                    </form>
                                    <form method='POST' style='display: inline;'>
                                        <input type='hidden' name='order_id' value='$order_id'>
                                        <button type='submit' name='deny' class='btn-deny'>✖</button>
                                    </form>
                                </td>
                            </tr>";
                        }
                        ?>
                    </tbody>
                </table>
            </div>

            <br>

            <!-- Transactions Table -->
            <div class="transactions-section">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h2>Transaction History</h2>
                    <form method="POST" style="display: inline;">
                        <button type="submit" name="clear_all" class="btn-clear" onclick="return confirm('Are you sure you want to clear all transaction history?')">Clear All</button>
                    </form>
                </div>
                <table id="transactionsTable">
                    <thead>
                        <tr>
                            <th style="width: 80px;">Order ID</th>
                            <th style="width: 150px;">Date & Time</th>
                            <th>Items</th>
                            <th style="width: 100px;">Total</th>
                            <th style="width: 120px;">Actions</th>
                        </tr>
                    </thead>
                    <tbody id="transactionsBody">
                        <?php
                        $result = $conn->query("SELECT * FROM transaction_history ORDER BY timestamp DESC");
                        while ($order = $result->fetch_assoc()) {
                            $order_id = $order['id'];
                            $timestamp = $order['timestamp'];
                            $total = $order['total'];
                            
                            // Get items
                            $items_result = $conn->query("SELECT * FROM order_items WHERE order_id = $order_id AND table_name = 'transaction_history'");
                            $items_list = '';
                            while ($item = $items_result->fetch_assoc()) {
                                $price = $item['price'] * $item['quantity'];
                                $items_list .= '<div style="display: flex; align-items: center; margin-bottom: 8px; padding: 8px; border: 1px solid #eee; border-radius: 8px; background: #f9f9fa;">
                                    <img src="' . htmlspecialchars($item['image']) . '" alt="' . htmlspecialchars($item['item_name']) . '" style="width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin-right: 12px; border: 2px solid #ddd;">
                                    <div style="flex-grow: 1;">
                                        <div style="font-weight: bold; font-size: 14px; color: #333; margin-bottom: 4px;">' . htmlspecialchars($item['item_name']) . ' (x' . $item['quantity'] . ')</div>
                                        <div style="font-size: 12px; color: #666; line-height: 1.4;">';
                                if ($item['size']) $items_list .= 'Size: ' . htmlspecialchars($item['size']) . ' • ';
                                if ($item['temp']) $items_list .= 'Temp: ' . htmlspecialchars($item['temp']) . ' • ';
                                if ($item['service']) $items_list .= 'Service: ' . htmlspecialchars($item['service']);
                                if ($item['addon'] && $item['addon'] != 'No Addons') $items_list .= ' • Add-ons: ' . htmlspecialchars($item['addon']);
                                $items_list .= '</div>
                                        <div style="font-weight: bold; font-size: 13px; color: #1e3c72; margin-top: 4px;">₱' . number_format($price, 2) . '</div>
                                    </div>
                                </div>';
                            }
                            
                            echo "<tr>
                                <td>$order_id</td>
                                <td>$timestamp</td>
                                <td>$items_list</td>
                                <td>₱" . number_format($total, 2) . "</td>
                                <td>
                                    <form method='POST' style='display: inline;'>
                                        <input type='hidden' name='order_id' value='$order_id'>
                                        <button type='submit' name='delete' class='btn-deny'>🗑</button>
                                    </form>
                                </td>
                            </tr>";
                        }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- <script src="admin.js"></script> -->
</body>
</html></content>