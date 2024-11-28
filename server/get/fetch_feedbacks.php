<?php
require_once "../config/connection.php";

$sql = "SELECT 
            f.id AS feedback_id,
            CONCAT(pd.FIRST_NAME, ' ', pd.MIDDLE_NAME, ' ', pd.LAST_NAME) AS name,
            f.rating_page AS rating_page,
            f.comments AS comments,
            DATE_FORMAT(f.created_at, '%Y-%m-%d %H:%i:%s') AS created_at 
        FROM feedback f
        JOIN personal_details pd ON f.user_id = pd.userID";


$result = mysqli_query($conn, $sql);


$feedbacks = [];

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
    
        $feedbacks[] = [
            'feedback_id' => $row['feedback_id'],
            'name' => $row['name'],
            'rating_page' => (int) $row['rating_page'],
            'comments' => $row['comments'], 
            'status' => 'Not Responded',     
            'created_at' => $row['created_at']
        ];
    }
}

// Return the results as a JSON response
header('Content-Type: application/json');
echo json_encode($feedbacks);
?>
