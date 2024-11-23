<?php
include '../config/connection.php'; // Adjusted to include the connection file in the config folder
header('Content-Type: application/json');

$response = ['success' => false, 'message' => ''];

// Get the page parameter to identify which form section is being submitted
$page = $_POST['page'] ?? null;

try {
    if ($page === 'personalInfo') {
        // Retrieve fields from the POST request
        $studentID = $_POST['Student_ID'] ?? null;
        $firstName = $_POST['FIRST_NAME'] ?? null;
        $middleName = $_POST['MIDDLE_NAME'] ?? null;
        $lastName = $_POST['LAST_NAME'] ?? null;
        $dateOfBirth = $_POST['DATE_OF_BIRTH'] ?? null;
        $sex = $_POST['SEX'] ?? null;
        $contactNo = $_POST['CONTACT_NO'] ?? null;
        $placeOfBirth = $_POST['PLACE_OF_BIRTH'] ?? null;
        $barangay = $_POST['BARANGAY'] ?? null;
        $streetAddress = $_POST['STREET_ADDRESS'] ?? null;
        $pwd = isset($_POST['PWD']) ? intval($_POST['PWD']) : null;
        $religion = $_POST['RELIGION'] ?? null;
        $civilStatus = $_POST['CIVIL_STATUS'] ?? null;

        // **Validation code**: Check for required fields
        if (empty($studentID) || empty($firstName) || empty($lastName) || empty($dateOfBirth) || 
            empty($sex) || empty($contactNo) || empty($placeOfBirth) || empty($barangay) || 
            empty($streetAddress) || $pwd === null || empty($religion) || empty($civilStatus)) {
            $response['message'] = 'Please fill in all required fields.';
            echo json_encode($response);
            exit;
        }

        // Prepare the SQL statement
        $stmt = $pdo->prepare("
            INSERT INTO student 
            (Student_ID, FIRST_NAME, MIDDLE_NAME, LAST_NAME, DATE_OF_BIRTH, SEX, CONTACT_NO, PLACE_OF_BIRTH, BARANGAY, STREET_ADDRESS, PWD, RELIGION, CIVIL_STATUS) 
            VALUES 
            (:Student_ID, :FIRST_NAME, :MIDDLE_NAME, :LAST_NAME, :DATE_OF_BIRTH, :SEX, :CONTACT_NO, :PLACE_OF_BIRTH, :BARANGAY, :STREET_ADDRESS, :PWD, :RELIGION, :CIVIL_STATUS)
            ON DUPLICATE KEY UPDATE 
            Student_ID = :Student_ID, FIRST_NAME = :FIRST_NAME, MIDDLE_NAME = :MIDDLE_NAME, LAST_NAME = :LAST_NAME, DATE_OF_BIRTH = :DATE_OF_BIRTH, SEX = :SEX, CONTACT_NO = :CONTACT_NO, 
            PLACE_OF_BIRTH = :PLACE_OF_BIRTH, BARANGAY = :BARANGAY, STREET_ADDRESS = :STREET_ADDRESS, PWD = :PWD, RELIGION = :RELIGION, CIVIL_STATUS = :CIVIL_STATUS
        ");

        // Execute the statement with bound parameters
        $stmt->execute([
            ':Student_ID' => $studentID,
            ':FIRST_NAME' => $firstName,
            ':MIDDLE_NAME' => $middleName,
            ':LAST_NAME' => $lastName,
            ':DATE_OF_BIRTH' => $dateOfBirth,
            ':SEX' => $sex,
            ':CONTACT_NO' => $contactNo,
            ':PLACE_OF_BIRTH' => $placeOfBirth,
            ':BARANGAY' => $barangay,
            ':STREET_ADDRESS' => $streetAddress,
            ':PWD' => $pwd,
            ':RELIGION' => $religion,
            ':CIVIL_STATUS' => $civilStatus,
        ]);

        $response['success'] = true;
        $response['message'] = 'Personal information saved successfully!';
    } elseif ($page === 'familyInfo') {
        // Add logic for handling family information based on the family fields in your database
        $response['success'] = true;
        $response['message'] = 'Family information saved successfully!';
    }
    // Add more elseif cases for other form pages as needed
} catch (PDOException $e) {
    $response['message'] = 'Failed to save data: ' . $e->getMessage();
}

// Return JSON response
echo json_encode($response);
?>
