const path = require('path');
const root = path.join(__dirname, '../public');

const getUsers =  (req, res) => {
    res.sendFile('users.html', {root: root});
}

const createUsers = (req, res) => {
    res.send('Create users');
}

const updateUsers = (req, res) => {
    res.send('Update users');
}

const deleteUsers = (req, res) => {
    res.send('Delete users');
}

module.exports = {
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers
}
