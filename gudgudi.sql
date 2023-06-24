-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 24, 2023 at 08:21 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gudgudi`
--

-- --------------------------------------------------------

--
-- Table structure for table `GudgudiWinnings`
--

CREATE TABLE `GudgudiWinnings` (
  `winningId` int(11) NOT NULL,
  `winningNumber` int(10) NOT NULL,
  `winningTime` date NOT NULL DEFAULT current_timestamp(),
  `winningGameId` int(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Transactions`
--

CREATE TABLE `Transactions` (
  `transactionId` int(11) NOT NULL,
  `transactionIdNo` int(100) NOT NULL,
  `transactionFrom` int(10) NOT NULL,
  `transactionTo` int(10) NOT NULL,
  `transactionStatus` int(2) NOT NULL,
  `transactionInitateTime` date NOT NULL DEFAULT current_timestamp(),
  `transactionStatusTime` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `userId` int(11) NOT NULL COMMENT 'Users Unique Id',
  `userLogin` varchar(10) NOT NULL,
  `userPassword` varchar(10) NOT NULL,
  `userVillage` varchar(40) DEFAULT NULL,
  `userRole` int(2) NOT NULL DEFAULT 0,
  `userPhone` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `GudgudiWinnings`
--
ALTER TABLE `GudgudiWinnings`
  ADD PRIMARY KEY (`winningId`);

--
-- Indexes for table `Transactions`
--
ALTER TABLE `Transactions`
  ADD PRIMARY KEY (`transactionId`),
  ADD UNIQUE KEY `transactionIdNo` (`transactionIdNo`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `GudgudiWinnings`
--
ALTER TABLE `GudgudiWinnings`
  MODIFY `winningId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Transactions`
--
ALTER TABLE `Transactions`
  MODIFY `transactionId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Users Unique Id';
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
