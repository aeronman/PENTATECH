<?php

require_once "../config/connection.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $userID = $_POST['userID'];
    $studentID = $_POST['Student_ID'];
    $firstName = $_POST['FIRST_NAME'];
    $middleName = $_POST['MIDDLE_NAME'];
    $lastName = $_POST['LAST_NAME'];
    $dateOfBirth = $_POST['DATE_OF_BIRTH'];
    $age = $_POST['age'];
    $placeOfBirth = $_POST['PLACE_OF_BIRTH'];
    $province = $_POST['Province'];
    $cityMunicipality = $_POST['CITY_MUNICIPALITY'];
    $barangay = $_POST['BARANGAY'];
    $streetAddress = $_POST['STREET_ADDRESS'];
    $sex = $_POST['SEX'];
    $civilStatus = $_POST['CIVIL_STATUS'];
    $pwd = $_POST['PWD'];
    $contactNo = $_POST['CONTACT_NO'];
    $pwdID = $_POST['PWD_ID']; 

    // Query to insert or update personal details
    $query = "INSERT INTO personal_details (userID, studentID, firstName, middleName, lastName, dateOfBirth, age, placeOfBirth, 
            province, cityMunicipality, barangay, streetAddress, sex, civilStatus, pwd, contactNo, pwdID) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)
            ON DUPLICATE KEY UPDATE studentID = ?, firstName = ?, middleName = ?, lastName = ?, dateOfBirth = ?, age = ?, placeOfBirth = ?, 
            province = ?, cityMunicipality = ?, barangay = ?, streetAddress = ?, sex = ?, civilStatus = ?, pwd = ?, contactNo = ?, pwdID = ?";


    $stmt = $conn->prepare($query);
    $stmt->bind_param("issssssssssssssssssssssssssssssss", $userID, $studentID, $firstName, $middleName, $lastName, $dateOfBirth, 
                     $age, $placeOfBirth, $province, $cityMunicipality, $barangay, $streetAddress, $sex, $civilStatus, 
                     $pwd, $contactNo, $pwdID, $studentID, $firstName, $middleName, $lastName, $dateOfBirth, $age, 
                     $placeOfBirth, $province, $cityMunicipality, $barangay, $streetAddress, $sex, $civilStatus, $pwd, 
                     $contactNo, $pwdID);

    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Personal details saved successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to save personal details']);
    }

    $stmt->close();
    $conn->close();
}
?>
