<?php
require_once "../config/connection.php";
header('Content-Type: application/json');

$query = "SELECT * FROM user WHERE UserType = 'admin'";
$result = mysqli_query($conn, $query);
$admins = [];

while ($row = mysqli_fetch_assoc($result)) {
    $admins[] = $row;
}

echo json_encode($admins);
?>
