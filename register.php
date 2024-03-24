<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get posted data and decode JSON format
    $data = json_decode(file_get_contents("php://input"));

    // Check if all required fields are present
    if (!empty($data->name) && !empty($data->email) && !empty($data->password) && !empty($data->retypePassword)) {
        // Sanitize and assign posted data to variables
        $name = htmlspecialchars(strip_tags($data->name));
        $email = htmlspecialchars(strip_tags($data->email));
        $password = htmlspecialchars(strip_tags($data->password));
        $retypePassword = htmlspecialchars(strip_tags($data->retypePassword));

        // Validate password matching
        if ($password !== $retypePassword) {
            http_response_code(400);
            echo json_encode(array("message" => "Passwords do not match."));
            exit();
        }

        // Hash the password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Add your database connection logic here
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

        // Prepare and execute SQL statement to insert user data
        $stmt = $conn->prepare("INSERT INTO profile (name, email, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $name, $email, $hashedPassword);

        if ($stmt->execute()) {
            http_response_code(201);
            echo json_encode(array("message" => "User registered successfully."));
        } else {
            http_response_code(503);
            echo json_encode(array("message" => "Unable to register the user."));
        }

        // Close connection
        $stmt->close();
        $conn->close();
    } else {
        // Data is incomplete
        http_response_code(400);
        echo json_encode(array("message" => "Unable to register. Data is incomplete."));
    }
} else {
    // Invalid request method
    http_response_code(405);
    echo json_encode(array("message" => "Method Not Allowed."));
}
?>
