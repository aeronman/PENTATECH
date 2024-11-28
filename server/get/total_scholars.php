<?php
require_once "../config/connection.php";

header('Content-Type: application/json');

if (!$conn) {
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed.']);
    exit();
}

try {
    $query = "
        SELECT COUNT(*) AS total_scholars
        FROM user
        WHERE application_status = 'Approved'
    ";

    $result = $conn->query($query);

    if (!$result) {
        throw new Exception("Query failed: " . $conn->error);
    }

    $row = $result->fetch_assoc();

    echo json_encode(['status' => 'success', 'data' => $row['total_scholars']]);
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}

$conn->close();
?>
