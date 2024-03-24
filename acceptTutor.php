<?php
// acceptTutor.php

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

// Retrieving JSON data from the request body
$data = json_decode(file_get_contents('php://input'), true);

// Inserting accepted tutor information into another database table
$stmt = $conn->prepare("INSERT INTO accepttutor (id, name, availability, mobileNumber, email, location, institution, currentSubject) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("isssssss", $data['id'], $data['name'], $data['availability'], $data['mobileNumber'], $data['email'], $data['location'], $data['institution'], $data['currentSubject']);

if ($stmt->execute()) {
  echo json_encode(array('message' => 'Tutor information accepted successfully!'));
} else {
  echo json_encode(array('error' => 'Failed to accept tutor information'));
}

// Close connection
$stmt->close();
$conn->close();
?>
