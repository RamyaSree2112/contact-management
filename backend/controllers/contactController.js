const Contact = require('../models/Contact');

exports.createContact = async (req, res) => {
    const { name, email, phone, address, timezone } = req.body;
    const userId = req.user.id; // Get user ID from the JWT token
    try {
        await Contact.create(userId, name, email, phone, address, timezone);
        res.status(201).json({ message: 'Contact created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getContacts = async (req, res) => {
    const userId = req.user.id; // Get user ID from the JWT token
    try {
        const contacts = await Contact.findAll(userId);
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
