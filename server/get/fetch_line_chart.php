<?php
require_once "../config/connection.php";

header('Content-Type: application/json');



$query = "
    SELECT program_applied, COUNT(*) AS student_count
    FROM user
    WHERE UserType = 'Student'  
    GROUP BY program_applied
";


$result = $conn->query($query);


if ($result === false) {
    echo json_encode(['error' => 'Database query failed.']);
    exit;
}


$programCounts = [
    'LMSK' => 0,
    'FASHS' => 0,
    'APKA' => 0,
    'VSCP' => 0,
    'AVSP/ABOSP' => 0,
    'TPKM' => 0,
    'NMMMSP' => 0,
];


while ($row = $result->fetch_assoc()) {
    $program = $row['program_applied'];
    if (array_key_exists($program, $programCounts)) {
        $programCounts[$program] = (int) $row['student_count'];
    }
}

// Return the program counts as a JSON response
echo json_encode($programCounts);

// Close the database connection
$conn->close();
?>
