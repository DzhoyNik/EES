const ApiError = require("../error/apiError");
const { Theme } = require("../models/models");

class ThemeController {
    async create(req, res) {
        
    }
    
    async getOne(req, res) {

    }
    
    async getAll(req, res, next) {
        try {
            let { id } = req.params

            const themes = await Theme.findAndCountAll({where: {
                courseId: id
            }});
            return res.json(themes);
        }

        catch (e) {
            next(ApiError.badRequest(e.message));            
        }
    }

    async update(req, res, next) {
        const { id } = req.params
        const { title, text } = req.query
        const theme = await Theme.findOne({ where: {id} })
        
        try {
            await theme.update({
                title: title,
                text: text,
            })
            return res.json("Changed")
        }
        
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res) {
        const { id } = req.params
        const del = await Theme.destroy({ where: {id} })
        return res.json(del)
    }

}

module.exports = new ThemeController();