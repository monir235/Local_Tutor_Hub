<?php

// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

// Get the posted data
$postData = json_decode(file_get_contents("php://input"), true);

// Connect to your MySQL database
$servername = "localhost";
$username = "root";
$password = "#sirajum@1234"; // Change this to your MySQL password
$dbname = "siraj";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind the SQL statement
$stmt = $conn->prepare("INSERT INTO accept (tutorId, name, availability, mobileNumber, email, location, institution, currentSubject, teachingExperience) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("isssssssi", $postData['tutorId'], $postData['name'], $postData['availability'], $postData['mobileNumber'], $postData['email'], $postData['location'], $postData['institution'], $postData['currentSubject'], $postData['teachingExperience']);

// Execute the statement
if ($stmt->execute()) {
    echo "Data inserted successfully";
} else {
    echo "Error: " . $conn->error;
}

// Close the connection
$stmt->close();
$conn->close();

?>
