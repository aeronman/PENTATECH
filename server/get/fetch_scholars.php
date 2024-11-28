<?php
require_once "../config/connection.php";


$sql = "SELECT 
            p.Student_ID, 
            CONCAT(p.FIRST_NAME, ' ', p.MIDDLE_NAME, ' ', p.LAST_NAME) AS name,
            CONCAT(p.STREET_ADDRESS, ', ', p.BARANGAY, ', ', p.CITY_MUNICIPALITY, ', ', p.PROVINCE) AS address,
            u.program_applied AS program
        FROM personal_details p
        JOIN user u ON p.UserID = u.UserID";


$result = mysqli_query($conn, $sql);


$scholars = [];

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $scholars[] = [
            'id' => $row['Student_ID'],
            'name' => $row['name'],
            'address' => $row['address'],
            'program' => $row['program']
        ];
    }
}


header('Content-Type: application/json');
echo json_encode($scholars);

?>
