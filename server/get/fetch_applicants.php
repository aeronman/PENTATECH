<?php
require_once "../config/connection.php";

header('Content-Type: application/json');

if (!$conn) {
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed.']);
    exit();
}

try {
    $query = "
        SELECT 
            u.UserID AS userId,
            pd.Student_ID AS lrn,
            CONCAT(pd.FIRST_NAME, ' ', pd.MIDDLE_NAME, ' ', pd.LAST_NAME) AS name,
            u.email AS email
        FROM 
            user u
        JOIN 
            personal_details pd 
        ON 
            u.UserID = pd.UserId
        WHERE 
            u.UserType = 'student'
            AND u.application_status NOT IN ('Approved', 'Declined')
    ";

    $result = $conn->query($query);

    if (!$result) {
        throw new Exception("Query failed: " . $conn->error);
    }

    $applicants = [];
    while ($row = $result->fetch_assoc()) {
        $row['requirements'] = "All requirements"; 
        $applicants[] = $row;
    }

    echo json_encode(['status' => 'success', 'data' => $applicants]);
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
?>
