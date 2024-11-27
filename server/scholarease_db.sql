-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2024 at 02:47 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `scholarease_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `education_information`
--

CREATE TABLE `education_information` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `last_school_attended` varchar(255) NOT NULL,
  `last_course` varchar(255) NOT NULL,
  `grades_general_average` decimal(5,2) NOT NULL,
  `num_of_units` int(11) DEFAULT NULL,
  `new_school` varchar(255) NOT NULL,
  `new_course` varchar(255) NOT NULL,
  `level_year` varchar(50) DEFAULT NULL,
  `semester` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `education_information`
--

INSERT INTO `education_information` (`id`, `user_id`, `last_school_attended`, `last_course`, `grades_general_average`, `num_of_units`, `new_school`, `new_course`, `level_year`, `semester`) VALUES
(1, 1, 'D2N High School', 'General Academic Strand', 87.50, NULL, 'Bulacan State University', 'Computer Science', 'Freshman', '1st Semester'),
(2, 2, 'Iskol Bukol', 'Information Technology', 92.00, 30, 'Bulacan State University', 'Software Engineering', 'Sophomore', '2nd Semester');

-- --------------------------------------------------------

--
-- Table structure for table `family_information`
--

CREATE TABLE `family_information` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `father_name` varchar(255) NOT NULL,
  `father_occupation` varchar(255) NOT NULL,
  `father_salary_range` varchar(50) DEFAULT NULL,
  `mother_name` varchar(255) NOT NULL,
  `mother_occupation` varchar(255) NOT NULL,
  `mother_salary_range` varchar(50) DEFAULT NULL,
  `siblings_with_family` int(11) NOT NULL,
  `siblings_with_work` int(11) NOT NULL,
  `sibling_salary_range` varchar(50) DEFAULT NULL,
  `siblings_elementary` int(11) DEFAULT 0,
  `siblings_high_school` int(11) DEFAULT 0,
  `siblings_college` int(11) DEFAULT 0,
  `electric_bill_amount` decimal(10,2) NOT NULL,
  `water_bill_amount` decimal(10,2) NOT NULL,
  `other_expenses` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `family_information`
--

INSERT INTO `family_information` (`id`, `user_id`, `father_name`, `father_occupation`, `father_salary_range`, `mother_name`, `mother_occupation`, `mother_salary_range`, `siblings_with_family`, `siblings_with_work`, `sibling_salary_range`, `siblings_elementary`, `siblings_high_school`, `siblings_college`, `electric_bill_amount`, `water_bill_amount`, `other_expenses`) VALUES
(1, 1, 'John Doe', 'Engineer', '50k-60k', 'Jane Doe', 'Teacher', '30k-40k', 2, 3, '30k-40k', 1, 1, 1, 1200.00, 600.00, 800.00),
(2, 2, 'Michael Smith', 'Driver', '10k-20k', 'Sarah Smith', 'Housewife', NULL, 1, 1, '10k-20k', 0, 2, 0, 500.00, 300.00, 200.00);

-- --------------------------------------------------------

--
-- Table structure for table `personal_details`
--

CREATE TABLE `personal_details` (
  `personalDetailID` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `studentID` varchar(100) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `middleName` varchar(100) DEFAULT NULL,
  `lastName` varchar(100) NOT NULL,
  `dateOfBirth` date DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `placeOfBirth` varchar(100) DEFAULT NULL,
  `province` varchar(100) DEFAULT NULL,
  `cityMunicipality` varchar(100) DEFAULT NULL,
  `barangay` varchar(100) DEFAULT NULL,
  `streetAddress` varchar(255) DEFAULT NULL,
  `sex` varchar(10) DEFAULT NULL,
  `civilStatus` varchar(50) DEFAULT NULL,
  `pwd` tinyint(1) DEFAULT NULL,
  `contactNo` varchar(20) DEFAULT NULL,
  `hobbies` text DEFAULT NULL,
  `pwdID` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `personal_details`
--

INSERT INTO `personal_details` (`personalDetailID`, `userID`, `studentID`, `firstName`, `middleName`, `lastName`, `dateOfBirth`, `age`, `placeOfBirth`, `province`, `cityMunicipality`, `barangay`, `streetAddress`, `sex`, `civilStatus`, `pwd`, `contactNo`, `hobbies`, `pwdID`) VALUES
(1, 1, '2012391238', 'Aeron', 'Toledo', 'Tarroza', '1998-06-22', 26, 'Malolos', 'Bulacan', 'Malolos', 'Caniogan', '23123123123', 'Male', 'Single', 0, '09287568199', NULL, 'null');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UserID` int(11) NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `UserType` varchar(255) NOT NULL,
  `program_applied` varchar(255) NOT NULL,
  `application_status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserID`, `Username`, `Password`, `Email`, `UserType`, `program_applied`, `application_status`) VALUES
(1, 'student', '$2y$10$NuE1xVkM.MvTIKrabrZv4.VuHb/tbLvcGQIT8S4ka8OB2zCnO5LdK', 'student@gmail.com', 'student', 'lmsk', 'pending'),
(2, 'admin', '$2y$10$NuE1xVkM.MvTIKrabrZv4.VuHb/tbLvcGQIT8S4ka8OB2zCnO5LdK', 'admin@gmail.com', 'admin', '', ''),
(3, 'superadmin', '$2y$10$NuE1xVkM.MvTIKrabrZv4.VuHb/tbLvcGQIT8S4ka8OB2zCnO5LdK', 'superadmin@gmail.com', 'superadmin', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `user_documents`
--

CREATE TABLE `user_documents` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `meralco_and_water_bill` varchar(255) NOT NULL,
  `brgy_indigency_proof_residency` varchar(255) NOT NULL,
  `parent_guardian_cedula` varchar(255) NOT NULL,
  `social_case_study` varchar(255) NOT NULL,
  `form_138_certificate_grades` varchar(255) NOT NULL,
  `certificate_enrollment` varchar(255) NOT NULL,
  `certificate_membership` varchar(255) NOT NULL,
  `certificate_employment` varchar(255) NOT NULL,
  `upload_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_documents`
--

INSERT INTO `user_documents` (`id`, `user_id`, `meralco_and_water_bill`, `brgy_indigency_proof_residency`, `parent_guardian_cedula`, `social_case_study`, `form_138_certificate_grades`, `certificate_enrollment`, `certificate_membership`, `certificate_employment`, `upload_date`) VALUES
(1, 1, 'uploads/meralco_bill_1.pdf', 'uploads/brgy_indigency_1.pdf', 'uploads/cedula_1.pdf', 'uploads/social_case_1.pdf', 'uploads/form_138_1.pdf', 'uploads/cert_enrollment_1.pdf', 'uploads/cert_membership_1.pdf', 'uploads/cert_employment_1.pdf', '2024-11-27 01:42:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `education_information`
--
ALTER TABLE `education_information`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `family_information`
--
ALTER TABLE `family_information`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `personal_details`
--
ALTER TABLE `personal_details`
  ADD PRIMARY KEY (`personalDetailID`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserID`);

--
-- Indexes for table `user_documents`
--
ALTER TABLE `user_documents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `education_information`
--
ALTER TABLE `education_information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `family_information`
--
ALTER TABLE `family_information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `personal_details`
--
ALTER TABLE `personal_details`
  MODIFY `personalDetailID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user_documents`
--
ALTER TABLE `user_documents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `education_information`
--
ALTER TABLE `education_information`
  ADD CONSTRAINT `education_information_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`UserID`);

--
-- Constraints for table `family_information`
--
ALTER TABLE `family_information`
  ADD CONSTRAINT `family_information_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`UserID`);

--
-- Constraints for table `personal_details`
--
ALTER TABLE `personal_details`
  ADD CONSTRAINT `personal_details_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user` (`UserID`);

--
-- Constraints for table `user_documents`
--
ALTER TABLE `user_documents`
  ADD CONSTRAINT `user_documents_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`UserID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
