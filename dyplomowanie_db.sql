-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 15 Sty 2022, 17:31
-- Wersja serwera: 10.4.14-MariaDB
-- Wersja PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `dyplomowanie_db`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `field_of_study`
--

CREATE TABLE `field_of_study` (
  `id_field_of_study` int(11) NOT NULL,
  `field_of_study` varchar(255) NOT NULL,
  `degree_of_study` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `reviews`
--

CREATE TABLE `reviews` (
  `id_review` int(11) NOT NULL,
  `id_thesis` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `grade` int(11) DEFAULT NULL,
  `review_description` text COLLATE utf8_bin DEFAULT NULL,
  `creation_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'ROLE_USER'),
(2, 'ROLE_MODERATOR'),
(3, 'ROLE_ADMIN');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `student_has_field_of_study`
--

CREATE TABLE `student_has_field_of_study` (
  `id_student_has_field_of_study` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_field_of_study` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `student_has_thesis`
--

CREATE TABLE `student_has_thesis` (
  `id_user` int(11) NOT NULL,
  `id_thesis` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `thesis`
--

CREATE TABLE `thesis` (
  `id_thesis` int(11) NOT NULL,
  `title_pl` varchar(255) DEFAULT NULL,
  `title_eng` varchar(255) DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `type` enum('inżynierska','licancjacka','magisterska') NOT NULL,
  `status` varchar(45) DEFAULT NULL,
  `creation_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `thesis_has_promoter`
--

CREATE TABLE `thesis_has_promoter` (
  `id_thesis` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `thesis_has_reviewer`
--

CREATE TABLE `thesis_has_reviewer` (
  `id_thesis` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users_details`
--

CREATE TABLE `users_details` (
  `id_user` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `science_title` varchar(45) DEFAULT NULL,
  `album_nr` varchar(45) DEFAULT NULL,
  `field_of_study` varchar(255) DEFAULT NULL,
  `degree_of_study` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user_has_reported_thesis`
--

CREATE TABLE `user_has_reported_thesis` (
  `id_user_has_reported_thesis` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_thesis` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `reported_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user_has_role`
--

CREATE TABLE `user_has_role` (
  `role_id` int(11) NOT NULL,
  `user_id` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `field_of_study`
--
ALTER TABLE `field_of_study`
  ADD PRIMARY KEY (`id_field_of_study`);

--
-- Indeksy dla tabeli `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id_review`),
  ADD KEY `id_thesis_fk_r_idx` (`id_thesis`),
  ADD KEY `id_user_fk_r_idx` (`id_user`);

--
-- Indeksy dla tabeli `roles`
--
ALTER TABLE `roles`
  ADD KEY `role_id_index` (`id`);

--
-- Indeksy dla tabeli `student_has_field_of_study`
--
ALTER TABLE `student_has_field_of_study`
  ADD PRIMARY KEY (`id_student_has_field_of_study`),
  ADD KEY `id_user_fk_shfos_idx` (`id_user`),
  ADD KEY `id_field_of_study_fk_idx` (`id_field_of_study`);

--
-- Indeksy dla tabeli `student_has_thesis`
--
ALTER TABLE `student_has_thesis`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `id_thesis_fk_sht_idx` (`id_thesis`);

--
-- Indeksy dla tabeli `thesis`
--
ALTER TABLE `thesis`
  ADD PRIMARY KEY (`id_thesis`);

--
-- Indeksy dla tabeli `thesis_has_promoter`
--
ALTER TABLE `thesis_has_promoter`
  ADD PRIMARY KEY (`id_thesis`),
  ADD KEY `id_user_fk1_idx` (`id_user`);

--
-- Indeksy dla tabeli `thesis_has_reviewer`
--
ALTER TABLE `thesis_has_reviewer`
  ADD PRIMARY KEY (`id_thesis`),
  ADD KEY `id_user_fk2_idx` (`id_user`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- Indeksy dla tabeli `users_details`
--
ALTER TABLE `users_details`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `id_users_idx` (`id_user`);

--
-- Indeksy dla tabeli `user_has_reported_thesis`
--
ALTER TABLE `user_has_reported_thesis`
  ADD PRIMARY KEY (`id_user_has_reported_thesis`),
  ADD KEY `id_thesis_fk_ushrt_idx` (`id_thesis`),
  ADD KEY `id_user_fk_uhrt_idx` (`id_user`);

--
-- Indeksy dla tabeli `user_has_role`
--
ALTER TABLE `user_has_role`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `id_role_uhr_fk_idx` (`role_id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id_review` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `thesis`
--
ALTER TABLE `thesis`
  MODIFY `id_thesis` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `users_details`
--
ALTER TABLE `users_details`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `user_has_reported_thesis`
--
ALTER TABLE `user_has_reported_thesis`
  MODIFY `id_user_has_reported_thesis` int(11) NOT NULL AUTO_INCREMENT;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `id_thesis_fk_r` FOREIGN KEY (`id_thesis`) REFERENCES `thesis` (`id_thesis`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_user_fk_r` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ograniczenia dla tabeli `student_has_field_of_study`
--
ALTER TABLE `student_has_field_of_study`
  ADD CONSTRAINT `id_field_of_study_fk` FOREIGN KEY (`id_field_of_study`) REFERENCES `field_of_study` (`id_field_of_study`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_user_fk_shfos` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ograniczenia dla tabeli `student_has_thesis`
--
ALTER TABLE `student_has_thesis`
  ADD CONSTRAINT `id_thesis_fk_sht` FOREIGN KEY (`id_thesis`) REFERENCES `thesis` (`id_thesis`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_user_fk_sht` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ograniczenia dla tabeli `thesis_has_promoter`
--
ALTER TABLE `thesis_has_promoter`
  ADD CONSTRAINT `id_thesis_fk1` FOREIGN KEY (`id_thesis`) REFERENCES `thesis` (`id_thesis`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_user_fk1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ograniczenia dla tabeli `thesis_has_reviewer`
--
ALTER TABLE `thesis_has_reviewer`
  ADD CONSTRAINT `id_thesis_fk2` FOREIGN KEY (`id_thesis`) REFERENCES `thesis` (`id_thesis`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_user_fk2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ograniczenia dla tabeli `users_details`
--
ALTER TABLE `users_details`
  ADD CONSTRAINT `id_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `user_has_reported_thesis`
--
ALTER TABLE `user_has_reported_thesis`
  ADD CONSTRAINT `id_thesis_fk_uhrt` FOREIGN KEY (`id_thesis`) REFERENCES `thesis` (`id_thesis`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_user_fk_uhrt` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ograniczenia dla tabeli `user_has_role`
--
ALTER TABLE `user_has_role`
  ADD CONSTRAINT `id_role_uhr_fk` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_user_uhr_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
