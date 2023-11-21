-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: backendportfolio
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tblbill`
--

DROP TABLE IF EXISTS `tblbill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblbill` (
  `id_bill` int NOT NULL AUTO_INCREMENT,
  `folio` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_orden_compra` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `emition_date` datetime(3) NOT NULL,
  `date_in` datetime(3) NOT NULL,
  `date_out` datetime(3) NOT NULL,
  `id_client` int NOT NULL,
  `id_product` int NOT NULL,
  `qty_finish` int NOT NULL,
  PRIMARY KEY (`id_bill`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblbill`
--

LOCK TABLES `tblbill` WRITE;
/*!40000 ALTER TABLE `tblbill` DISABLE KEYS */;
/*!40000 ALTER TABLE `tblbill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblclient`
--

DROP TABLE IF EXISTS `tblclient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblclient` (
  `id_client` int NOT NULL AUTO_INCREMENT,
  `company` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `rfc` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cp` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `telcel` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `fiscal_mode` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_client`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblclient`
--

LOCK TABLES `tblclient` WRITE;
/*!40000 ALTER TABLE `tblclient` DISABLE KEYS */;
INSERT INTO `tblclient` VALUES (1,'Fensas','SAAFDF4365','SDFSADf573675','15485','812457','1545487','001'),(2,'feacd','hrhrmi787','nuinuin8989','099097','5646767','67673','N/d'),(3,'Fensas 2','SAAFDF4365','SDFSADf573675','15485','812457','1545487','001');
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
  `user_name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_type` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_employee`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblemployee`
--

LOCK TABLES `tblemployee` WRITE;
/*!40000 ALTER TABLE `tblemployee` DISABLE KEYS */;
INSERT INTO `tblemployee` VALUES (2,'Oscar Rios','Tecnico'),(3,'Alondra','Ingeniera'),(4,'Alejandra Rios','Ingeniera'),(5,'Luis Rios','Dueño'),(6,'Javier Santoyo','SEO'),(7,'Oscar Rios','Tecnico'),(8,'Javier SantoyoCypress','SEO');
/*!40000 ALTER TABLE `tblemployee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblhistoryprocess`
--

DROP TABLE IF EXISTS `tblhistoryprocess`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblhistoryprocess` (
  `id_history_process` int NOT NULL AUTO_INCREMENT,
  `name_history_process` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `qty` int NOT NULL,
  `date_history_process` datetime(3) NOT NULL,
  `id_user` int NOT NULL,
  PRIMARY KEY (`id_history_process`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
  `name_process` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_history_process` int NOT NULL,
  PRIMARY KEY (`id_process`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
  `name_product` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_process` int NOT NULL,
  `file_name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price_unit` int NOT NULL,
  PRIMARY KEY (`id_product`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblproduct`
--

LOCK TABLES `tblproduct` WRITE;
/*!40000 ALTER TABLE `tblproduct` DISABLE KEYS */;
/*!40000 ALTER TABLE `tblproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblstadistics`
--

DROP TABLE IF EXISTS `tblstadistics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblstadistics` (
  `id_stadistics` int NOT NULL AUTO_INCREMENT,
  `status` varchar(45) DEFAULT NULL,
  `crud` varchar(45) DEFAULT NULL,
  `table` varchar(45) DEFAULT NULL,
  `project` varchar(45) DEFAULT NULL,
  `datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id_stadistics`)
) ENGINE=MyISAM AUTO_INCREMENT=110 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblstadistics`
--

LOCK TABLES `tblstadistics` WRITE;
/*!40000 ALTER TABLE `tblstadistics` DISABLE KEYS */;
INSERT INTO `tblstadistics` VALUES (1,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-10-09 00:17:07'),(2,'Ok','Read all records','tblclient','Metal-Mecanica','2023-10-09 00:17:07'),(3,'Ok','Read all records','tblclient','Metal-Mecanica','2023-10-09 00:17:07'),(4,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-10-09 00:17:07'),(5,'Ok','Read all records','tblProduct','Metal-Mecanica','2023-10-10 06:24:39'),(6,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-10-10 06:24:39'),(7,'Ok','Read all records','tblProduct','Metal-Mecanica','2023-10-23 22:45:10'),(8,'Ok','Read all records','tblProduct','Metal-Mecanica','2023-10-23 22:45:10'),(9,'Ok','Read all records','tblProduct','Metal-Mecanica','2023-10-23 22:45:10'),(10,'Ok','','','Metal-Mecanica','2023-10-23 22:48:59'),(11,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-10-23 22:48:59'),(12,'Ok','Read all records','tblprocess','Metal-Mecanica','2023-10-23 22:48:59'),(13,'Ok','Read all records','tblclient','Metal-Mecanica','2023-10-23 22:48:59'),(14,'Ok','Read all records','tblProduct','Metal-Mecanica','2023-10-23 22:50:21'),(15,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-10-23 22:50:21'),(16,'Ok','Read all records','tblProduct','Metal-Mecanica','2023-10-23 23:04:14'),(17,'Ok','Read only one record','tblemployee','Metal-Mecanica','2023-10-23 23:04:14'),(18,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-10-23 23:04:14'),(19,'Ok','Read only one record','tblemployee','Metal-Mecanica','2023-10-23 23:04:14'),(20,'Ok','Read all records','tblProduct','Metal-Mecanica','2023-10-23 23:04:14'),(21,'Ok','Read all records','tblclient','Metal-Mecanica','2023-10-24 23:48:50'),(22,'Ok','Read all records','tblProduct','Metal-Mecanica','2023-10-25 00:41:32'),(23,'Ok','Read all records','tblclient','Metal-Mecanica','2023-10-25 00:41:32'),(24,'Ok','Update record ','tblclient','Metal-Mecanica','2023-10-25 00:41:32'),(25,'Ok','Read all records','tblclient','Metal-Mecanica','2023-10-25 00:41:32'),(26,'Ok','Read all records','tblProduct','Metal-Mecanica','2023-11-14 23:08:31'),(27,'Ok','Read all records','tblProduct','Metal-Mecanica','2023-11-14 23:50:44'),(28,'Ok','Read all records','tblclient','Metal-Mecanica','2023-11-14 23:50:44'),(29,'Ok','Read all records','tblclient','Metal-Mecanica','2023-11-14 23:50:44'),(30,'Ok','Read all records','tblclient','Metal-Mecanica','2023-11-14 23:50:44'),(31,'Ok','Read all records','tblclient','Metal-Mecanica','2023-11-14 23:50:44'),(32,'Ok','Read all records','tblclient','Metal-Mecanica','2023-11-14 23:50:44'),(33,'Ok','Read all records','tblclient','Metal-Mecanica','2023-11-14 23:50:44'),(34,'Ok','Read all records','tblclient','Metal-Mecanica','2023-11-14 23:50:44'),(35,'Ok','Read all records','tblclient','Metal-Mecanica','2023-11-14 23:50:44'),(36,'Ok','Read all records','tblclient','Metal-Mecanica','2023-11-14 23:50:44'),(37,'Ok','Read all records','tblclient','Metal-Mecanica','2023-11-14 23:50:44'),(38,'Ok','Read all records','tblclient','Metal-Mecanica','2023-11-14 23:50:44'),(39,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-14 23:50:44'),(40,'Ok','Read only one record','tblemployee','Metal-Mecanica','2023-11-15 07:30:20'),(41,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-15 07:30:20'),(42,'Ok','Read all records','tblclient','Metal-Mecanica','2023-11-16 07:24:26'),(43,'Ok','Read all records','tblclient','Metal-Mecanica','2023-11-16 07:24:26'),(44,'Ok','Read all records','tblclient','Metal-Mecanica','2023-11-16 07:24:26'),(45,'Ok','Read all records','tblclient','Metal-Mecanica','2023-11-16 07:24:26'),(46,'Ok','Read all records','tblclient','Metal-Mecanica','2023-11-16 07:24:26'),(47,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 07:33:58'),(48,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 07:33:58'),(49,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 07:33:58'),(50,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 07:33:58'),(51,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 07:33:58'),(52,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 07:33:58'),(53,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 07:33:58'),(54,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 07:33:58'),(55,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 07:33:58'),(56,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 07:33:58'),(57,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 07:33:58'),(58,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 07:33:58'),(59,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 07:33:58'),(60,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 07:33:58'),(61,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 07:33:58'),(62,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 07:33:58'),(63,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 07:33:58'),(64,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 07:33:58'),(65,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 07:33:58'),(66,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 07:33:58'),(67,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 22:34:48'),(68,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 22:34:48'),(69,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 22:34:48'),(70,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 22:34:48'),(71,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 22:34:48'),(72,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 22:34:48'),(73,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 22:34:48'),(74,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 22:34:48'),(75,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 22:34:48'),(76,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 22:34:48'),(77,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 22:34:48'),(78,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 22:34:48'),(79,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 22:34:48'),(80,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 22:34:48'),(81,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 22:34:48'),(82,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 22:34:48'),(83,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 22:34:48'),(84,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 22:34:48'),(85,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 22:34:48'),(86,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 22:34:48'),(87,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 22:34:48'),(88,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-16 22:34:48'),(89,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-17 00:26:17'),(90,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-18 00:14:37'),(91,'Ok','Read all records','tblclient','Metal-Mecanica','2023-11-20 05:24:56'),(92,'Ok','Read only one record','tblclient','Metal-Mecanica','2023-11-20 05:24:56'),(93,'Ok','Update record ','tblclient','Metal-Mecanica','2023-11-20 05:24:56'),(94,'Ok','Read all records','tblclient','Metal-Mecanica','2023-11-20 05:31:31'),(95,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-20 07:35:31'),(96,'Ok','Read only one record','tblemployee','Metal-Mecanica','2023-11-20 07:35:31'),(97,'Ok','Read only one record','tblemployee','Metal-Mecanica','2023-11-20 07:35:31'),(98,'Ok','Read only one record','tblemployee','Metal-Mecanica','2023-11-20 07:35:31'),(99,'Ok','Update record ','tblemployee','Metal-Mecanica','2023-11-20 07:35:31'),(100,'Ok','Read only one record','tblemployee','Metal-Mecanica','2023-11-20 07:35:31'),(101,'Ok','Read all records','tblprocess','Metal-Mecanica','2023-11-20 07:35:31'),(102,'Ok','Read all records','tblProduct','Metal-Mecanica','2023-11-20 07:35:31'),(103,'Ok','Read all records','tblclient','Metal-Mecanica','2023-11-20 07:35:31'),(104,'Ok','Read all records','tblbill','Metal-Mecanica','2023-11-20 07:35:31'),(105,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-20 08:12:04'),(106,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-20 08:12:04'),(107,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-20 23:01:29'),(108,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-20 23:01:29'),(109,'Ok','Read all records','tblemployee','Metal-Mecanica','2023-11-20 23:01:29');
/*!40000 ALTER TABLE `tblstadistics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'backendportfolio'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-20 22:13:02
