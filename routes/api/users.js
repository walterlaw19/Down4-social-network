const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/user-controller.js');

// /api/users/<pizzaId>

router.route('/')
    .get(getAllUser)
    // .get()
    .post(createUser)



router.route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

router.route('/:userId/friends/:friendId')
    .post()
    .delete()



module.exports = router;