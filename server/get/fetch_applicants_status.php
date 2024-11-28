<?php
require_once "../config/connection.php";

if ($conn->connect_error) {
    echo json_encode(['error' => 'Database connection failed: ' . $conn->connect_error]);
    exit();
}

$sql = "
    SELECT 
        pd.UserID,
        CONCAT(pd.FIRST_NAME, ' ', pd.MIDDLE_NAME, ' ', pd.LAST_NAME) AS name,
        pd.CONTACT_NO AS mobile,
        u.Email AS email,
        CASE 
            WHEN u.application_status = 'Approved' THEN 'Approved'
            WHEN u.application_status = 'Declined' THEN 'Declined'
            ELSE 'In Progress'
        END AS status
    FROM 
        personal_details pd
    JOIN 
        user u ON pd.userID = u.UserID
    WHERE 
        u.UserType = 'student';
";

$result = $conn->query($sql);

if ($result) {
    $data = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data);
} else {
    echo json_encode(['error' => 'Query error: ' . $conn->error]);
}

$conn->close();
?>
