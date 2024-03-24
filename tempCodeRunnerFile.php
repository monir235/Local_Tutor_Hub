<?php
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
    $searchTerm = $_GET['searchTerm'];
    $sql = "SELECT * FROM tutor WHERE name LIKE ?";
    $stmt = mysqli_prepare($conn, $sql);

    // Bind parameters
    mysqli_stmt_bind_param($stmt, "s", $searchTerm);
    
    // Execute query
    mysqli_stmt_execute($stmt);
    
    // Get result set
    $result = mysqli_stmt_get_result($stmt);

    $searchResults = array();
    if (mysqli_num_rows($result) > 0) {
        // Store search results in an array
        while($row = mysqli_fetch_assoc($result)) {
            $searchResults[] = $row;
        }
    }

    // Output search results in JSON format
    header('Content-Type: application/json');
    echo json_encode($searchResults);
} else {
    echo "No search term provided";
}

// Close statement
mysqli_stmt_close($stmt);

// Close connection
mysqli_close($conn);
?>