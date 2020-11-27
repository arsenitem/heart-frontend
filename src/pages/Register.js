import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {login, logout} from '../store/reducers/loginReducer'
const { Row, Col, Form, Button, Container } = require("react-bootstrap");

function Register(props) {
    function onEnterClick() {
        props.history.push('/login')
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
                            <Form.Group controlId="formBasicPassword2">
                                <Form.Label>Подтвердите пароль</Form.Label>
                                <Form.Control type="password" placeholder="Введите пароль" className="login-input"/>
                            </Form.Group>
                            
                            <Button variant="danger" type="submit" style={{width: "100%"}} onClick={() => {props.login('token','testUser', 'admin')}}>
                                Регистрация
                            </Button>
                            <Button variant="secondary" type="submit" style={{width: "100%", marginTop: "15px"}} onClick={onEnterClick}>
                                Войти
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

export default connect(mapStateToProps, {login, logout})(withRouter(Register));