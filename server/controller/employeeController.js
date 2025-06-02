const ApiError = require("../error/apiError");
const bcrypt = require("bcryptjs");
const uuid = require("uuid");
const path = require("path");
const jwt = require("jsonwebtoken");
const _path = require("path");
const fs = require("fs");
const { Employee, StatusEmployee } = require("../models/models");

const generateJWT = (id, email) => {
    return jwt.sign(
        { id, email },
        process.env.SECRET_KEY,
        { expiresIn: "24h" }
    )
}

class EmployeeController {
    async sign_up(req, res, next) {
        const { first_name, name, last_name, phone, email, login, password } = req.body;

        if(!req.files || Object.keys(req.files) === 0) {
            return next(ApiError.badRequest("Файл не найден"));
        }

        if (!first_name || !name || !last_name || !phone || !email || !login || !password) {
            return next(ApiError.badRequest("Введите обязательные данные"));
        }

        const candidant = await Employee.findOne({ where: {phone, email, login} });

        if (candidant) {
            return next(ApiError.badRequest("Пользователь с такими данными уже зарегистрирован"));
        }

        const { photo } = req.files;
        let fileName = uuid.v4() + ".jpg";
        await photo.mv(path.join(__dirname, "..", "/static", "employee", fileName));
        const hashPassword = await bcrypt.hash(password, 5);

        const employee = await Employee.create({
            first_name,
            name,
            last_name,
            photo: fileName,
            phone,
            email,
            login,
            password: hashPassword,
            statusEmployeeId: 1
        })

        return res.json("Success!");
    }
    
    async sign_in(req, res, next) {
        const { login, password } = req.body;
        let employee = await Employee.findOne({ where: {login} });

        if (!employee) {
            employee = await Employee.findOne({ where: {email} });
        }

        if (!employee) {
            return next(ApiError.internal("Пользователь не найден!"));
        }

        let comparePassword = bcrypt.compareSync(password, employee.password);

        if (!comparePassword) {
            return next(ApiError.internal("Указан неверный пароль!"));
        }

        const token = generateJWT(employee.id, employee.email);

        return res.json({token});
    }

    async check(req, res, next) {
        const token = generateJWT(req.employee.id, req.employee.email);
        return res.json({token});
    }

    async getAll(req, res, next) {
        try {
            let { page, limit } = req.query;
            
            page = parseInt(page) || 1;
            limit = parseInt(limit) || 12;
            let offset = page * limit - limit;
    
            const employees = await Employee.findAndCountAll({
                limit,
                offset,
                include: [{ model: StatusEmployee, as: "status", attributes: ['status'] }]
            });
            return res.json(employees);
        }

        catch (e) {
            next(ApiError.badRequest(e.message));            
        }
    }

    async getOne(req, res, next) {
        try {
            const id = req.params.id;
            const employee = await Employee.findOne({
                where: {id},
                include: [{ model: StatusEmployee, as: "status", attributes: ['status'] }]
            })
            return res.json(employee);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeEmployee(req, res, next) {
        const { id, first_name, name, last_name, photo, phone, email } = req.query
        const employee = await Employee.findOne({ where: {id} })

        if (!employee) {
            return next(ApiError.badRequest("Пользователь не найден"))
        }

        try {
            await employee.update({
                first_name: first_name,
                name: name,
                last_name: last_name,
                photo: photo,
                phone: phone,
                email: email 
            })
            return res.json("Changed")
        } catch (e) {
            return next(ApiError.badRequest("Error: " + e.message))
        }
    }

    async changeStatus(req, res, next) {
        const { id, statusId } = req.query
        const employee = await Employee.findOne({ where: {id} })

        if (!employee) {
            return next(ApiError.badRequest("Пользователь не найден"))
        }
        
        let newStatudId = statusId == 1 ? 2 : 1

        try {
            await employee.update({ statusEmployeeId: newStatudId })
            return res.json("Success")
        } catch (e) {
            return next(ApiError.badRequest("Ошибка при изменении статуса"))
        }
    }

    async deleteOne(req, res, next) {
        try {
            const id = req.params.id
            const employee = await Employee.findOne({ where: { id: id } })

            if (!employee) {
                return next(ApiError.badRequest("Пользователь не найден"))
            }

            const filePath = _path.join(__dirname, "../static/employee/", employee.photo)

            try {
                await fs.promises.unlink(filePath)
            } catch (e) {
                return next(ApiError.internal("Ошибка при удалении файла"))
            }

            const del = await Employee.destroy({ where: {id: id} }) 
            return res.json(del)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new EmployeeController();