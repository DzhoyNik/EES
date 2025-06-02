const { News } = require("../models/models");
const uuid = require("uuid");
const path = require("path");
const ApiError = require("../error/apiError");
const fs = require("fs");
const _path = require("path")

class NewsController {
    async create(req, res, next) {
        try {
            const { title, text, datetimeOfPublish, employeeId, newsStatusId } = req.body;
            
            if(!req.files || Object.keys(req.files) === 0) {
                return next(ApiError.badRequest("Файл не найден"));
            }

            const { photo } = req.files;
            let fileName = uuid.v4() + ".jpg";
            await photo.mv(path.join(__dirname, "..", "/static/news/", fileName));
            
            const news = await News.create({ photo: fileName, title, text, datetimeOfPublish, employeeId, newsStatusId });

            return res.json(news);
        }

        catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    
    async getOne(req, res) {
        const news = await News.findOne({ where: { id: req.params.id } });
        return res.json(news);
    }
    
    async getAll(req, res, next) {
        try {
            let { page, limit } = req.query;
            
            page = parseInt(page) || 1;
            limit = parseInt(limit) || 12;
            let offset = page * limit - limit;
    
            const news = await News.findAndCountAll({ limit, offset });
            return res.json(news);
        }

        catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async deleteOne(req, res, next) {
        try {
            const id = req.params.id
            const news = await News.findOne({ where: { id: id } })

            if (!news) {
                return next(ApiError.badRequest("Новость не найдена"))
            }

            const filePath = _path.join(__dirname, "../static/news/", news.photo)

            try {
                await fs.promises.unlink(filePath)
            } catch (e) {
                return next(ApiError.internal("Ошибка при удалении файла"))
            }

            const del = await News.destroy({ where: {id: id} }) 
            return res.json(del)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new NewsController();