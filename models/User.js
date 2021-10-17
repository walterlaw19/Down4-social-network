const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');  // is it needed?
const emailVal = require('../utils/emailValidation');


const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: emailVal,
                message: 'Email validation failed'
            }
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,  // virtual called friendCount to retreive length of the user's friend array field on query
            // getters: true  
        }
    }
)

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})


const User = model('User', UserSchema);
module.exports = User;