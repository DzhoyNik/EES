import React from "react";
import Logo from "../img/logo.png";
import AuthForm from "../components/AuthForm";
import "../css/auth.css";

const Auth = () => {
    return(
        <div className="auth">
            <div className="auth-body">
                <AuthForm />
            </div>
            <div className="auth-logo">
                <img src={Logo} alt="" />
            </div>
        </div>
    )
}

export default Auth;