<?php
require_once "../config/connection.php";
header('Content-Type: application/json');


if ($conn->connect_error) {
    die(json_encode(['status' => 'error', 'message' => 'Database connection failed: ' . $conn->connect_error]));
}

$data = json_decode(file_get_contents('php://input'), true);

$userID = $data['userID'] ?? null;
$ratingPage = $data['ratingPage'] ?? null;
$ratingService = $data['ratingService'] ?? null;
$scholarshipFeedback = $data['scholarshipFeedback'] ?? null;
$comments = $data['comments'] ?? null;

if ($userID === null || $ratingPage === null || $ratingService === null) {
    echo json_encode(['status' => 'error', 'message' => 'User ID and rating fields are required.']);
    exit;
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO feedback (user_id, rating_page, rating_service, scholarship_feedback, comments) VALUES (?, ?, ?, ?, ?)");
if (!$stmt) {
    echo json_encode(['status' => 'error', 'message' => 'Failed to prepare statement: ' . $conn->error]);
    exit;
}
$stmt->bind_param("iiiss", $userID, $ratingPage, $ratingService, $scholarshipFeedback, $comments);

// Execute the query
if ($stmt->execute()) {
    $updateUser = $conn->prepare("UPDATE `user` SET `feedback_given`= 1 WHERE UserID = ?");
    $updateUser->bind_param("i",$userID);
    $updateUser->execute();
    echo json_encode(['status' => 'success', 'message' => 'Feedback submitted successfully.']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Error inserting data: ' . $stmt->error]);
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
