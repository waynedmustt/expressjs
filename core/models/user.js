const config = require('../../config')
var User = function (user) {
    this.name = '';
    this.role = '';

    this.init(user);
}

User.prototype.init = function (user) {
    if (!user) {
        return;
    }

    let userRoles = ['admin', 'provider'];

    if (config && config.userRoles) {
        userRoles = config.userRoles;
    }

    if (user.name) {
        this.name = user.name;
    }

    if (user.role && userRoles.indexOf(user.role) !== -1) {
        this.role = user.role;
    }
}

module.exports = User;