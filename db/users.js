const db = require("./index");

//checking that email and password are valid
const fetchUser = async (email, password) => {
  return new Promise((resolve, reject) => {
    return db.get(
      `SELECT * from users where email =? and password =?`,
      [email, password],
      (error, data) => {
        if (error) {
          reject(error);
        }
        resolve(data);
      }
    );
  });
};

// creating a function to save a user in the database.
const saveUser = async (firstName, lastName, email, password) => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.get(
        "select email from users where email = ?",
        email,
        (error, data) => {
          if (error || data?.email) {
            reject(error);
          }
        }
      );
      db.run(
        `INSERT INTO users (firstName, lastName, email, password, roleId, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?,?)`,
        [
          firstName,
          lastName,
          email,
          password,
          "USER",
          new Date().toISOString(),
          new Date().toISOString(),
        ],
        (error, data) => {
          if (error) {
            reject(error);
          }

          resolve(true);
        }
      );
    });
  });
};

module.exports = {
  fetchUser,
  saveUser,
};
