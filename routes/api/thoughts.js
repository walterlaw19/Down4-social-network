const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thought-controller.js');

// /api/thoughts/<userId>

router.route('/')
    .get(getAllThought)
    // .get()
    .post(createThought)



router.route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

router.route('/:userId/reaction/:thoughtId')
    .post()
    .delete()



module.exports = router;