import { Container, Row } from 'react-bootstrap'
import Chart from '../components/Chart'
function Recomendations() {
    return (
        <div>
           <Container>
               {/* <Row className="justify-content-center">
                    <div className="recomendation-item">
                        Обнаружено повышеное артериальное давление
                        <hr/>
                        Необходимо пройти тестирование в клинике
                    </div>
               </Row> */}
               <Row className="justify-content-center">
                    <div className="recomendation-item">
                        Понизьте уровень потребляемого сахара, возможен риск сахарного диабета
                    </div>
                </Row>
                <Row className="justify-content-center">
                    <div className="recomendation-item">
                        Занимайтесь физическими нагрузками в зале и дома.
                    </div>
                </Row>
                <Row className="justify-content-center">
                    <div className="recomendation-item">
                        Соблюдайте чёткий распорядок дня (постоянное время подъёма и отхода ко сну).
                    </div>
                </Row>
                <Row className="justify-content-center">
                    <div className="recomendation-item">
                        Снизьте употребления поваренной соли 
                    </div>
                </Row>
                <Row className="justify-content-center">
                    <div className="recomendation-item">
                        Ограничьте потребление спиртных напитков.
                    </div>
                </Row>
           </Container>
        </div>
    );
}
export default Recomendations;