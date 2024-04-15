/*Database Creation: We created a MySQL database schema named task_manager. This schema will hold our tables related to task management.

Table Creation: Within the task_manager database, we created a table named tasks. This table is designed to store information about tasks. Here are the columns we defined:

id: An auto-incremented primary key column. This means each task will have a unique identifier, and the database will automatically generate values for this column as new tasks are added.
title: A string column to store the title of the task.
description: A text column to store the description of the task. Text columns are suitable for longer pieces of text.
status: A string column to store the status of the task. We defined this column as an enumeration (ENUM) type, meaning it can only contain specific values: "pending" or "completed". The default value for this column is set to "pending".
created_at: A timestamp column to store the date and time when the task was created. This column is set to automatically record the current timestamp when a new task is inserted.
updated_at: A timestamp column to store the date and time when the task was last updated. This column is set to automatically update whenever the task is modified.*/


/*************All these task i have performed on phpMyAdmin I have shared the screenshot for the same ******************* */


CREATE DATABASE IF NOT EXISTS task_manager;

USE task_manager;

CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    status ENUM('pending', 'completed') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


/*Data Insertion: We inserted sample data into the tasks table to populate it with some initial tasks. Each task consists of a title, description, and status.*/

INSERT INTO tasks (title, description, status) VALUES
('Task 1', 'Description for Task 1', 'pending'),
('Task 2', 'Description for Task 2', 'completed'),
('Task 3', 'Description for Task 3', 'pending');


/*And to display table */

SELECT * FROM tasks;
