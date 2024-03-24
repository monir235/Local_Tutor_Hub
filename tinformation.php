<?php
// tinformation.php

// Allow requests from any origin (replace * with your frontend URL for production)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Database connection
$servername = "localhost";
$username = "root";
$password = "#sirajum@1234";
$database = "siraj";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Query to fetch tutor information from the database
$sql = "SELECT id, name, availability, mobileNumber, email, location, institution, currentSubject FROM tutor";
$result = $conn->query($sql);

$tutors = array();

if ($result->num_rows > 0) {
  // Fetching data and storing it in an array
  while ($row = $result->fetch_assoc()) {
    $tutors[] = $row;
  }
}

// Sending the array as JSON response
echo json_encode($tutors);

// Close connection
$conn->close();
?>
