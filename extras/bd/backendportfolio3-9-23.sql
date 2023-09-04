CREATE DATABASE  IF NOT EXISTS `backendportfolio` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `backendportfolio`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: backendportfolio
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('a542a0b9-9e4a-4f10-a7bb-a90d4442b550','7b822c96ea4f7a7889c1b510008b5d81350f124f9200c5caaaf413a103478985','2023-09-01 05:28:42.388','20230901052842_init',NULL,NULL,'2023-09-01 05:28:42.378',1),('53b5ede0-b120-48b0-878e-7a0f74502c74','649aaf5b27cd166da63214fca2c8f520eb7f772e747e4e0bb48cfbd417db1573','2023-09-01 05:47:21.021','20230901054721_init',NULL,NULL,'2023-09-01 05:47:21.009',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblclient`
--

DROP TABLE IF EXISTS `tblclient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblclient` (
  `id_client` int NOT NULL AUTO_INCREMENT,
  `company` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `RFC` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cp` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telCel` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fiscalMode` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_client`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblclient`
--

LOCK TABLES `tblclient` WRITE;
/*!40000 ALTER TABLE `tblclient` DISABLE KEYS */;
/*!40000 ALTER TABLE `tblclient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblemployee`
--

DROP TABLE IF EXISTS `tblemployee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblemployee` (
  `id_employee` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userType` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_employee`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblemployee`
--

LOCK TABLES `tblemployee` WRITE;
/*!40000 ALTER TABLE `tblemployee` DISABLE KEYS */;
INSERT INTO `tblemployee` VALUES (2,'Oscar Rios','Tecnico'),(3,'Alondra','Ingeniera'),(4,'Alejandra Rios','Ingeniera'),(5,'Luis Rios','Dueño');
/*!40000 ALTER TABLE `tblemployee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblfactura`
--

DROP TABLE IF EXISTS `tblfactura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblfactura` (
  `id_factura` int NOT NULL AUTO_INCREMENT,
  `folio` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_orden_compra` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emition_date` datetime(3) NOT NULL,
  `dateIn` datetime(3) NOT NULL,
  `dateOut` datetime(3) NOT NULL,
  `idClient` int NOT NULL,
  `id_product` int NOT NULL,
  `qtyFinish` int NOT NULL,
  PRIMARY KEY (`id_factura`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblfactura`
--

LOCK TABLES `tblfactura` WRITE;
/*!40000 ALTER TABLE `tblfactura` DISABLE KEYS */;
/*!40000 ALTER TABLE `tblfactura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblhistoryprocess`
--

DROP TABLE IF EXISTS `tblhistoryprocess`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblhistoryprocess` (
  `id_history_process` int NOT NULL AUTO_INCREMENT,
  `name_history_process` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `qty` int NOT NULL,
  `date_history_process` datetime(3) NOT NULL,
  `id_user` int NOT NULL,
  PRIMARY KEY (`id_history_process`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblhistoryprocess`
--

LOCK TABLES `tblhistoryprocess` WRITE;
/*!40000 ALTER TABLE `tblhistoryprocess` DISABLE KEYS */;
/*!40000 ALTER TABLE `tblhistoryprocess` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblprocess`
--

DROP TABLE IF EXISTS `tblprocess`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblprocess` (
  `id_process` int NOT NULL AUTO_INCREMENT,
  `name_process` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_history_process` int NOT NULL,
  PRIMARY KEY (`id_process`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblprocess`
--

LOCK TABLES `tblprocess` WRITE;
/*!40000 ALTER TABLE `tblprocess` DISABLE KEYS */;
/*!40000 ALTER TABLE `tblprocess` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblproduct`
--

DROP TABLE IF EXISTS `tblproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblproduct` (
  `id_product` int NOT NULL AUTO_INCREMENT,
  `name_product` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_process` int NOT NULL,
  `fileName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `priceUnit` int NOT NULL,
  PRIMARY KEY (`id_product`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblproduct`
--

LOCK TABLES `tblproduct` WRITE;
/*!40000 ALTER TABLE `tblproduct` DISABLE KEYS */;
/*!40000 ALTER TABLE `tblproduct` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-03  1:09:06
