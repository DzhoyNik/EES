const ApiError = require("../error/apiError");
const { Student } = require("../models/models");
const bcrypt = require("bcryptjs");
const uuid = require("uuid");
const path = require("path");
const jwt = require("jsonwebtoken");

const generateJWT = (id, email) => {
    return jwt.sign(
        { id, email },
        process.env.SECRET_KEY,
        { expiresIn: "24h" }
    )
}

class StudentController {
    async sign_up(req, res, next) {
        const { first_name, name, last_name, phone, email, courseId } = req.body;

        const login = "test"
        const password = "test"

        if(!req.files || Object.keys(req.files) === 0) {
            return next(ApiError.badRequest("Файл не найден"));
        }

        if (!first_name || !name || !last_name || !phone || !email || !login || !password) {
            return next(ApiError.badRequest("Введите обязательные данные"));
        }

        const candidant = await Student.findOne({ where: {phone, email, login} });

        if (candidant) {
            return next(ApiError.badRequest("Пользователь с такими данными уже зарегистрирован"));
        }

        const { photo } = req.files;
        let fileName = uuid.v4() + ".jpg";
        await photo.mv(path.join(__dirname, "..", "/static", "students", fileName));
        const hashPassword = await bcrypt.hash(password, 5);

        const student = await Student.create({
            first_name,
            name,
            last_name,
            photo: fileName,
            phone,
            email,
            login,
            password: hashPassword,
            statusEmployeeId: 1,
            courseId
        })

        return res.json("Success!");
    }
    
    async sign_in(req, res, next) {
        const { login, password } = req.body;
        let student = await Student.findOne({ where: {login} });

        if (!student) {
            student = await Student.findOne({ where: {email} });
        }

        if (!student) {
            return next(ApiError.internal("Пользователь не найден!"));
        }

        let comparePassword = bcrypt.compareSync(password, student.password);

        if (!comparePassword) {
            return next(ApiError.internal("Указан неверный пароль!"));
        }

        const token = generateJWT(student.id, student.email);

        return res.json({token});
    }

    async check(req, res, next) {
        const token = generateJWT(req.student.id, req.student.email);
        return res.json({token});
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params;
            const student = await Student.findOne({
                where: {id},
                include: [{ model: StatusEmployee, as: "status", attributes: ['status'] }]
            })
            return res.json(student);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new StudentController();