const { Course, StatusCourses, Theme } = require("../models/models");
const ApiError = require("../error/apiError");

class CourseController {
    async create(req, res) {
        const { title, description, countOfLessons, price } = req.body;
        const statusCoursesId = 2
        const course = await Course.create({ title, description, countOfLessons, price, statusCoursesId });
        return res.json(course);
    }

    async createTheme(req, res) {
        const { title, text, courseId } = req.body;
        const theme = await Theme.create({ title, text, courseId });
        return res.json(theme);
    }
    
    async getAll(req, res) {
        const courses = await Course.findAll({
            include: [{model: StatusCourses, as: "status", attributes: ['status'] }]
        });
        return res.json(courses);
    }

    async getAllThemeCourse(req, res) {
        const themes = await Theme.findAll();
        return res.json(themes);
    }

    async delete(req, res) {
        const { id } = req.params
        const del = await Course.destroy({ where: {id} })
        return res.json(del)
    }
}

module.exports = new CourseController();