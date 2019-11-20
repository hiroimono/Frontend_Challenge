DROP TABLE IF EXISTS podlist;

CREATE TABLE podlist (
	id SERIAL primary key,
  title VARCHAR(255),
	star_num INTEGER,
	img_url VARCHAR(300),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
