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
    const param = req.params.id;
    const sql = 'SELECT * FROM users WHERE id = ?';
    connection.query(sql, param, (err, result) => {
        if (err) {
            console.log('An error ocurred: ', err);
        } else {
            console.log(result);
            res.render('update-user', {user:result});
        }
    });
}

const getDeleteUsers = (req, res) => {
    const param = req.params.id;
    const sql = 'SELECT * FROM users WHERE id = ?';
    connection.query(sql, param, (err, result) => {
        if (err) {
            console.log('An error ocurred: ', err);
        } else {
            console.log(result);
            res.render('delete-user', {user:result});
        }
    });
}

const createUser = (req, res) => {
    const sql = 'INSERT INTO users SET ?';
    const data = req.body;
    connection.query(sql, data, (err, result) => {
        if (err) {
            console.log('An error ocurred');
        } else {
            console.log('User created');
            res.redirect('/users/all');
        }
    });
}

const updateUser = (req, res) => {
    const param = req.params.id;
    const sql = `UPDATE users SET name='${req.body.name}', age=${req.body.age} WHERE id = ${param}`;
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('An error ocurred ', err)
        } else {
            console.log('User updated');
            res.redirect('/users/all');
        }
    });
}

const deleteUser = (req, res) => {
    const param = req.params.id;
    const sql = `DELETE FROM users WHERE id = ${param}`;
    connection.query(sql, (err, result) => {
        if (err) {
            console.log('An error ocurred ', err)
        } else {
            console.log('User deleted');
            res.redirect('/users/all');
        }
    });
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
