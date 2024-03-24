<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Allow cross-origin requests
header('Access-Control-Allow-Origin: *');
// Set the content type of the response to JSON
header('Content-Type: application/json');

// Database connection
$servername = "localhost";
$username = "root";
$password = "#sirajum@1234";
$database = "group1";
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Handle search query
if(isset($_GET['searchTerm'])) {
    // Sanitize search term
    $searchTerm = mysqli_real_escape_string($conn, $_GET['searchTerm']);
    // Validate search term (optional)
    if (empty($searchTerm)) {
        echo json_encode(["error" => "Search term is empty"]);
        exit;
    }
    // Prepare and execute SQL query
    $sql = "SELECT * FROM tutor WHERE name LIKE ?";
    $stmt = mysqli_prepare($conn, $sql);
    if (!$stmt) {
        echo json_encode(["error" => "Preparation failed: " . mysqli_error($conn)]);
        exit;
    }
    mysqli_stmt_bind_param($stmt, "s", $searchTerm);
    if (!mysqli_stmt_execute($stmt)) {
        echo json_encode(["error" => "Execution failed: " . mysqli_stmt_error($stmt)]);
        exit;
    }
    // Get result set
    $result = mysqli_stmt_get_result($stmt);
    $searchResults = [];
    while($row = mysqli_fetch_assoc($result)) {
        $searchResults[] = $row;
    }
    // Output search results in JSON format
    echo json_encode($searchResults);
} else {
    echo json_encode(["error" => "No search term provided"]);
}

// Close statement
if (isset($stmt)) {
    mysqli_stmt_close($stmt);
}

// Close connection
mysqli_close($conn);
?>
