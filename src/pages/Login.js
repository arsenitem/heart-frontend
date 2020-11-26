import { connect } from "react-redux";
import {login, logout} from '../store/reducers/loginReducer'
const { Row, Col, Form, Button, Container } = require("react-bootstrap");

function Login(props) {
    return (
        <div>
              <Container>
                  <h2 style={{textAlign: "center", color: "red", marginTop:90}}>ИСПБ "Сердце"</h2>
                <Row className="justify-content-center" style={{marginTop: 100}}>   
                       <Form style={{padding:"90px", border: "1px solid red"}}>                      
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Логин</Form.Label>
                                <Form.Control type="email" placeholder="Введите логин" />                               
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Пароль</Form.Label>
                                <Form.Control type="password" placeholder="Введите пароль" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Запомнить меня" />
                            </Form.Group>
                            <Button variant="danger" type="submit" style={{width: "100%"}} onClick={() => {props.login('token','testUser', 'admin')}}>
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

export default connect(mapStateToProps, {login, logout})(Login);