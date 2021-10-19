const router = require('express').Router();

const {
    getAllUser,
    getUsedById,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/comment-controller');

// /api/comments/<pizzaId>

router.route('/')
    .get(getAllUser)
    // .get()
    .post(createUser)



router.route('/:id')
    .get(getUsedById)
    .put(updateUser)
    .delete(deleteUser)

router.route('/:userId/friends/:friendId')
    .post()
    .delete()



module.exports = router;