const users = [
    {id: 1, name: 'John', age: 25},
    {id: 2, name: 'Maria', age: 33},
    {id: 3, name: 'Joe', age: 28},
]

const getUsers =  (req, res) => {
    res.render('users', {users: users});
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
