import { Container, Row } from 'react-bootstrap'
import Chart from '../components/Chart'
function UserNotify() {
    return (
        <div>
           <Container>
               <Row className="justify-content-center">
                    <div className="notify-item">
                        <div className="not-time">{new Date().toLocaleString()}</div>
                        Обнаружено повышеное артериальное давление
                        <hr/>
                        <label style={{fontSize: "20px"}}>Необходимо пройти тестирование в клинике</label>
                    </div>
                </Row>
                <Row className="justify-content-center">
                    <div className="notify-item">
                    <div className="not-time">{new Date().toLocaleString()}</div>
                        Обновлены прогнозы по результатам прохождения анкеты
                        <hr/>
                        <label style={{fontSize: "20px"}}>Перейти к прогнозу</label>
                    </div>
                </Row>
           </Container>
        </div>
    );
}
export default UserNotify;