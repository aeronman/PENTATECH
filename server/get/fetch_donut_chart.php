<?php
require_once "../config/connection.php";

header('Content-Type: application/json');

if (!$conn) {
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed.']);
    exit();
}

try {
    // SQL query to count applicants based on application_status
    $query = "
        SELECT 
            SUM(CASE WHEN application_status NOT IN ('Approved', 'Declined') THEN 1 ELSE 0 END) AS in_progress,
            SUM(CASE WHEN application_status = 'Approved' THEN 1 ELSE 0 END) AS approved,
            SUM(CASE WHEN application_status = 'Declined' THEN 1 ELSE 0 END) AS declined
        FROM user
        WHERE UserType = 'Student'
    ";

    $result = $conn->query($query);

    if (!$result) {
        throw new Exception("Query failed: " . $conn->error);
    }

    $row = $result->fetch_assoc();

    // Prepare the data to send as response
    $applicantData = [
        'inProgress' => (int) $row['in_progress'],
        'approved' => (int) $row['approved'],
        'declined' => (int) $row['declined']
    ];

    echo json_encode(['status' => 'success', 'data' => $applicantData]);
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}

$conn->close();
?>
