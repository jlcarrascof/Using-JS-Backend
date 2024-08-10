const connection = require('../connection');

const getUsers =  (req, res) => {
    const sql = 'SELECT * FROM users';
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('An error ocurred');
        } else {
            console.log(result);
            res.render('users', {users: result});
        }
    });
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
    console.log(req.body);
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
