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
header("Content-Type: application/json");

// Query to fetch student information from the database
$sql = "SELECT * FROM students"; // Assuming 'students' is the table name

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $students = array();
    // Fetch data row by row
    while($row = $result->fetch_assoc()) {
        // Add each row to the $students array
        $students[] = $row;
    }
    // Convert the array to JSON and output it
    echo json_encode($students);
} else {
    // If no students found in the database
    echo json_encode(array());
}

// Close database connection
$conn->close();

?>
