-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 09 Lut 2022, 21:25
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
-- Struktura tabeli dla tabeli `academic_worker`
--

CREATE TABLE `academic_worker` (
  `id_user` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `science_title` varchar(45) NOT NULL,
  `salary` int(45) NOT NULL,
  `working_hours_amount` int(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `academic_worker`
--

INSERT INTO `academic_worker` (`id_user`, `first_name`, `last_name`, `science_title`, `salary`, `working_hours_amount`) VALUES
(4, 'Adam', 'Adamski', 'Dr inż.', 140, 60),
(6, 'Barbara', 'Barbarska', 'Dr inż.', 140, 60),
(7, 'Celina', 'Celinowska', 'Dr inż.', 140, 60),
(8, 'Dariusz', 'Dariuszowski', 'Dr inż.', 140, 60),
(9, 'Eugeniusz', 'Eugeniowski', 'Dr inż.', 140, 60),
(10, 'Faustyna', 'Faustynowska', 'Dr inż.', 140, 60);

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
  `name` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'ROLE_USER'),
(2, 'ROLE_ADMIN'),
(3, 'ROLE_STUDENT'),
(4, 'ROLE_UNIVERSITY_EMPLOYEE'),
(5, 'ROLE_PROGRAM_COMMISSION'),
(6, 'ROLE_DEANS_REPRESENTATIVE');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `students`
--

CREATE TABLE `students` (
  `id_user` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `students`
--

INSERT INTO `students` (`id_user`, `first_name`, `last_name`) VALUES
(5, 'Ewelina', 'Trefl'),
(11, 'Kacper', 'Kacperowski'),
(12, 'Aleksander', 'Aleksandrowski'),
(13, 'Tobiasz', 'Tobiaszowski');

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
  `user_id` int(11) NOT NULL,
  `thesis_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `student_has_thesis`
--

INSERT INTO `student_has_thesis` (`user_id`, `thesis_id`) VALUES
(5, 30),
(5, 31),
(11, 32),
(11, 33),
(11, 34),
(11, 35),
(5, 36),
(5, 37),
(5, 38),
(5, 39),
(5, 40);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `thesis`
--

CREATE TABLE `thesis` (
  `id` int(11) NOT NULL,
  `title_pl` varchar(255) DEFAULT NULL,
  `title_eng` varchar(255) DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `type` enum('inżynierska','licancjacka','magisterska') NOT NULL,
  `status` varchar(45) DEFAULT NULL,
  `creation_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `thesis`
--

INSERT INTO `thesis` (`id`, `title_pl`, `title_eng`, `short_description`, `type`, `status`, `creation_date`) VALUES
(30, 'Cumque facere illo e', 'Illo duis velit eum ', 'Porro officia rerum ', 'magisterska', 'zaakceptowana', '2022-02-07'),
(31, 'Corporis dolor exped', 'Nostrum facere sit ', 'Consequatur eu labor', 'magisterska', 'zaakceptowana', '2022-02-07'),
(32, 'Non omnis sint libe', 'Adipisicing velit en', 'Mollit aut aut disti', 'magisterska', 'zaakceptowana', '2022-02-07'),
(33, 'Testowy temat w języku polskim', 'Et veniam omnis ut ', 'adsdsad', 'magisterska', 'zaakceptowana', '2022-02-07'),
(34, 'Testowy temat w języku polskim', 'Test', 'adsadsa', 'magisterska', 'zaakceptowana', '2022-02-07'),
(35, 'Testowy temat w języku polskim22222', 'Testowy temat w języku angielskim22222', 'Opis w języku angielskim22222', 'magisterska', 'zrealizowana', '2022-02-07'),
(36, 'adssad', 'asdsadsa', 'dasdasd', 'magisterska', 'zrealizowana', '2022-02-07'),
(37, 'Testowy temat w języku polskim', 'Et veniam omnis ut ', 'dadsa', 'magisterska', 'zrealizowana', '2022-02-07'),
(38, 'Ullamco culpa quia ', 'Tenetur accusantium ', 'Facilis ut hic ad qu', 'magisterska', 'zrealizowana', '2022-02-07'),
(39, 'Quia obcaecati est q', 'Expedita suscipit vo', 'Omnis sed aut et est', 'magisterska', 'zaakceptowana', '2022-02-07'),
(40, 'Dolore sed perferend', 'Commodi corporis vit', 'Voluptatibus nulla a', 'magisterska', 'zaakceptowana', '2022-02-07'),
(41, 'Temat zgłaszany przez promotora', 'Temat zgłaszany przez promotora EN', 'Temat zgłaszany przez promotora OPIS', 'magisterska', 'zgłoszona', '2022-02-08'),
(42, 'Testowy temat w języku polskim promotor', 'Testowy temat w języku polskim promotor', 'Testowy temat w języku polskim promotor', 'magisterska', 'zgłoszona', '2022-02-08'),
(43, 'PROMROMTOMRTORM', 'PROMROMTOMRTORM', 'PROMROMTOMRTORM', 'magisterska', 'zgłoszona', '2022-02-08');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `thesis_has_promoter`
--

CREATE TABLE `thesis_has_promoter` (
  `id_thesis` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `thesis_has_promoter`
--

INSERT INTO `thesis_has_promoter` (`id_thesis`, `id_user`) VALUES
(30, 6),
(32, 6),
(35, 6),
(37, 6),
(31, 7),
(33, 8),
(38, 8),
(40, 8),
(42, 8),
(43, 8),
(34, 9),
(39, 9),
(36, 10);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `thesis_has_reviewer`
--

CREATE TABLE `thesis_has_reviewer` (
  `id_thesis` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `thesis_has_reviewer`
--

INSERT INTO `thesis_has_reviewer` (`id_thesis`, `id_user`) VALUES
(38, 4),
(36, 10),
(38, 10);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `email`, `password`) VALUES
(1, 'admin@admin.com', '$2a$10$GHYNtzSHWEUr8dFY4xVJKOheDErjOxaGmWEDKTGJL8mq0jYgyW68e'),
(2, 'pelnomocnikdziekana@pwr.pl', '$2a$10$XSj6F9YhRvEJzVfVWyN50ugyPS715ApWrIb8RjmC1hGiv5lxTV15G'),
(3, 'komisjaprogramowa@pwr.pl', '$2a$10$0BW1te7eCPme9rn4/5s.ZOpcunsGTM4C5DHa6.8Hk/bxnrNyBYY3K'),
(4, 'adam.adamski@pwr.edu.pl', '$2a$10$C4l8UKGTWVSs4TW9tceCqOkjU.BC5Ad9Yc4ULTAb7Nu0.mkPPGI4a'),
(5, '111111@student.pwr.edu.pl', '$2a$10$o0fBvj0gTOprW/AeT3/A0uPnhPnIHfiCytwc0q7qJtMEWARYo8Co.'),
(6, 'barbara.barbarska@pwr.edu.pl', '$2a$10$hT6qpu8bOFm89lP9zDnOkuFzhOKLjN4b3t.SIGF7UiOW1aEnaUuaq'),
(7, 'celina.celinowska@pwr.edu.pl', '$2a$10$XHT0FxEl0DHf/IMK0KjnT.RJ07ubr2MH2djFZNGHHjK6.xPSXHQ46'),
(8, 'dariusz.dariuszowski@pwr.edu.pl', '$2a$10$kZS9S9fRecakdjb3YKJ11uFMo/vTaB3TsJpvulaymlvMd7y6Hx1jq'),
(9, 'eugeniusz.eugeniowski@pwr.edu.pl', '$2a$10$gRoPqtyeTRXeHbMoijFXueAL/e1ffxcbRCWm2Cqp2YcICW5vN6722'),
(10, 'faustyna.faustynowska@pwr.edu.pl', '$2a$10$t/v.LY1v2fEIABKBbycxk.bKl9Efvkw7QDkzNmiubKJXEs8GRF7f2'),
(11, '222222@student.pwr.edu.pl', '$2a$10$G0zwdkK9haa6iq5cFuAi8e8IxmHghk4vEvFoS/l7hIP6ajjtr0Xwy'),
(12, '333333@student.pwr.edu.pl', '$2a$10$tR2Pw.xOctLtgRHNKExOmOUZ99VRLDAMnCgVOqOnlXwfPics0bW1q'),
(13, '444444@student.pwr.edu.pl', '$2a$10$1XrWvrczvXEH.27l0w4A4.CAMZxvn6KXh2ULw84a0PTdLh1.Ma6dq');

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
-- Zrzut danych tabeli `user_has_role`
--

INSERT INTO `user_has_role` (`role_id`, `user_id`) VALUES
(2, 1),
(6, 2),
(5, 3),
(4, 4),
(3, 5),
(4, 6),
(4, 7),
(4, 8),
(4, 9),
(4, 10),
(3, 11),
(3, 12),
(3, 13);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `academic_worker`
--
ALTER TABLE `academic_worker`
  ADD PRIMARY KEY (`id_user`);

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
-- Indeksy dla tabeli `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id_user`);

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
  ADD KEY `FK1wncameiqixwehvng7fbutvl8` (`thesis_id`),
  ADD KEY `FK8o3u6a7h0ugdqlhi0e0al2dhx` (`user_id`);

--
-- Indeksy dla tabeli `thesis`
--
ALTER TABLE `thesis`
  ADD PRIMARY KEY (`id`);

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
  ADD KEY `id_user_fk2_idx` (`id_user`),
  ADD KEY `id_thesis_fk2` (`id_thesis`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`);

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
  ADD KEY `id_user_uhr_fk_idx` (`user_id`),
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

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
-- Ograniczenia dla tabeli `academic_worker`
--
ALTER TABLE `academic_worker`
  ADD CONSTRAINT `aw_fk` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ograniczenia dla tabeli `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `id_thesis_fk_r` FOREIGN KEY (`id_thesis`) REFERENCES `thesis` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_user_fk_r` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ograniczenia dla tabeli `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `fk_user_id_student` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ograniczenia dla tabeli `student_has_field_of_study`
--
ALTER TABLE `student_has_field_of_study`
  ADD CONSTRAINT `id_field_of_study_fk` FOREIGN KEY (`id_field_of_study`) REFERENCES `field_of_study` (`id_field_of_study`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_user_fk_shfos` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ograniczenia dla tabeli `student_has_thesis`
--
ALTER TABLE `student_has_thesis`
  ADD CONSTRAINT `FK1wncameiqixwehvng7fbutvl8` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`),
  ADD CONSTRAINT `FK8o3u6a7h0ugdqlhi0e0al2dhx` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ograniczenia dla tabeli `thesis_has_promoter`
--
ALTER TABLE `thesis_has_promoter`
  ADD CONSTRAINT `FKeqlutjm87f5tduv9a0r176onc` FOREIGN KEY (`id_user`) REFERENCES `academic_worker` (`id_user`),
  ADD CONSTRAINT `id_thesis_fk1` FOREIGN KEY (`id_thesis`) REFERENCES `thesis` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_user_fk1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ograniczenia dla tabeli `thesis_has_reviewer`
--
ALTER TABLE `thesis_has_reviewer`
  ADD CONSTRAINT `FKkpauadjv6llqa1lp85vkot3wo` FOREIGN KEY (`id_user`) REFERENCES `academic_worker` (`id_user`),
  ADD CONSTRAINT `id_thesis_fk2` FOREIGN KEY (`id_thesis`) REFERENCES `thesis` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_user_fk2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ograniczenia dla tabeli `users_details`
--
ALTER TABLE `users_details`
  ADD CONSTRAINT `id_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `user_has_reported_thesis`
--
ALTER TABLE `user_has_reported_thesis`
  ADD CONSTRAINT `id_thesis_fk_uhrt` FOREIGN KEY (`id_thesis`) REFERENCES `thesis` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_user_fk_uhrt` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ograniczenia dla tabeli `user_has_role`
--
ALTER TABLE `user_has_role`
  ADD CONSTRAINT `id_role_uhr_fk` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_user_uhr_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
