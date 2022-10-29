const {projectModel} = require('../model/projectModel');

exports.getAllProjects = async (req, res) => {
    try {
        console.log("In GetAllProjects");
        const allProjects = await projectModel.find({});
        res.status(200).json({ status: "success", message: "Data fetached", data: allProjects });
    }catch(err) {
        res.status(401).json({ status: "failure", message: "Some Error : "+err,  data: []  });
    }
}

exports.getProject = async (req, res) => {
    try {

        const result = await projectModel.find({projectId: req.params.projectId});

        res
        .status(200)
        .json({ status: "success", message: "MSG", data: result });
        
    }catch(err) {
        res
        .status(4001)
        .json({ status: "failure", message: err, data: {} });
        
    }
}