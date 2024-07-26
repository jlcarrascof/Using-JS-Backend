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
    const param = req.params.id;

    for (let i=0; i < users.length; i++) {
        if (param == users[i].id) {
            users[i].name = req.body.name;
            users[i].age = req.body.age;
            break;
        }
    }

    res.render('users', {users: users});
}

const deleteUser = (req, res) => {
    const param = req.params.id;

    for (let i=0; i < users.length; i++) {
        if (param == users[i].id) {
            users.splice(i, 1);
            break;
        }
    }

    res.render('users', {users: users});
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
