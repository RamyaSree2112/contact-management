const db = require('../config/db');

class Contact {
    static create(userId, name, email, phone, address, timezone) {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO contacts (user_id, name, email, phone, address, timezone) VALUES (?, ?, ?, ?, ?, ?)';
            db.query(sql, [userId, name, email, phone, address, timezone], (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }

    static findAll(userId) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM contacts WHERE user_id = ? AND deleted_at IS NULL';
            db.query(sql, [userId], (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }

    // Add other methods like update, delete, etc.
}

module.exports = Contact;
