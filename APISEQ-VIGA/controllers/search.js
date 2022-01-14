const Project = require('../models/project');
const Department = require('../models/department');
const Asset = require('../models/asset');
const sequelize = require('sequelize')

exports.postSearch = async(req,res)=>{
    try{
        console.log(req.body);
        const project = await Project.findAll({ 
            attributes: { exclude: ['createdAt','updatedAt'] },
            where: { 
                name: sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), 'LIKE', '%' + req.body.keyWord + '%')
            },
        });
        const department = await Department.findAll({ 
            attributes: { exclude: ['createdAt','updatedAt'] },
            where: { 
                name: sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), 'LIKE', '%' + req.body.keyWord + '%')
            },
        });
        const asset = await Asset.findAll({ 
            attributes: { exclude: ['createdAt','updatedAt'] },
            where: { 
                name: sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), 'LIKE', '%' + req.body.keyWord + '%')
            },
        });

        if (project === null && asset===null && department===null) {
            console.log('Not found!');
        } else {
            // console.log(project instanceof Project); // true
            console.log(asset); // 'My Title'

            const ans = [
                ...asset,
                ...project,
                // ...department
            ]
            return res.send(ans);
        }
    } catch(err){
        throw err;
    }
}