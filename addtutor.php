<?php
// Enable error reporting for debugging - remove this line in production
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Database credentials
$servername = "localhost";
$username = "root";
$password = "#sirajum@1234";
$dbname = "group1";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to create NewTutor table if it doesn't exist
$sql_create_table = "CREATE TABLE IF NOT EXISTS NewTutor (
    tutor_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    availability VARCHAR(255) NOT NULL,
    mobile_no VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    institution VARCHAR(255) NOT NULL,
    current_subject VARCHAR(255) NOT NULL,
    teaching_experience INT NOT NULL
)";

if ($conn->query($sql_create_table) === TRUE) {
    echo "NewTutor table created successfully. ";
} else {
    echo "Error creating NewTutor table: " . $conn->error;
}

// Fetch data from POST request
$name = $_POST['name'] ?? '';
$availability = $_POST['availability'] ?? '';
$mobile_no = $_POST['mobile_no'] ?? '';
$email = $_POST['email'] ?? '';
$location = $_POST['location'] ?? '';
$institution = $_POST['institution'] ?? '';
$current_subject = $_POST['current_subject'] ?? '';
$teaching_experience = $_POST['teaching_experience'] ?? '';

// Validate input
if (empty($name) || empty($availability) || empty($mobile_no) || empty($email) || empty($location) || empty($institution) || empty($current_subject) || $teaching_experience === '') {
    die("Error: Please fill in all required fields.");
}

// SQL query to insert data into the NewTutor table
$sql_insert_data = "INSERT INTO NewTutor (name, availability, mobile_no, email, location, institution, current_subject, teaching_experience) 
        VALUES ('$name', '$availability', '$mobile_no', '$email', '$location', '$institution', '$current_subject', '$teaching_experience')";

if ($conn->query($sql_insert_data) === TRUE) {
    echo "New tutor added successfully";
} else {
    echo "Error: " . $sql_insert_data . "<br>" . $conn->error;
}

$conn->close();
?>