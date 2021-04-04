
class UserEntity {
    /**
     * @type {Array<UserEntity>}
     */
    static table = [];

    /**
     * @public
     * @type {?string}
     */
    id;

    /**
     * @public
     * @type {?string}
     */
    token;
}

module.exports = UserEntity;