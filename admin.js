// Admin Dashboard Script

// DOM Elements
const totalOrdersEl = document.getElementById('totalOrders');
const totalSalesEl = document.getElementById('totalSales');
const averageOrderEl = document.getElementById('averageOrder');
const transactionsBody = document.getElementById('transactionsBody');
const orderStatusBody = document.getElementById('orderStatusBody');

// Initialize the admin dashboard
document.addEventListener('DOMContentLoaded', function() {
    loadSalesReport();
    loadPendingOrders();
    
    // Add event listener for Clear All button
    document.getElementById('clearAllBtn').addEventListener('click', clearAllTransactions);
});

// Load sales report from localStorage
function loadSalesReport() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    // Sort orders by timestamp descending (latest first)
    orders.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    // Calculate summary
    const totalOrders = orders.length;
    const totalSales = orders.reduce((sum, order) => sum + order.total, 0);
    const averageOrder = totalOrders > 0 ? totalSales / totalOrders : 0;

    // Update summary
    totalOrdersEl.textContent = totalOrders;
    totalSalesEl.textContent = `₱${totalSales.toFixed(2)}`;
    averageOrderEl.textContent = `₱${averageOrder.toFixed(2)}`;

    // Display transactions
    displayTransactions(orders);
}

// Display transactions in table
function displayTransactions(orders) {
    transactionsBody.innerHTML = '';

    orders.forEach((order, index) => {
        const row = document.createElement('tr');

        // Order ID (sequential based on position in completed orders)
        const orderId = index + 1;

        // Format timestamp
        const date = new Date(order.timestamp);
        const formattedDate = date.toLocaleString();

        // Items list with images and selections
        const itemsList = order.items.map(item => {
            let details = `
                <div style="display: flex; align-items: center; margin-bottom: 8px; padding: 8px; border: 1px solid #eee; border-radius: 8px; background: #f9f9fa;">
                    <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin-right: 12px; border: 2px solid #ddd;">
                    <div style="flex-grow: 1;">
                        <div style="font-weight: bold; font-size: 14px; color: #333; margin-bottom: 4px;">${item.name} (x${item.quantity})</div>
                        <div style="font-size: 12px; color: #666; line-height: 1.4;">`;
            if (item.size) details += `Size: ${item.size} • `;
            if (item.temp) details += `Temp: ${item.temp} • `;
            if (item.service) details += `Service: ${item.service}`;
            if (item.addon && item.addon !== 'No Addons') details += ` • Add-ons: ${item.addon}`;
            details += `</div>
                        <div style="font-weight: bold; font-size: 13px; color: #1e3c72; margin-top: 4px;">₱${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                </div>`;
            return details;
        }).join('');

        row.innerHTML = `
            <td style="font-weight: bold; color: #1e3c72;">${orderId}</td>
            <td style="font-size: 13px;">${formattedDate}</td>
            <td>${itemsList}</td>
            <td style="font-weight: bold; font-size: 16px; color: #2a5298;">₱${order.total.toFixed(2)}</td>
            <td>
                <button class="btn-deny" onclick="deleteOrder('${order.id}')" title="Delete Order">🗑</button>
            </td>
        `;

        transactionsBody.appendChild(row);
    });
}

// Load and display pending orders
function loadPendingOrders() {
    const pendingOrders = JSON.parse(localStorage.getItem('pendingOrders')) || [];
    
    // Sort by timestamp descending (latest first)
    pendingOrders.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    displayPendingOrders(pendingOrders);
}

// Display pending orders in table
function displayPendingOrders(orders) {
    orderStatusBody.innerHTML = '';

    if (orders.length === 0) {
        const emptyRow = document.createElement('tr');
        emptyRow.innerHTML = '<td colspan="5" style="text-align: center;">No pending orders</td>';
        orderStatusBody.appendChild(emptyRow);
        return;
    }

    orders.forEach((order, index) => {
        const row = document.createElement('tr');

        // Order ID (sequential based on position in pending orders)
        const orderId = index + 1;

        // Format timestamp
        const date = new Date(order.timestamp);
        const formattedDate = date.toLocaleString();

        // Items list with images and selections
        const itemsList = order.items.map(item => {
            let details = `
                <div style="display: flex; align-items: center; margin-bottom: 8px; padding: 8px; border: 1px solid #eee; border-radius: 8px; background: #f9f9fa;">
                    <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin-right: 12px; border: 2px solid #ddd;">
                    <div style="flex-grow: 1;">
                        <div style="font-weight: bold; font-size: 14px; color: #333; margin-bottom: 4px;">${item.name} (x${item.quantity})</div>
                        <div style="font-size: 12px; color: #666; line-height: 1.4;">`;
            if (item.size) details += `Size: ${item.size} • `;
            if (item.temp) details += `Temp: ${item.temp} • `;
            if (item.service) details += `Service: ${item.service}`;
            if (item.addon && item.addon !== 'No Addons') details += ` • Add-ons: ${item.addon}`;
            details += `</div>
                        <div style="font-weight: bold; font-size: 13px; color: #1e3c72; margin-top: 4px;">₱${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                </div>`;
            return details;
        }).join('');

        row.innerHTML = `
            <td style="font-weight: bold; color: #1e3c72;">${orderId}</td>
            <td style="font-size: 13px;">${formattedDate}</td>
            <td>${itemsList}</td>
            <td style="font-weight: bold; font-size: 16px; color: #2a5298;">₱${order.total.toFixed(2)}</td>
            <td>
                <button class="btn-approve" onclick="approveOrder('${order.id}')" title="Approve Order">✓</button>
                <button class="btn-deny" onclick="denyOrder('${order.id}')" title="Deny Order">✖</button>
            </td>
        `;

        orderStatusBody.appendChild(row);
    });
}

// Approve order - move from pending to completed orders
function approveOrder(orderId) {
    const pendingOrders = JSON.parse(localStorage.getItem('pendingOrders')) || [];
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    
    // Find the order in pending orders
    const orderIndex = pendingOrders.findIndex(order => order.id === orderId);
    if (orderIndex !== -1) {
        const approvedOrder = pendingOrders.splice(orderIndex, 1)[0];
        approvedOrder.status = 'approved';
        
        // Add to completed orders
        orders.push(approvedOrder);
        
        // Save back to localStorage
        localStorage.setItem('pendingOrders', JSON.stringify(pendingOrders));
        localStorage.setItem('orders', JSON.stringify(orders));
        
        // Refresh displays
        loadPendingOrders();
        loadSalesReport();
        
        alert('Order approved and moved to Transaction History');
    }
}

// Deny order - remove from pending orders
function denyOrder(orderId) {
    const pendingOrders = JSON.parse(localStorage.getItem('pendingOrders')) || [];
    
    // Find and remove the order
    const orderIndex = pendingOrders.findIndex(order => order.id === orderId);
    if (orderIndex !== -1) {
        pendingOrders.splice(orderIndex, 1);
        
        // Save back to localStorage
        localStorage.setItem('pendingOrders', JSON.stringify(pendingOrders));
        
        // Refresh displays
        loadPendingOrders();
        
        alert('Order denied and removed');
    }
}

// Clear all transaction history
function clearAllTransactions() {
    if (confirm('Are you sure you want to clear all transaction history? This action cannot be undone.')) {
        localStorage.removeItem('orders');
        loadSalesReport();
        alert('All transaction history has been cleared.');
    }
}

// Delete a specific order from transaction history
function deleteOrder(orderId) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    
    // Find and remove the order
    const orderIndex = orders.findIndex(order => order.id === orderId);
    if (orderIndex !== -1) {
        orders.splice(orderIndex, 1);
        
        // Save back to localStorage
        localStorage.setItem('orders', JSON.stringify(orders));
        
        // Refresh displays
        loadSalesReport();
        
        alert('Order has been deleted from transaction history.');
    }
}
