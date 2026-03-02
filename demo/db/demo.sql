-- SQL demo
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (id, name) VALUES (1, 'Lela'), (2, 'Nox');

SELECT id, name FROM users WHERE id >= 1 ORDER BY created_at DESC;
