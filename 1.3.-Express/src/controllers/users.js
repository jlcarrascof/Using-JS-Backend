const users = [
    {id: 1, name: 'John', age: 25},
    {id: 2, name: 'Maria', age: 33},
    {id: 3, name: 'Joe', age: 28},
]

const getUsers =  (req, res) => {
    res.render('users', {users: users});
}

const getCreateUsers = (req, res) => {
    res.render('create-user');
}

const getUpdateUsers = (req, res) => {
    res.render('update-user');
}

const getDeleteUsers = (req, res) => {
    res.render('delete-user');
}

const createUser = (req, res) => {
    users.push(req.body);
    res.render('users', {users: users});
}

const updateUser = (req, res) => {

}

const deleteUser = (req, res) => {

}

module.exports = {
    getUsers,
    getCreateUsers,
    getUpdateUsers,
    getDeleteUsers,
    createUser,
    updateUser,
    deleteUser
}
