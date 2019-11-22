DROP TABLE IF EXISTS podlist;

CREATE TABLE podlist (
	id SERIAL primary key,
	podlist_id VARCHAR(255),
  title VARCHAR(255),
	star_num INTEGER default 0,
	img_url VARCHAR(300),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
