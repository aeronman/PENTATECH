<?php
include '../config/connection.php';
$data = json_decode(file_get_contents('php://input'), true);

$userID = $data['userID'];
$username = $data['username'];
$email = $data['email'];
$password = $data['password'] ? password_hash($data['password'], PASSWORD_BCRYPT) : null;

$query = "UPDATE user SET Username = '$username', Email = '$email'";

if ($password) {
    $query .= ", Password = '$password'";
}

$query .= " WHERE UserID = $userID";

if (mysqli_query($conn, $query)) {
    echo json_encode(['message' => 'Admin updated successfully']);
} else {
    echo json_encode(['error' => 'Failed to update admin']);
}
?>
