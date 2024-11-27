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
<<<<<<< HEAD
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

=======
    $pwdID = $_POST['PWD_ID'];

    // Check if data for the given userID exists
    $checkQuery = "SELECT 1 FROM personal_details WHERE userID = ?";
    $stmt = $conn->prepare($checkQuery);
    $stmt->bind_param("i", $userID);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        // Update the existing record
        $updateQuery = "UPDATE personal_details 
                        SET studentID = ?, firstName = ?, middleName = ?, lastName = ?, dateOfBirth = ?, age = ?, 
                            placeOfBirth = ?, province = ?, cityMunicipality = ?, barangay = ?, streetAddress = ?, 
                            sex = ?, civilStatus = ?, pwd = ?, contactNo = ?, pwdID = ?
                        WHERE userID = ?";
        $stmt = $conn->prepare($updateQuery);
        $stmt->bind_param("ssssssssssssssssi", $studentID, $firstName, $middleName, $lastName, $dateOfBirth, $age, 
                          $placeOfBirth, $province, $cityMunicipality, $barangay, $streetAddress, $sex, $civilStatus, 
                          $pwd, $contactNo, $pwdID, $userID);
    } else {
        // Insert a new record
        $insertQuery = "INSERT INTO personal_details (userID, studentID, firstName, middleName, lastName, dateOfBirth, age, placeOfBirth, 
                            province, cityMunicipality, barangay, streetAddress, sex, civilStatus, pwd, contactNo, pwdID) 
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($insertQuery);
        $stmt->bind_param("issssssssssssssss", $userID, $studentID, $firstName, $middleName, $lastName, $dateOfBirth, 
                          $age, $placeOfBirth, $province, $cityMunicipality, $barangay, $streetAddress, $sex, $civilStatus, 
                          $pwd, $contactNo, $pwdID);
    }

    // Execute the appropriate query
>>>>>>> ef9ba032c4ec2e0aef14ad32aafd1476751626d2
    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Personal details saved successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to save personal details']);
    }

    $stmt->close();
    $conn->close();
}
?>
