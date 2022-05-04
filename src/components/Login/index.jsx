import React from "react";
import LoginForm from "../Login-form";
import "./login.css";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div className="login">
                <header>
                    <a href="/">
                        <img src="" alt="" />
                    </a>
                    <a href="/reg">Регистрация</a>
                </header>
                <h2>
                    Войдите в свой аккаунт
                </h2>
                <LoginForm/>
            </div>
        );
    };
}

export default Login;