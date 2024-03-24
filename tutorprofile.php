<?php

// Database connection settings
$servername = "localhost"; // Change this to your database server name
$username = "root"; // Change this to your database username
$password = "#sirajum@1234"; // Change this to your database password
$dbname = "siraj"; // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Get POST data
$postData = json_decode(file_get_contents("php://input"), true);

// Check if email and password are provided
if (isset($postData['email']) && isset($postData['password'])) {
    $email = $postData['email'];
    $password = $postData['password'];

    // Prepare SQL statement to fetch user from the database
    $stmt = $conn->prepare("SELECT id, name, email, password FROM profile1 WHERE email = ? AND password = ?");
    $stmt->bind_param("ss", $email, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if a user with the provided email and password exists
    if ($result->num_rows == 1) {
        // Login successful
        $response = array("success" => true, "message" => "Login successful");
        echo json_encode($response);
    } else {
        // If no match found, login failed
        $response = array("success" => false, "message" => "Invalid email or password");
        echo json_encode($response);
    }

    $stmt->close();
} else {
    // If email or password is not provided
    $response = array("success" => false, "message" => "Email and password are required");
    echo json_encode($response);
}

// Close database connection
$conn->close();

?>
