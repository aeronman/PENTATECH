<?php
include '../config/connection.php';

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get POST data from React
$data = json_decode(file_get_contents("php://input"));

if (!$data) {
    echo json_encode(["status" => "error", "message" => "Invalid input data"]);
    exit;
}

// Update user table
$updateUser = $conn->prepare("UPDATE `user` SET `program_applied` = ?, `application_status` = ? WHERE UserID = ?");
$updateUser->bind_param("ssi", $data->programApplied, $data->status, $data->personalDetails->userID);
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
    $data->personalDetails->Student_ID,
    $data->personalDetails->FIRST_NAME,
    $data->personalDetails->MIDDLE_NAME,
    $data->personalDetails->LAST_NAME,
    $data->personalDetails->DATE_OF_BIRTH,
    $data->personalDetails->age,
    $data->personalDetails->PLACE_OF_BIRTH,
    $data->personalDetails->Province,
    $data->personalDetails->CITY_MUNICIPALITY,
    $data->personalDetails->BARANGAY,
    $data->personalDetails->STREET_ADDRESS,
    $data->personalDetails->SEX,
    $data->personalDetails->CIVIL_STATUS,
    $data->personalDetails->PWD,
    $data->personalDetails->RELIGION,
    $data->personalDetails->CONTACT_NO,
    $data->personalDetails->PWD_ID,
    $data->personalDetails->PWDPreview,
    $data->personalDetails->userID
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
    $data->familyData->father,         
    $data->familyData->fatherOccupation, 
    $data->familyData->fatherSalary,  
    $data->familyData->mother,         
    $data->familyData->motherOccupation,
    $data->familyData->motherSalary, 
    $data->familyData->siblingsWithFamily,
    $data->familyData->siblingsWithWork, 
    $data->familyData->siblingSalary,  
    $data->familyData->siblingsElementary, 
    $data->familyData->siblingsHighSchool, 
    $data->familyData->siblingsCollege, 
    $data->familyData->electricBill,  
    $data->familyData->waterBill,     
    $data->familyData->otherExpenses,  
    $data->personalDetails->userID
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
    $data->educationalBgData->lastSchool,
    $data->educationalBgData->lastCourse,
    $data->educationalBgData->grades,
    $data->educationalBgData->numOfUnits,
    $data->educationalBgData->newSchool,
    $data->educationalBgData->newCourse,
    $data->educationalBgData->levelYear,
    $data->educationalBgData->semester,
    $data->personalDetails->userID
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
    $data->documentsData->bills,
    $data->documentsData->brgyIndigency,
    $data->documentsData->cedula,
    $data->documentsData->socialCase,
    $data->documentsData->form138,
    $data->documentsData->certificateEnrollment,
    $data->documentsData->certificateMembership,
    $data->documentsData->certificateEmployment,
    $data->personalDetails->userID
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
