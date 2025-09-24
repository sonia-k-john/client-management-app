CREATE TABLE IF NOT EXISTS meetings (
  meeting_id INT AUTO_INCREMENT PRIMARY KEY,
  topic VARCHAR(255) NOT NULL,
  number_of_people INT NOT NULL,
  meeting_date DATE NOT NULL,
  meeting_time TIME NOT NULL,
  duration VARCHAR(50),
  client_id INT,
  FOREIGN KEY (client_id) REFERENCES clients(client_id)
);