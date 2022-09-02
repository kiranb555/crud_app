
exports.HomeRoute = (req, res) => {
    res.render('index')
};


exports.AddUser = (req, res) => {
    res.render('add_user');
};

exports.UpdateUser = (req, res) => {
    res.render('update_user');
}