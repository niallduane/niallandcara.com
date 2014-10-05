create database `weddingsite`;

use `weddingsite`;

CREATE TABLE `Replies` (
`ReplyId` int NOT NULL AUTO_INCREMENT,
`Name` text NOT NULL,
`Email` varchar(150) NOT NULL,
`DietaryRequirements` text,
`Comments` text,
`Attending` bit DEFAULT 0 NOT NULL,
`CreatedAt` date,
PRIMARY KEY (`ReplyId`)
);