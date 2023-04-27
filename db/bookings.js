const db = require("./index");

// creating a function to save an appointment in the database.
const saveAppointment = async (
  date,
  time,
  appointmentReason,
  additionalInformation,
  userId
) => {
  return new Promise((resolve, reject) => {
    return db.run(
      `insert INTO bookings (date,time,appointmentReason,additionalInformation,userId,createdAt,updatedAt) VALUES(?,?,?,?,?,?,?)`,
      [
        date,
        time,
        appointmentReason,
        additionalInformation,
        userId,
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
};

// creating a function to delete an appointment in the database.
const deleteAppointment = async (bookingId) => {
  console.log(bookingId, "<<<BOOKING ID");
  return new Promise((resolve, reject) => {
    return db.run(
      "DELETE from bookings where id = ?",
      [bookingId],
      (error, data) => {
        if (error) {
          reject(error);
        }
        console.log(data);
        resolve(data);
      }
    );
  });
};

// creating a function for 'Fetch Admin Appointment'.
const fetchAppointmentAdmin = async (id) => {
  console.log(id);
  return new Promise((resolve, reject) => {
    return db.get(`SELECT * FROM bookings WHERE id = ?`, id, (error, data) => {
      if (error) {
        reject(error);
      }
      console.log(data);
      resolve(data);
    });
  });
};

// creating a function for 'view your appointments'.
const retrieveAppointment = async (userId) => {
  return new Promise((resolve, reject) => {
    return db.all(
      `SELECT * FROM bookings WHERE userId = ? `,
      userId,
      (error, data) => {
        if (error) {
          reject(error);
        }

        resolve(data);
      }
    );
  });
};

// creating a function for 'view patient appointments'.

const retrievePatientAppointments = async () => {
  return new Promise((resolve, reject) => {
    return db.all(
      `SELECT users.id as userId, bookings.appointmentReason, bookings.date, bookings.time, bookings.additionalInformation, users.firstName, users.lastName, bookings.id  FROM bookings LEFT JOIN users ON bookings.userId = users.id`,
      (error, data) => {
        if (error) {
          reject(error);
        }

        resolve(data);
      }
    );
  });
};

// creating a function for 'Edit Appointment'.
const editAppointment = async (userId, id) => {
  return new Promise((resolve, reject) => {
    return db.get(
      `SELECT * FROM bookings WHERE  id = ?`,
      [userId, id],
      (error, data) => {
        if (error) {
          reject(error);
        }
        resolve(data);
      }
    );
  });
};

// creating a function for 'Edit Admin Appointment'.
const editAppointmentAdmin = async (id) => {
  console.log(id);
  return new Promise((resolve, reject) => {
    return db.get(`SELECT * FROM bookings WHERE id = ?`, id, (error, data) => {
      if (error) {
        reject(error);
      }
      console.log(data);
      resolve(data);
    });
  });
};

// creating a function to update an appointment in the database.
const updateAppointment = async (
  date,
  time,
  appointmentReason,
  additionalInformation,
  appointmentId
) => {
  return new Promise((resolve, reject) => {
    return db.run(
      `update bookings set date =?,time =?,appointmentReason =?,additionalInformation =?,updatedAt =? where id =?`,
      [
        date,
        time,
        appointmentReason,
        additionalInformation,
        new Date().toISOString(),
        appointmentId,
      ],
      (error, data) => {
        if (error) {
          reject(error);
        }
        resolve(true);
      }
    );
  });
};

module.exports = {
  saveAppointment,
  deleteAppointment,
  retrieveAppointment,
  retrievePatientAppointments,
  editAppointment,
  updateAppointment,
  fetchAppointmentAdmin,
  editAppointmentAdmin,
};
