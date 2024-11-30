<?php
include '../config/connection.php';

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Helper function to sanitize input
function sanitize_input($value) {
    return empty($value) ? null : $value;
}

// Get POST data from React
$data = json_decode(file_get_contents("php://input"));

if (!$data) {
    echo json_encode(["status" => "error", "message" => "Invalid input data"]);
    exit;
}

// Update user table
$updateUser = $conn->prepare("UPDATE `user` SET `program_applied` = ?, `application_status` = ? WHERE UserID = ?");
$updateUser->bind_param(
    "ssi",
    sanitize_input($data->programApplied),
    sanitize_input($data->status),
    sanitize_input($data->personalDetails->userID)
);
$updateUser->execute();

// Update personal details
$personalStmt = $conn->prepare("
    UPDATE personal_details SET 
    Student_ID = ?, 
    FIRST_NAME = ?, 
    MIDDLE_NAME = ?, 
    LAST_NAME = ?, 
    DATE_OF_BIRTH = ?, 
    age = ?, 
    PLACE_OF_BIRTH = ?, 
    Province = ?, 
    CITY_MUNICIPALITY = ?, 
    BARANGAY = ?, 
    STREET_ADDRESS = ?, 
    SEX = ?, 
    CIVIL_STATUS = ?, 
    PWD = ?, 
    RELIGION = ?, 
    CONTACT_NO = ?, 
    PWD_ID = ?, 
    PWDPreview = ? 
    WHERE userID = ?
");

$personalStmt->bind_param(
    "ssssssssssssssssssi",
    sanitize_input($data->personalDetails->Student_ID),
    sanitize_input($data->personalDetails->FIRST_NAME),
    sanitize_input($data->personalDetails->MIDDLE_NAME),
    sanitize_input($data->personalDetails->LAST_NAME),
    sanitize_input($data->personalDetails->DATE_OF_BIRTH),
    sanitize_input($data->personalDetails->age),
    sanitize_input($data->personalDetails->PLACE_OF_BIRTH),
    sanitize_input($data->personalDetails->Province),
    sanitize_input($data->personalDetails->CITY_MUNICIPALITY),
    sanitize_input($data->personalDetails->BARANGAY),
    sanitize_input($data->personalDetails->STREET_ADDRESS),
    sanitize_input($data->personalDetails->SEX),
    sanitize_input($data->personalDetails->CIVIL_STATUS),
    sanitize_input($data->personalDetails->PWD),
    sanitize_input($data->personalDetails->RELIGION),
    sanitize_input($data->personalDetails->CONTACT_NO),
    sanitize_input($data->personalDetails->PWD_ID),
    sanitize_input($data->personalDetails->PWDPreview),
    sanitize_input($data->personalDetails->userID)
);
$personalStmt->execute();

// Update family data
$familyStmt = $conn->prepare("
    UPDATE family_data SET 
    father = ?, 
    fatherOccupation = ?, 
    fatherSalary = ?, 
    mother = ?, 
    motherOccupation = ?, 
    motherSalary = ?, 
    siblingsWithFamily = ?, 
    siblingsWithWork = ?, 
    siblingSalary = ?, 
    siblingsElementary = ?, 
    siblingsHighSchool = ?, 
    siblingsCollege = ?, 
    electricBill = ?, 
    waterBill = ?, 
    otherExpenses = ?
    WHERE userID = ?
");

$familyStmt->bind_param(
    "sssssssssssssssi",
    sanitize_input($data->familyData->father),         
    sanitize_input($data->familyData->fatherOccupation), 
    sanitize_input($data->familyData->fatherSalary),  
    sanitize_input($data->familyData->mother),         
    sanitize_input($data->familyData->motherOccupation),
    sanitize_input($data->familyData->motherSalary), 
    sanitize_input($data->familyData->siblingsWithFamily),
    sanitize_input($data->familyData->siblingsWithWork), 
    sanitize_input($data->familyData->siblingSalary),  
    sanitize_input($data->familyData->siblingsElementary), 
    sanitize_input($data->familyData->siblingsHighSchool), 
    sanitize_input($data->familyData->siblingsCollege), 
    sanitize_input($data->familyData->electricBill),  
    sanitize_input($data->familyData->waterBill),     
    sanitize_input($data->familyData->otherExpenses),  
    sanitize_input($data->personalDetails->userID)
);
$familyStmt->execute();

// Update educational background data
$eduStmt = $conn->prepare("
    UPDATE educational_bg_data SET 
    lastSchool = ?, 
    lastCourse = ?, 
    grades = ?, 
    numOfUnits = ?, 
    newSchool = ?, 
    newCourse = ?, 
    levelYear = ?, 
    semester = ? 
    WHERE userID = ?
");

$eduStmt->bind_param(
    "sssissssi",
    sanitize_input($data->educationalBgData->lastSchool),
    sanitize_input($data->educationalBgData->lastCourse),
    sanitize_input($data->educationalBgData->grades),
    sanitize_input($data->educationalBgData->numOfUnits),
    sanitize_input($data->educationalBgData->newSchool),
    sanitize_input($data->educationalBgData->newCourse),
    sanitize_input($data->educationalBgData->levelYear),
    sanitize_input($data->educationalBgData->semester),
    sanitize_input($data->personalDetails->userID)
);
$eduStmt->execute();

// Update documents data
$docsStmt = $conn->prepare("
    UPDATE documents_data SET 
    bills = ?, 
    brgyIndigency = ?, 
    cedula = ?, 
    socialCase = ?, 
    form138 = ?, 
    certificateEnrollment = ?, 
    certificateMembership = ?, 
    certificateEmployment = ? 
    WHERE userID = ?
");

$docsStmt->bind_param(
    "ssssssssi",
    sanitize_input($data->documentsData->bills),
    sanitize_input($data->documentsData->brgyIndigency),
    sanitize_input($data->documentsData->cedula),
    sanitize_input($data->documentsData->socialCase),
    sanitize_input($data->documentsData->form138),
    sanitize_input($data->documentsData->certificateEnrollment),
    sanitize_input($data->documentsData->certificateMembership),
    sanitize_input($data->documentsData->certificateEmployment),
    sanitize_input($data->personalDetails->userID)
);
$docsStmt->execute();

// Close statements and connection
$updateUser->close();
$personalStmt->close();
$familyStmt->close();
$eduStmt->close();
$docsStmt->close();
$conn->close();

// Send a response
echo json_encode(["status" => "success", "message" => "Data updated successfully"]);
?>
