<?php

include '../config/connection.php';

$data = json_decode(file_get_contents('php://input'), true);

$username = $data['username'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_BCRYPT);


$query = "INSERT INTO user (Username, Email, Password, UserType) VALUES ('$username', '$email', '$password', 'admin')";
if (mysqli_query($conn, $query)) {
    echo json_encode(['message' => 'Admin added successfully']);
} else {
    echo json_encode(['error' => 'Failed to add admin']);
}
?>
