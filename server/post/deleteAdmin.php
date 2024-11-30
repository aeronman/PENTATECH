<?php
include '../config/connection.php';

$id = $_GET['id'];

$query = "DELETE FROM user WHERE userID = $id";
if (mysqli_query($conn, $query)) {
    echo json_encode(['message' => 'Admin deleted successfully']);
} else {
    echo json_encode(['error' => 'Failed to delete admin']);
}
?>
