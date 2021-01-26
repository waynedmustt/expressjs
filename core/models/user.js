var User = function (user) {
    this.name = '';
    this.role = '';

    this.init(user);
}

User.prototype.init = function (user) {
    if (!user) {
        return;
    }

    if (user.name) {
        this.name = user.name;
    }

    if (user.role && ['admin', 'provider'].indexOf(user.role) !== -1) {
        this.role = user.role;
    }
}

module.exports = User;