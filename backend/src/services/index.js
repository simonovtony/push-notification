const FirebaseService = require("./firebase.service");
const UserService = require("./user.service");

class Services {
    /**
     * @type {FirebaseService}
     */
    firebaseService;

    /**
     * @type {UserService}
     */
    userService;

    constructor() {
        this.firebaseService = new FirebaseService();
        this.userService = new UserService();
    }
}

/**
 * @type {Services}
 */
let instance;

/**
 * 
 * @returns {Services}
 */
const services = () => {
    if (!instance) {
        instance = new Services();
    }

    return instance;
};

module.exports = services;