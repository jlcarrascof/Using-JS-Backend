const path = require('path');
const root = path.join(__dirname, '../public');

const getUsers =  (req, res) => {
    res.render('users');
}

const createUsers = (req, res) => {
    res.render('create-user');
}

const updateUsers = (req, res) => {
    res.render('update-user');
}

const deleteUsers = (req, res) => {
    res.render('delete-user');
}

module.exports = {
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers
}
