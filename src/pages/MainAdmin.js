import { Col, Row } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import Chart from '../components/Chart'
function MainAdmin(props) {
    return (
        <div>
            <Row style={{marginTop:"60px"}}>
                <h2>Здравствуйте, Сергей Владимирович
                    </h2>
            </Row>
            <Row style={{marginTop:"40px"}}>
                <Col style={{textAlign: "center"}}>
                    <div className="main-col-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSab0EWfzli_JcQ_lxm7IQN9p1KDPWJgUrwqg&usqp=CAU">
                        </img>
                    </div>
                  
                    <Link>
                        Состояния
                    </Link>
                    <hr/>
                    Отслеживание и просмотр наблюдаемых по их состояниям
                </Col>
                <Col style={{textAlign: "center"}}>
                    <div className="main-col-img">
                        <img src="https://www.pngkey.com/png/full/412-4125400_manage-your-team-users-icon-png-blue.png">
                        </img>
                    </div>
                   
                    <Link to="/users">
                        Наблюдаемые
                    </Link>
                    <hr/>
                    Информация по наблюдаемым пациентам
                    <hr/>
                    Поиск наблюдаемого
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Введите ФИО пользователя" aria-label="Введите ФИО" aria-describedby="basic-addon2"/>
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2" onClick={() => {props.history.push('/users/1')}}>
                                <i class="fa fa-search"></i>
                            </span>
                        </div>
                        </div>
                </Col>
                <Col style={{textAlign: "center"}}>
                    <div className="main-col-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJE7yLesVzpeRsCEOvZwD-NqIYXV8kD75zQ&usqp=CAU" style={{width:"100px",marginLeft: "50px"}}>
                        </img>
                    </div>
                    <Link>
                        Администрирование
                    </Link>
                    <hr/>      
                    Управление доступом 
                </Col>
            </Row>
        </div>
    );
}
export default withRouter(MainAdmin);