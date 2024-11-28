<?php
require_once "../config/connection.php";

header('Content-Type: application/json');

if (!$conn) {
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed.']);
    exit();
}

try {
    // SQL query to count applicants where application_status is not 'Approved' or 'Declined' and UserType is 'Student'
    $query = "
        SELECT COUNT(*) AS total_applicants
        FROM user
        WHERE application_status NOT IN ('Approved', 'Declined')
        AND UserType = 'Student'
    ";

    $result = $conn->query($query);

    if (!$result) {
        throw new Exception("Query failed: " . $conn->error);
    }

    $row = $result->fetch_assoc();

    echo json_encode(['status' => 'success', 'data' => $row['total_applicants']]);
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}

$conn->close();
?>
