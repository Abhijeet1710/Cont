const mongoose = require('mongoose');

mongoose
.connect('mongodb://localhost:27017/cont', {})
.then(() => console.log("Connected to DB successfully"));


const Msg = new mongoose.Schema({
    message: {
        type: String,
    },
    dispatchTime: {
        type: String
    }
})

const ParticularUserChat = new mongoose.Schema({
    from: {
        type: Number,
    },
    to: {
        type: Number
    },

    allMessages: {
        type: [Msg]
    }
})

const userSchema = new mongoose.Schema(
    {
        userId: {
            type: Number,
            unique: true,
            required: [true, 'Required Field']
        },
        name: {
            type: String,
            required: [true, 'Required Field']
        },
        userName: {
            type: String,
            unique: true,
            required: [true, 'Required Field']
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'Required Field']
        },
        password: {
            type: String,
            required: [true, 'Required Field']
        },
        phoneNumber: {
            type: String,
        },
        address: {
            type: String,
        },
        myProjects: {
            type: [Number],
            default: []
        },
        participatedProjects: {
            type: [Number],
            default: []
        },
        profilePicture: {
            type: String
        },
        connections: {
            type: [Number],
            default: []
        },
        connectionRequests: {
            type: [Number],
            default: []
        },

        chat: {
            type: [ParticularUserChat],
            default: []
        },
        tagLine: {
            type: String
        },
        liked: {
            type: [Number],
            default: []
        },
        aboutMe: {
            type: String
        },
        company: {
            type: String
        },
        location: {
            type: String
        },
        link: {
            type: String
        },
        twitter: {
            type: String
        },
    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: true
        }
    }
);


const userModel = mongoose.model('users', userSchema);

module.exports = {userModel, mongoose};