<?php
// Allow requests from all domains. You can adjust this to only allow requests from specific origins.
header("Access-Control-Allow-Origin: *");
// Allow the following HTTP methods
header("Access-Control-Allow-Methods: POST");
// Allow the Content-Type header to be sent with the request
header("Access-Control-Allow-Headers: Content-Type");

// Retrieve the JSON payload sent from the frontend
$data = json_decode(file_get_contents("php://input"), true);

// Database connection
$servername = "localhost";
$username = "root";
$password = "#sirajum@1234";
$dbname = "siraj";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare SQL statement to insert student information into the database
$stmt = $conn->prepare("INSERT INTO acceptstu (name, email, location, school) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $data['name'], $data['email'], $data['location'], $data['school']);

// Execute the prepared statement
if ($stmt->execute()) {
    echo json_encode(array("message" => "Student information stored successfully"));
} else {
    echo json_encode(array("error" => "Failed to store student information: " . $conn->error));
}

// Close statement and database connection
$stmt->close();
$conn->close();
?>
