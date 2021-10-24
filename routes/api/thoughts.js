const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
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

router.route('/:thoughtId/reaction')
    .post(addReaction)
    
router.route('/:thoughtId/reaction/:reactionId')  
    .delete(removeReaction)



module.exports = router;