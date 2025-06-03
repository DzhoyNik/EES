import Auth from "./pages/Auth"
import Main from "./pages/Main"
import News from "./pages/News"
import Payment from "./pages/Payment"
import Themes from "./pages/Themes"
import { AUTH_ROUTE, MAIN_ROUTE, NEWS_ROUTE, PAYMENT_ROUTE, THEMES_ROUTE } from "./utils/consts"

export const authRoutes = [
    { path: NEWS_ROUTE, Component: News },
    { path: THEMES_ROUTE, Component: Themes }
]

export const publicRoutes = [
    { path: MAIN_ROUTE, Component: Main },
    { path: PAYMENT_ROUTE + "/:id", Component: Payment },
    { path: AUTH_ROUTE, Component: Auth },
]