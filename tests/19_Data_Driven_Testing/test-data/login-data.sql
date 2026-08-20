-- Seed data for 300_DDT_MySQL.spec.ts
-- Run once:  mysql -u root -p < login-data.sql

CREATE DATABASE IF NOT EXISTS playwright_ddt;
USE playwright_ddt;

CRAETE TABLE login_data (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    description     VARCHAR(100) NOT NULL,
    username        VARCHAR(100) NOT NULL Default '',
    password        VARCHAR(100) NOT NULL Default '',
    should_pass     TINYINT(1) NOT NUll Default 0,
    expected_error  VARCHAR(200) NOT NULL DEFAULT '',
    is_active       TINYINT(1)   NOT NULL DEFAULT 1
);


INSERT INTO login_data(description, username, password, should_pass, expected_error) values
    ('valid credentials',     'admin@gamil.com',        'admin123',  1, ''),
    ('invalid password',      'admin@gamil.com',        'wrongpass', 0, 'Invalid credentials'),
    ('empty username',        '',                       'admin123',  0, 'Username is required'),
    ('empty password',        'admin@gamil.com',        '',          0, 'Password is required'),
    ('locked account',        'locked_user@gamil.com',  'pass123',   0, 'Account is locked'),
    ('special chars',         'admin@gamil.com',        'p@$$w0rd!', 1, ''),
    ('SQL injection attempt', 'admin'' OR ''1''=''1',   'password',  0, 'Invalid credentials');
