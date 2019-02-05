-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Фев 05 2019 г., 13:50
-- Версия сервера: 5.7.24
-- Версия PHP: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `bd`
--

-- --------------------------------------------------------

--
-- Структура таблицы `diagnosis`
--

DROP TABLE IF EXISTS `diagnosis`;
CREATE TABLE IF NOT EXISTS `diagnosis` (
  `id_diagnosis` int(11) NOT NULL AUTO_INCREMENT,
  `diagnosis_name` varchar(125) NOT NULL,
  PRIMARY KEY (`id_diagnosis`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `diary_pacients`
--

DROP TABLE IF EXISTS `diary_pacients`;
CREATE TABLE IF NOT EXISTS `diary_pacients` (
  `id_diary` int(11) NOT NULL AUTO_INCREMENT,
  `id_pacient` int(11) NOT NULL,
  `diary_text` text NOT NULL,
  `diary_drugs` varchar(125) NOT NULL,
  `edit_dose` varchar(125) NOT NULL,
  `date_edit_dose` datetime NOT NULL,
  PRIMARY KEY (`id_diary`),
  KEY `diary_pacients_pacient_fk` (`id_pacient`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `events`
--

DROP TABLE IF EXISTS `events`;
CREATE TABLE IF NOT EXISTS `events` (
  `id_event` int(11) NOT NULL AUTO_INCREMENT,
  `name_event` varchar(125) NOT NULL,
  `event_type` varchar(125) NOT NULL,
  PRIMARY KEY (`id_event`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `examination_data`
--

DROP TABLE IF EXISTS `examination_data`;
CREATE TABLE IF NOT EXISTS `examination_data` (
  `id_examination` int(11) NOT NULL AUTO_INCREMENT,
  `id_pacient` int(11) NOT NULL,
  `examination_date` datetime NOT NULL,
  `examination_file` varchar(125) NOT NULL,
  PRIMARY KEY (`id_examination`),
  KEY `examination_data_pacients_fk` (`id_pacient`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `lables`
--

DROP TABLE IF EXISTS `lables`;
CREATE TABLE IF NOT EXISTS `lables` (
  `id_lable` int(11) NOT NULL AUTO_INCREMENT,
  `id_examination` int(11) NOT NULL,
  `id_event` int(11) NOT NULL,
  PRIMARY KEY (`id_lable`),
  KEY `lables_event_fk` (`id_event`),
  KEY `lables_examination_fk` (`id_examination`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `mkb`
--

DROP TABLE IF EXISTS `mkb`;
CREATE TABLE IF NOT EXISTS `mkb` (
  `id_mkb` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(125) NOT NULL,
  `id_diagnosis` int(11) NOT NULL,
  PRIMARY KEY (`id_mkb`),
  KEY `MKB_diagnosis_fk` (`id_diagnosis`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `pacients_data`
--

DROP TABLE IF EXISTS `pacients_data`;
CREATE TABLE IF NOT EXISTS `pacients_data` (
  `id_pacient` int(11) NOT NULL AUTO_INCREMENT,
  `pacients_data_passport` varchar(125) NOT NULL,
  `pacients_data_analyse` varchar(125) NOT NULL,
  PRIMARY KEY (`id_pacient`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `pacient_diagnosis`
--

DROP TABLE IF EXISTS `pacient_diagnosis`;
CREATE TABLE IF NOT EXISTS `pacient_diagnosis` (
  `id_pacient_diagnosis` int(11) NOT NULL AUTO_INCREMENT,
  `id_pacient` int(11) NOT NULL,
  `id_diagnosis` int(11) NOT NULL,
  PRIMARY KEY (`id_pacient_diagnosis`),
  KEY `pacient_diagnosis_diagnosis_fk` (`id_diagnosis`),
  KEY `pacient_diagnosis_pacients_fk` (`id_pacient`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `registration_info`
--

DROP TABLE IF EXISTS `registration_info`;
CREATE TABLE IF NOT EXISTS `registration_info` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `birthday_date` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `results_table`
--

DROP TABLE IF EXISTS `results_table`;
CREATE TABLE IF NOT EXISTS `results_table` (
  `id_results` int(11) NOT NULL AUTO_INCREMENT,
  `id_examination` int(11) NOT NULL,
  `id_label` int(11) NOT NULL,
  `id_sensor` int(11) NOT NULL,
  `indicator_1` varchar(125) DEFAULT NULL,
  `indicator_2` varchar(125) DEFAULT NULL,
  `indicator_3` varchar(125) DEFAULT NULL,
  `indicator_4` varchar(125) DEFAULT NULL,
  `indicator_5` varchar(125) DEFAULT NULL,
  `indicator_6` varchar(125) DEFAULT NULL,
  `indicator_7` varchar(125) DEFAULT NULL,
  `indicator_8` varchar(125) DEFAULT NULL,
  `indicator_9` varchar(125) DEFAULT NULL,
  `indicator_10` varchar(125) DEFAULT NULL,
  `indicator_11` varchar(125) DEFAULT NULL,
  `indicator_12` varchar(125) DEFAULT NULL,
  `indicator_13` varchar(125) DEFAULT NULL,
  `indicator_14` varchar(125) DEFAULT NULL,
  `indicator_15` varchar(125) DEFAULT NULL,
  `indicator_16` varchar(125) DEFAULT NULL,
  `indicator_17` varchar(125) DEFAULT NULL,
  `indicator_18` varchar(125) DEFAULT NULL,
  `indicator_19` varchar(125) DEFAULT NULL,
  `indicator_20` varchar(125) DEFAULT NULL,
  PRIMARY KEY (`id_results`),
  KEY `results_table_examination_fk` (`id_examination`),
  KEY `results_table_label_fk` (`id_label`),
  KEY `results_table_sensor_fk` (`id_sensor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `sensors`
--

DROP TABLE IF EXISTS `sensors`;
CREATE TABLE IF NOT EXISTS `sensors` (
  `id_sensor` int(11) NOT NULL AUTO_INCREMENT,
  `sensor_name` varchar(125) NOT NULL,
  PRIMARY KEY (`id_sensor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `diary_pacients`
--
ALTER TABLE `diary_pacients`
  ADD CONSTRAINT `diary_pacients_pacient_fk` FOREIGN KEY (`id_pacient`) REFERENCES `pacients_data` (`id_pacient`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `examination_data`
--
ALTER TABLE `examination_data`
  ADD CONSTRAINT `examination_data_pacients_fk` FOREIGN KEY (`id_pacient`) REFERENCES `pacients_data` (`id_pacient`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `lables`
--
ALTER TABLE `lables`
  ADD CONSTRAINT `lables_event_fk` FOREIGN KEY (`id_event`) REFERENCES `events` (`id_event`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lables_examination_fk` FOREIGN KEY (`id_examination`) REFERENCES `examination_data` (`id_examination`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `mkb`
--
ALTER TABLE `mkb`
  ADD CONSTRAINT `MKB_diagnosis_fk` FOREIGN KEY (`id_diagnosis`) REFERENCES `diagnosis` (`id_diagnosis`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `pacient_diagnosis`
--
ALTER TABLE `pacient_diagnosis`
  ADD CONSTRAINT `pacient_diagnosis_diagnosis_fk` FOREIGN KEY (`id_diagnosis`) REFERENCES `diagnosis` (`id_diagnosis`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pacient_diagnosis_pacients_fk` FOREIGN KEY (`id_pacient`) REFERENCES `pacients_data` (`id_pacient`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `results_table`
--
ALTER TABLE `results_table`
  ADD CONSTRAINT `results_table_examination_fk` FOREIGN KEY (`id_examination`) REFERENCES `examination_data` (`id_examination`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `results_table_label_fk` FOREIGN KEY (`id_label`) REFERENCES `lables` (`id_lable`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `results_table_sensor_fk` FOREIGN KEY (`id_sensor`) REFERENCES `sensors` (`id_sensor`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
