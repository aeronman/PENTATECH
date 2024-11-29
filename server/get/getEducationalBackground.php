<?php

require_once "../config/connection.php";





    $userID = isset($_GET['userID']) ? $_GET['userID'] : null;

    // fetch personal details using the userID
    $query = "SELECT * FROM educational_bg_data WHERE userID = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $userID); // Bind the userID
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $educBg = $result->fetch_assoc();
        echo json_encode(['success' => true, 'data' => $educBg]);
    } else {
        echo json_encode(['success' => false, 'message' => 'No personal details found']);
    }

    $stmt->close();
    $conn->close();
