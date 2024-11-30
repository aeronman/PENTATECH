<?php
require_once "../config/connection.php";
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['view_id'], $data['application_status'])) {
    $view_id = $data['view_id'];
    $application_status = $data['application_status'];
    $interview_schedule = $data['interview_schedule'] ?? null;
    $payout_qr = $data['payout_qr'] ?? null; // QR code value (Base64)

    $sql = "UPDATE user SET application_status = ?, interview_schedule = ?, payout_qr = ? WHERE UserId = ?";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("sssi", $application_status, $interview_schedule, $payout_qr, $view_id);
        if ($stmt->execute()) {
            echo json_encode(["success" => true]);
        } else {
            echo json_encode(["success" => false, "error" => $stmt->error]);
        }
        $stmt->close();
    } else {
        echo json_encode(["success" => false, "error" => $conn->error]);
    }
} else {
    echo json_encode(["success" => false, "error" => "Invalid input"]);
}

$conn->close();
?>
