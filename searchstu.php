<?php

// Set headers for CORS support
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Assuming you have already established a connection to your database
// Replace the placeholders with your actual database credentials
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

// Check if location parameter is passed in the request
if(isset($_GET['location'])) {
    $location = $_GET['location'];

    // Prepare a SQL statement to fetch students based on location
    $sql = "SELECT * FROM students WHERE location LIKE '%$location%'";

    // Execute the query
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Fetch data and return as JSON response
        $students = array();
        while($row = $result->fetch_assoc()) {
            $students[] = $row;
        }
        echo json_encode($students);
    } else {
        // No students found with the given location
        echo json_encode([]);
    }
} else {
    // Location parameter is not provided
    echo json_encode(["error" => "Location parameter is missing"]);
}

// Close connection
$conn->close();

?>
