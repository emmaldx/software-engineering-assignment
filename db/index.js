const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("bookings.sqlite");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY,
        title string,
        firstName string NOT NULL,
        lastName string NOT NULL,
        password string NOT NULL,
        email string NOT NULL,
        roleId integer NOT NULL,
        createdAt string,
        updatedAt string 
     );
     `);

  // db.run(`CREATE UNIQUE INDEX idx_users_email ON users (email);
  //  `);

  db.run(`
     CREATE TABLE IF NOT EXISTS bookings(
        id INTEGER PRIMARY KEY,
        appointmentReason string NOT NULL,
        date date NOT NULL,
        time integer NOT NULL,
        additionalInformation string NOT NULL,
        userId integer NOT NULL,
        createdAt date NOT NULL,
        updatedAt date NOT NULL
     
     );
     `);

  db.run(`CREATE TABLE IF NOT EXISTS roles(
        id INTEGER PRIMARY KEY,
        type text NOT NULL,
        createdAt date NOT NULL,
        updatedAt date NOT NULL
     
     );
     `);

  db.run(
    `INSERT INTO users (firstName, lastName, password, email, roleId, createdAt, updatedAt) VALUES ("Emma",  "Dobson", "1234", "em.dob10@gmail.com",  "USER", "2023-01-01","2023-01-01")`
  );

  db.run(
    `INSERT INTO bookings (appointmentReason, date, time, additionalInformation, userId, createdAt, updatedAt) VALUES ("heart attack", "2021-01-01",  "10:00", "Left arm sore",  1,  "2023-01-01", "2023-01-01")`
  );

  db.run(
    `INSERT INTO bookings (appointmentReason, date, time, additionalInformation, userId, createdAt, updatedAt) VALUES ("flu", "2021-01-01",  "11:00", "cough",  1,  "2023-01-01", "2023-01-01")`
  );

  db.run(
    `INSERT INTO users (firstName, lastName, password, email, roleId, createdAt, updatedAt) VALUES ("Admin",  "User", "1234", "admin.1@gmail.com",  "ADMIN", "2023-01-01","2023-01-01")`
  );
});

module.exports = db;
