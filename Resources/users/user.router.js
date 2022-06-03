const { createUser, getAllUser, getUserById, deleteUserById, updateUserById, getUserByEmail, deleteUserByEmail, updateUserByEmail } = require('./user.controller');
const router = require('express').Router();

router.route('/').post(createUser).get(getAllUser)
router.route('/:id').get(getUserById).delete(deleteUserById).patch(updateUserById)

// email query
router.route('/email/:email').get(getUserByEmail).delete(deleteUserByEmail).patch(updateUserByEmail)

const usersRouter = router;
module.exports = usersRouter;

