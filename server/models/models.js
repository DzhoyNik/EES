const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Employee = sequelize.define("employee", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    first_name: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    last_name: {type: DataTypes.STRING, allowNull: false},
    photo: {type: DataTypes.STRING, allowNull: false},
    phone: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    login: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
});

const StatusEmployee = sequelize.define("status_employee", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING, allowNull: false},
})

const RoleEmployee = sequelize.define("role_employee", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    role: {type: DataTypes.STRING, allowNull: false}
});

const Student = sequelize.define("student", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    first_name: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    last_name: {type: DataTypes.STRING, allowNull: false},
    photo: {type: DataTypes.STRING, allowNull: false},
    phone: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    login: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
});

const LevelEnglish = sequelize.define("level_english", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    level: {type: DataTypes.STRING, allowNull: false}
});

const Course = sequelize.define("course", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    countOfLessons: {type: DataTypes.INTEGER, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
});

const StatusCourses = sequelize.define("status_courses", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    status: {type: DataTypes.STRING, allowNull: false}
})

const Module = sequelize.define("module", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
});

const Theme = sequelize.define("theme", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.STRING, allowNull: false},
});

const News = sequelize.define("news", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    photo: {type: DataTypes.STRING, allowNull: false},
    title: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.STRING, allowNull: false},
    datetimeOfPublish: {type: DataTypes.STRING, allowNull: true},
});

const NewsStatus = sequelize.define("news_status", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING, allowNull: false}
});

Employee.hasMany(RoleEmployee);
RoleEmployee.belongsTo(Employee);

StatusEmployee.hasMany(Employee, { foreignKey: "statusEmployeeId", as: "employees" });
Employee.belongsTo(StatusEmployee, { foreignKey: "statusEmployeeId", as: "status" });

Employee.hasMany(Student);
Student.belongsTo(Employee);

Employee.hasMany(News);
News.belongsTo(Employee);

Student.hasMany(LevelEnglish);
LevelEnglish.belongsTo(Student);

Course.hasMany(Student);
Student.belongsTo(Course);

Course.hasMany(Module);
Module.belongsTo(Course);

StatusCourses.hasMany(Course, { foreignKey: "statusCoursesId", as: "courses" })
Course.belongsTo(StatusCourses, { foreignKey: "statusCoursesId", as: "status" })

Course.hasMany(Theme);
Theme.belongsTo(Course);

News.hasOne(NewsStatus);
NewsStatus.hasOne(News);

module.exports = {
    Employee,
    StatusEmployee,
    RoleEmployee,
    Student,
    LevelEnglish,
    Course,
    StatusCourses,
    Module,
    Theme,
    News,
    NewsStatus
}