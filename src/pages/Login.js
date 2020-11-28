import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {login, logout} from '../store/reducers/loginReducer'
const { Row, Col, Form, Button, Container } = require("react-bootstrap");

function Login(props) {
    function onRegisterClick() {
        props.history.push('/register/')
    }

    function onLoginClick() {
        localStorage.setItem('token', 'token')
        props.login('token','testUser', 'admin')
        props.history.push('/main')
    }

    return (
        <div>
              <Container>
                  <h2 style={{textAlign: "center", color: "red", marginTop:90}}>СППР "Сердце"</h2>
                <Row className="justify-content-center" style={{marginTop: 100}}>   
                       <Form style={{padding:"90px", border: "1px solid red"}}>                      
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Логин</Form.Label>
                                <Form.Control type="text" placeholder="Введите логин" className="login-input"/>                               
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Пароль</Form.Label>
                                <Form.Control type="password" placeholder="Введите пароль" className="login-input"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Запомнить меня" />
                            </Form.Group>
                            <Button variant="danger" type="submit" style={{width: "100%"}} onClick={onLoginClick}>
                                Войти
                            </Button>
                            <div style= {{cursor: "pointer", marginTop: "15px", border: "1px solid red", backgroundImage: "url('https://login.mos.ru/sps/login/assets//img/meth-esia-logo.png')", height: "38px", backgroundSize: "70%", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} className="gos-uslugi">
                                 
                            </div>

                                
                            <Button variant="secondary" type="submit" style={{width: "100%", marginTop: "15px"}} onClick={onRegisterClick}>
                                Регистрация
                            </Button>
                       </Form>
                   </Row>
                   <Row className="footer justify-content-center" style={{marginTop: "20%"}}>
                        @Команада Курабье 2020
                   </Row>
              </Container>

        </div>
    );
  }

function mapStateToProps(state) {
    return {
        state: state
    }
}

export default connect(mapStateToProps, {login, logout})(withRouter(Login));