/* mysql -u root -p */
/* use sampledb; */
/* C:\Mysql\DB_table_create\jouken.sql */

DELETE FROM student;
INSERT INTO student VALUES(1,'����',60);
INSERT INTO student VALUES(2,'����',100);
INSERT INTO student VALUES(3,'�c��',85);
INSERT INTO student VALUES(4,'����',90);
INSERT INTO student VALUES(5,'���',75);

SELECT * FROM student;

SELECT * FROM student
	WHERE 50 <= score AND score <= 80;
	
SELECT * FROM student
	WHERE score BETWEEN 80 AND 100;

SELECT * FROM student
	WHERE name LIKE '%��';

UPDATE student SET score = score + 5;

SELECT * FROM student;

DELETE FROM student WHERE no = 1;

SELECT * FROM student;

