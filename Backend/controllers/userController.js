const { userModel } = require('../model/userModel');

exports.getAllUsers = async (req, res) => {
    const allUsers = await userModel.find({});
    res.status(200).json({ status: "success", message: { data: allUsers } });
}

exports.registerUser = async (req, res) => {

    try {
        const totalUsers = await userModel.find({});
        const userId = totalUsers.length + 1;

        const newUser = { ...req.body, userId };

        const userWithSameEmail = await userModel.find({ email: newUser.email })

        if (userWithSameEmail.length != 0) {
            res.status(400).json({ status: "failure", message: "User with this email already exist", data: {} })
        } else {
            const newlyAddedUser = await userModel.create(newUser);
            res.status(200).json({ status: "success", message: "Register Successfuly", data: { data: newlyAddedUser } });
        }

    } catch (err) {
        res.status(400).json({ status: "failure", message: err });
    }
}

exports.loginUser = async (req, res) => {
    try{
        const userData = req.body;  //email, password

        const user = await userModel.find({email: userData.email, password: userData.password});
        if(user.length != 0) {
            res.status(200)
            .json({ status: "success", message: "Login Successful", data: user[0] });
        }else {
            res.status(400)
            .json({ status: "failure", message: "Wrong email or password", data: {} });
        }
    }catch(err) {
        res.status(400).json({ status: "failure", message: err });
    }
}

