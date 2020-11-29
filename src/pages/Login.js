import { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {login, logout} from '../store/reducers/loginReducer'
const { Row, Col, Form, Button, Container } = require("react-bootstrap");

function Login(props) {
    function onRegisterClick() {
        props.history.push('/register/')
    }

    function onLoginClick(user) {
        localStorage.setItem('token', 'token')
        localStorage.setItem('role', user)
       
        if (user === 'admin') {
            props.login('token','Сергей Владимирович П.', user)
            props.history.push('/main')
        } else {
            props.login('token','Станислав Михайлович К.', user)
            props.history.push('/users/me')
        }
        
    }
    useEffect(() => {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container-sign");

        sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
        });

        sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
        }) 
    });
    return (
       
        // <div>
        //       <Container>
        //           <h2 style={{textAlign: "center", color: "red", marginTop:90}}>СППР "Сердце"</h2>
        //         <Row className="justify-content-center" style={{marginTop: 100}}>   
        //                <Form style={{padding:"90px", border: "1px solid red"}}>                      
        //                     <Form.Group controlId="formBasicEmail">
        //                         <Form.Label>Логин</Form.Label>
        //                         <Form.Control type="text" placeholder="Введите логин" className="login-input"/>                               
        //                     </Form.Group>
        //                     <Form.Group controlId="formBasicPassword">
        //                         <Form.Label>Пароль</Form.Label>
        //                         <Form.Control type="password" placeholder="Введите пароль" className="login-input"/>
        //                     </Form.Group>
        //                     <Form.Group controlId="formBasicCheckbox">
        //                         <Form.Check type="checkbox" label="Запомнить меня" />
        //                     </Form.Group>
        //                     <Button variant="danger" type="submit" style={{width: "100%"}} onClick={onLoginClick}>
        //                         Войти
        //                     </Button>
        //                     <div style= {{cursor: "pointer", marginTop: "15px", border: "1px solid red", backgroundImage: "url('https://login.mos.ru/sps/login/assets//img/meth-esia-logo.png')", height: "38px", backgroundSize: "70%", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} className="gos-uslugi">
                                 
        //                     </div>

                                
        //                     <Button variant="secondary" type="submit" style={{width: "100%", marginTop: "15px"}} onClick={onRegisterClick}>
        //                         Регистрация
        //                     </Button>
        //                </Form>
        //            </Row>
        //            <Row className="footer justify-content-center" style={{marginTop: "20%"}}>
        //                 @Команада Курабье 2020
        //            </Row>
        //       </Container>

        // </div>
    <div className="container-sign">
        <div className="forms-container">
            <div className="signin-signup">
                <form action="#" className="sign-in-form">
                    <h2 className="title">Вход для пациентов</h2>
                    <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Логин" />
                    </div>
                    <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Пароль" />
                    </div>
                    <input type="submit" value="Войти" className="btn-login solid" onClick={() => {onLoginClick('user')}}/>
                    <p className="social-text">Войти с помощью</p>
                    <div className="social-media">
                    <a href="#">
                        <p ><img width="100%" style={{ transform:"scale(0.5)"}} src="https://login.mos.ru/sps/login/assets//img/meth-esia-logo.png" alt="Госуслуги"/></p>
                    </a>
                    </div>
                </form>
                <form action="#" className="sign-up-form">
                    <h2 className="title">Вход для сотрудников</h2>
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Логин" />
                    </div> 
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Пароль" />
                    </div>
                    <input type="submit" className="btn-login" value="Войти" onClick={() => {onLoginClick('admin')}}/>
                </form>
            </div>
	    </div>
        <div className="panels-container">
            <div className="panel left-panel">
                <div className="content">
                    <button className="btn-login transparent" id="sign-up-btn">
                    Я доктор
                    </button>
                    <p>
                    Специальная форма входа для сотрудников поликлиники.
                    </p>
                </div>
            </div>
            <div className="panel right-panel">
                <div className="content">
                    <button className="btn-login transparent" id="sign-in-btn">
                    Я пациент
                    </button>
                    <p>
                    Специальная форма входа для пациентов.
                    </p>
                   
                </div>
            </div>
        </div>
    </div>
    );
  }

function mapStateToProps(state) {
    return {
        state: state
    }
}

export default connect(mapStateToProps, {login, logout})(withRouter(Login));