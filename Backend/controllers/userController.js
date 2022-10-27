const { userModel } = require('../model/userModel');

exports.getAllUsers = async (req, res) => {
    const allUsers = await userModel.find({});
    res.status(200).json({ status: "success", message: { data: allUsers } });
}

exports.registerUser = async (req, res) => {

    try {
        console.log("RU");

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
        res.status(401).json({ status: "failure", message: err });
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
        res.status(401).json({ status: "failure", message: err });
    }
}

exports.updateData = async (req, res) => {
    try {
        const dataToUpdate = req.body;

        const filter = { userId : dataToUpdate.userId };
        const options = { upsert: false };

        const updateUser = {
            $set: {
                ...dataToUpdate
            }
        }

        const result = await userModel.updateOne(filter, updateUser, options)
        
        if(result.modifiedCount == 0) {
            res
            .status(400)
            .json({ status: "failure", message: "User with given userId not found", data: {} });
            
        }else {
            res
            .status(200)
            .json({ status: "success", message: "Login Successful", data: result });
            
        }
        
        
    }catch(err) {
        res
        .status(401)
        .json({ status: "failure", message: "Some Error", data: err });
        
    }
}


// ___________COMMON(CALLED FROM projectController)______________________

exports.addProjectInMyProjects = async (userId, projectId) => {
    const filter = {userId: userId};
    const updation = {$addToSet: {myProjects: projectId}};

    const updated = await userModel.updateOne({filter, updation})

    return updated;
}

