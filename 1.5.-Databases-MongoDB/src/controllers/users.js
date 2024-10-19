const User = require('../models/users.js')

const getUsers = (req, res) => {
    User.find({})
      .then(result => {
        console.log(result);
        res.render('users', { users: result });
      })
      .catch(err => {
        console.log('An error occurred');
        res.status(500).send('Error fetching users');
      });
};

const getCreateUsers = (req, res) => {
    res.render('create-user');
}

const getUpdateUsers = (req, res) => {
    const param = req.params.id;
    User.findById(param)
      .then(user => {
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.render('update-user', { user });
      })
      .catch(err => {
        console.log('An error occurred', err);
        res.status(500).send('Error fetching user');
      });
}

const getDeleteUsers = (req, res) => {
    const param = req.params.id;
    User.findById(param)
        .then(user => {
            if (!user) {
                return res.status(404).send('User not found');
            }
            res.render('delete-user', { user });
        })
        .catch(err => {
            console.log('An error occurred:', err);
            res.status(500).send('Error fetching user');
        });
};

const createUser = (req, res) => {
    const data = req.body

    // simple validation
    if (!data.name || !data.age) {
        return res.status(400).send('Name and age are required.')
    }

    const user = new User({
        name: data.name,
        age: data.age
    })

    user.save()
        .then(() => {
            console.log('User created')
            res.redirect('/users/all')
        })
        .catch(err => {
            console.error('An error occurred:', err)
            res.status(500).send('Error creating user')
        });
}

const updateUser = (req, res) => {
    const userId = req.params.id;
    const updatedData = {
        name: req.body.name,
        age: req.body.age
    };

    // Update the user with the given ID
    User.findByIdAndUpdate(userId, updatedData, { new: true })
      .then(updatedUser => {
          if (!updatedUser) {
              return res.status(404).send('User not found');
          }
          res.redirect('/users/all');
      })
      .catch(err => {
          console.log('Error updating user:', err);
          res.status(500).send('Error updating user');
      });
};


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
