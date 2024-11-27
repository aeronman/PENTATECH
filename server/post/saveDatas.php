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


$updateUser = $conn->prepare("UPDATE `user` SET `program_applied`= ?,`application_status`= ? WHERE UserID = ?");
$updateUser->bind_param("ssi",$data->programApplied,$data->status,$data->personalDetails->userID);
$updateUser->execute();

$personalStmt = $conn->prepare("
    INSERT INTO personal_details 
    (userID, Student_ID, FIRST_NAME, MIDDLE_NAME, LAST_NAME, DATE_OF_BIRTH, age, PLACE_OF_BIRTH, Province, CITY_MUNICIPALITY, BARANGAY, STREET_ADDRESS, SEX, CIVIL_STATUS, PWD, RELIGION, CONTACT_NO, PWD_ID, PWDPreview) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
");

$personalStmt->bind_param(
    "issssssssssssssssss",
    $data->personalDetails->userID,
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
    $data->personalDetails->PWDPreview
);
$personalStmt->execute();

$familyStmt = $conn->prepare("
    INSERT INTO family_data 
    (userID, father, fatherOccupation, fatherSalary, mother, motherOccupation, motherSalary, siblingsWithFamily, siblingsWithWork, siblingSalary, siblingsElementary, siblingsHighSchool, siblingsCollege, electricBill, waterBill, otherExpenses) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
");

// Adjust type string to match the variables
$familyStmt->bind_param(
    "isssssssssssssss",
    $data->personalDetails->userID,       
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
    $data->familyData->otherExpenses  
);

$familyStmt->execute();

// Insert educationalBgData
$eduStmt = $conn->prepare("
    INSERT INTO educational_bg_data 
    (userID, lastSchool, lastCourse, grades, numOfUnits, newSchool, newCourse, levelYear, semester) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
");
$eduStmt->bind_param(
    "isssissss",
    $data->personalDetails->userID,
    $data->educationalBgData->lastSchool,
    $data->educationalBgData->lastCourse,
    $data->educationalBgData->grades,
    $data->educationalBgData->numOfUnits,
    $data->educationalBgData->newSchool,
    $data->educationalBgData->newCourse,
    $data->educationalBgData->levelYear,
    $data->educationalBgData->semester
);
$eduStmt->execute();


// Insert documentsData
$docsStmt = $conn->prepare("
    INSERT INTO documents_data 
    (userID, bills, brgyIndigency, cedula, socialCase, form138, certificateEnrollment, certificateMembership, certificateEmployment) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
");
$docsStmt->bind_param(
    "issssssss",
    $data->personalDetails->userID,
    $data->documentsData->bills,
    $data->documentsData->brgyIndigency,
    $data->documentsData->cedula,
    $data->documentsData->socialCase,
    $data->documentsData->form138,
    $data->documentsData->certificateEnrollment,
    $data->documentsData->certificateMembership,
    $data->documentsData->certificateEmployment
);
$docsStmt->execute();

// Close statements and connection
$personalStmt->close();
$familyStmt->close();
$eduStmt->close();
$docsStmt->close();
$conn->close();

// Send a response
echo json_encode(["status" => "success", "message" => "Data saved successfully"]);
?>
