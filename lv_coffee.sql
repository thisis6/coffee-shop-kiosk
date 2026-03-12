-- Create database (if it doesn't exist)
CREATE DATABASE IF NOT EXISTS lv_coffee;
USE lv_coffee;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Note: In production, passwords should be hashed using password_hash()
INSERT INTO users (username, password) VALUES ('admin', 'test123')
ON DUPLICATE KEY UPDATE password = 'test123';

-- Create order_status table for pending orders
CREATE TABLE IF NOT EXISTS order_status (
    id INT AUTO_INCREMENT PRIMARY KEY,
    total DECIMAL(10,2) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'pending'
);

-- Create transaction_history table for approved orders
CREATE TABLE IF NOT EXISTS transaction_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    total DECIMAL(10,2) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'approved'
);

-- Create order_items table for order details
CREATE TABLE IF NOT EXISTS order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    table_name VARCHAR(20) NOT NULL, -- 'order_status' or 'transaction_history'
    item_name VARCHAR(100) NOT NULL,
    size VARCHAR(20),
    temp VARCHAR(20),
    service VARCHAR(20),
    addon VARCHAR(100),
    price DECIMAL(10,2) NOT NULL,
    quantity INT NOT NULL,
    image VARCHAR(255)
);

-- Drop foreign keys if they exist (in case of re-run)
SET FOREIGN_KEY_CHECKS = 0;
ALTER TABLE order_items DROP FOREIGN KEY IF EXISTS order_items_ibfk_1;
ALTER TABLE order_items DROP FOREIGN KEY IF EXISTS order_items_ibfk_2;
SET FOREIGN_KEY_CHECKS = 1;

-- Optional: Create additional test users
-- INSERT INTO users (username, password) VALUES ('staff', 'staff123');