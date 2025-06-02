import Auth from "./pages/Auth"
import { AUTH_ROUTE, COURSES_ROUTE, NEWS_CREATE_ROUTE, NEWS_EDIT_ROUTE, NEWS_ROUTE, SETTINGS_ROUTE, STUDENTS_ROUTE } from "./utils/consts"
// import Statistics from "./pages/Statistics"
import News from "./pages/News"
import NewsCreate from "./pages/news/Create"
import NewsView from "./pages/news/View"
import NewsEdit from "./pages/news/Edit"
import Courses from "./pages/Courses"
import CoruseView from "./pages/course/view"
import CourseThemes from "./pages/course/themes"
import CourseStudents from "./pages/course/students"
import Students from "./pages/Students"
// import Employees from "./pages/Employees"
// import EmployeeView from "./pages/employee/VIew"
// import EmployeeEdit from "./pages/employee/Edit"
// import EmployeeCreate from "./pages/employee/Create"
import Settings from "./pages/Settings"

export const authRoutes = [
    // { path: STATISTICS_ROUTE, Component: Statistics },
    { path: NEWS_ROUTE, Component: News },
    { path: NEWS_CREATE_ROUTE, Component: NewsCreate },
    { path: NEWS_ROUTE + "/:id", Component: NewsView },
    { path: NEWS_EDIT_ROUTE + "/:id", Component: NewsEdit },
    { path: COURSES_ROUTE, Component: Courses },
    { path: COURSES_ROUTE + "/:id", Component: CoruseView },
    { path: COURSES_ROUTE + "/:id/themes", Component: CourseThemes },
    { path: COURSES_ROUTE + "/:id/students", Component: CourseStudents },
    { path: STUDENTS_ROUTE, Component: Students },
    // { path: EMPLOYEES_ROUTE, Component: Employees },
    // { path: EMPLOYEES_ROUTE + "/:id", Component: EmployeeView },
    // { path: EMPLOYEES_EDIT_ROUTE + "/:id", Component: EmployeeEdit },
    // { path: EMPLOYEES_CREATE_ROUTE, Component: EmployeeCreate  },
    { path: SETTINGS_ROUTE, Component: Settings }
]

export const publicRoutes = [
    { path: AUTH_ROUTE, Component: Auth }
]