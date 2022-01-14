const Project = require('../models/project');
const Department = require('../models/department');
const Asset = require('../models/asset');

exports.postSearch = async(req,res)=>{
    try{
        const name = req.body.keyWord;

        console.log(req.body);
        // console.log(pp);
        const project = await Project.find({ 
            name: {$regex: name, $options: 'i'}
        });
        const department = await Department.find({ 
            name: {$regex: name, $options: 'i'}
        });
        const asset = await Asset.find({ 
            name: {$regex: name, $options: 'i'}
        });

        if (project === null && asset===null && department===null) {
            console.log('Not found!');
            return res.status(500);
        } else {
            // console.log(project instanceof Project); // true
            console.log(asset); // 'My Title'

            const ans = [
                ...asset,
                ...project,
                ...department
            ]
            return res.status(200).send(ans);
        }
    } catch(err){
        throw err;
    }
}