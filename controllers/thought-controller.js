const { Thought } = require('../models');

const thoughtController = {

    getAllThought(req, res) {
        Thought.find({})
    }
}




module.exports = thoughtController;