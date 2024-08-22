const User = require("../models/userModel")


exports.toggleUserShortlist = async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id)
    user.shortlisted = !user.shortlisted;
    await user.save({validateBeforeSave:false})

    res.status(200).json({
        success:true,
        user
    })
}

exports.createUser = async (req,res,next)=>{
    const user = await User.create(req.body);

    res.status(201).json({
        success:true,
        user
    })
}

exports.getAllUsers = async (req, res)=>{

    const users = await User.find();

    res.status(200).json({
        success:true,
        users
    });
}

exports.getShortlistedUsers = async (req, res)=>{

    const users = await User.find();

    const shortlistedUsers = []
    users.map((user)=>{
        if(user.shortlisted===true){
            shortlistedUsers.push(user);
        }
    })

    res.status(200).json({
        success:true,
        shortlistedUsers
    });
}