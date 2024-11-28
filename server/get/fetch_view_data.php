<?php
require_once "../config/connection.php";
header('Content-Type: application/json');



if ($conn->connect_error) {
    die(json_encode(['error' => 'Database connection failed: ' . $conn->connect_error]));
}


$userID = $_GET['view_id'] ?? null;

if (!$userID) {
    echo json_encode(['error' => 'No userID provided.']);
    exit;
}

// Prepare queries for each table
$queries = [
    'personal_details' => "SELECT * FROM personal_details WHERE userID = ?",
    'family_data' => "SELECT * FROM family_data WHERE userID = ?",
    'educational_bg_data' => "SELECT * FROM educational_bg_data WHERE userID = ?",
    'documents_data' => "SELECT * FROM documents_data WHERE userID = ?",
    'user' => "SELECT program_applied FROM user WHERE userID = ?"
];

// Execute queries and fetch data
$data = [];
foreach ($queries as $key => $sql) {
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $userID);
    $stmt->execute();
    $result = $stmt->get_result();
    $data[$key] = $result->fetch_assoc();
    $stmt->close();
}

$conn->close();

// Return the data as a JSON response
echo json_encode($data);
?>
