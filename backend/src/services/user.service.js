const { v4: uuid } = require('uuid');
const UserEntity = require("../database/user.entity");

class UserService {
    constructor() {}

    /**
     * @param {string} token 
     * @returns {Promise<Array<UserEntity>}
     */
    async getUserByToken(token) {
        return UserEntity.table.find(user => user.token === token);
    }

    /**
     * 
     * @returns {Promise<Array<UserEntity>>}
     */
    async getUsers() {
        return [...UserEntity.table];
    }

    /**
     * @param {string} token 
     * @returns {Promise<UserEntity>}
     */
    async createUser(token) {
        const user = new UserEntity();
        user.id = uuid();
        user.token = token;
        UserEntity.table.push(user);
        return user;
    }
}

module.exports = UserService;