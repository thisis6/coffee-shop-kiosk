<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "lv_coffee";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>