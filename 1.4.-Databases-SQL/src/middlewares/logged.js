const isLogged = (req, res, next) => {
    let logged = false;
    if (logged) {
        next()
    } else {
        res.send("You must be logged")
    }
}

exports.isLogged = isLogged;
