-- Use the database
USE client_management_db;

-- Insert sample clients
INSERT INTO clients (name, email, address, password) VALUES
('John Doe', 'john@example.com', '123 Main St, Bangalore', 'john123'),
('Jane Smith', 'jane@example.com', '456 Park Ave, Mumbai', 'jane123'),
('Alice Johnson', 'alice@example.com', '789 Oak St, Delhi', 'alice123');

-- Insert sample meetings
INSERT INTO meetings (topic, number_of_people, meeting_date, meeting_time, duration, client_id) VALUES
('Project Kickoff', 5, '2025-09-30', '10:00:00', '2 hours', 1),
('Design Review', 3, '2025-10-05', '14:00:00', '1 hour', 2),
('Final Presentation', 8, '2025-10-10', '09:30:00', '3 hours', 3);
