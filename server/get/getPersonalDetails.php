<?php

require_once "../config/connection.php";

<<<<<<< HEAD
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $userID = $_POST['userId'];

=======

    $userID = isset($_GET['userID']) ? $_GET['userID'] : null;
>>>>>>> ef9ba032c4ec2e0aef14ad32aafd1476751626d2
    // fetch personal details using the userID
    $query = "SELECT * FROM personal_details WHERE userID = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $userID); // Bind the userID
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $personalDetails = $result->fetch_assoc();
        echo json_encode(['success' => true, 'data' => $personalDetails]);
    } else {
        echo json_encode(['success' => false, 'message' => 'No personal details found']);
    }

    $stmt->close();
    $conn->close();
<<<<<<< HEAD
}
=======

>>>>>>> ef9ba032c4ec2e0aef14ad32aafd1476751626d2
?>
