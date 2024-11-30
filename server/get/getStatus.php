<?php
require_once "../config/connection.php";
header('Content-Type: application/json');

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

if (isset($_GET['userID'])) {
    $userID = $_GET['userID'];

    // Modify the query to also fetch payout_qr
    $stmt = $conn->prepare("SELECT application_status, payout_qr FROM user WHERE UserID = ?");
    $stmt->bind_param("s", $userID);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo json_encode([
            "application_status" => $row['application_status'],
            "payout_qr" => $row['payout_qr'] 
        ]);
    } else {
        echo json_encode(["error" => "No user found with the given UserID"]);
    }

    $stmt->close();
} else {
    echo json_encode(["error" => "UserID parameter is missing"]);
}

$conn->close();
?>
