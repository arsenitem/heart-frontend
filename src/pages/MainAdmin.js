import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Chart from '../components/Chart'
function MainAdmin() {
    return (
        <div>
            <Row style={{marginTop:"60px"}}>
                <h2>Здравствуйте, user
                    </h2>
            </Row>
            <Row style={{marginTop:"40px"}}>
                <Col style={{textAlign: "center"}}>
                    <div className="main-col-img">
                        <img src="https://vitbiomedplus.ru/storage/5b3ced580a257.png">
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
                        <img src="https://sun9-67.userapi.com/impg/0wIaX2IKqwRebAqfOkzSQsZ1wAw1HCbwmkfIAw/5-5nmC2HZRQ.jpg?size=979x649&quality=96&proxy=1&sign=34a1bfd9fc70488bada6bdac53f2cb73">
                        </img>
                    </div>
                   
                    <Link>
                        Наблюдаемые
                    </Link>
                    <hr/>
                    Информация по наблюдаемым пациентам
                    <hr/>
                    Поиск наблюдаемого
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">
                                <i class="fa fa-search"></i>
                            </span>
                        </div>
                        </div>
                </Col>
                <Col style={{textAlign: "center"}}>
                    <div className="main-col-img">
                        <img src="https://iconsplace.com/wp-content/uploads/_icons/ff0000/256/png/settings-icon-14-256.png">
                        </img>
                    </div>
                    <Link>
                        Администрирование
                    </Link>
                    <hr/>      
                    Управление доступом и прочее  
                </Col>
            </Row>
        </div>
    );
}
export default MainAdmin;