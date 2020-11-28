import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";

function User(props) {
    useEffect(() => {
        // api.get(`/user?id=${match.params.id}`).then(response => {

        // }).catch(err => {
        //     console.log(err)
        // })
        
    }, [])
    return(
        <div>
            <Row style= {{marginTop: "50px"}}>
                <div style={{backgroundColor: "#ccc", width:"100%", height:"100px"}}>
                    <div style={{width: "100px", height: "100px", float: "left"}}>
                        <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png" style={{width: "100px", height: "100px"}}>
                        </img>
                    </div>
                    Сергей Владимирович П
                    
                </div>
            </Row>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Общие сведения</a>
                    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">История</a>
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Состояния</a>
                    <a class="nav-item nav-link" id="nav-activity-tab" data-toggle="tab" href="#nav-activity" role="tab" aria-controls="nav-activity" aria-selected="false">Анкеты</a>
                    <a class="nav-item nav-link" id="nav-obsled-tab" data-toggle="tab" href="#nav-obsled" role="tab" aria-controls="nav-obsled" aria-selected="false">Просмотр данных</a>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <Row className="ml-1">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Основная иформация</a>
                            <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Документы</a>
                            </div>
                            <div class="tab-content" id="v-pills-tabContent" style={{width:"80%"}}>
                                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <Row className="ml-2 mt-2">
                                        <Col md={4}>
                                                ФИО
                                        </Col>
                                        <Col>
                                                Сергей Владимирович П
                                        </Col>
                                    </Row>
                                    
                                    <Row className="ml-2 mt-2">
                                        <Col md={4}>
                                                Пол
                                        </Col>
                                        <Col>
                                                Мужской
                                        </Col>
                                    </Row>
                                    
                                    <Row className="ml-2 mt-2">
                                        <Col md={4}>
                                                Дата рождения
                                        </Col>
                                        <Col>
                                                19.03.1985, 35 лет
                                        </Col>
                                    </Row>
                                    
                                    <Row className="ml-2 mt-2">
                                        <Col md={4}>
                                                Регистрационный номер
                                        </Col>
                                        <Col>
                                                1456023
                                        </Col>
                                    </Row>
                
                                </div>
                                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <Row className="ml-2 mt-2">
                                        <Col md={4}>
                                                Паспорт
                                        </Col>
                                        <Col>
                                                515069 5418
                                        </Col>
                                    </Row>
                                    
                                    <Row className="ml-2 mt-2">
                                        <Col md={4}>
                                                Снилс
                                        </Col>
                                        <Col>
                                                127-456-789 00 
                                        </Col>
                                    </Row>
                                    <Row className="ml-2 mt-2">
                                        <Col md={4}>
                                                Полис ОМС
                                        </Col>
                                        <Col>
                                                7819 6108 8600 7450
                                        </Col>
                                    </Row>
                                   
                                </div>
                        </div>
                    </Row>
                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Дата приема</th>
                            <th scope="col">Место приема</th>
                            <th scope="col">Врач</th>
                            <th scope="col">Жалобы</th>
                            <th scope="col">Заключение</th>
                            <th scope="col">Комментарий</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">22.04.2020</th>
                                <td>Кузбасская клиническая больница скорой медицинской помощи им. М.А. Подгорбунского</td>
                                <td>Евгений Олегович Ващенко</td>
                                <td>Повышеное сердцебиение</td>
                                <td>Выпил кофе и паникует</td>
                                <td>Необходимо дальнейшее наблюдение</td>
                            </tr>
                            <tr>
                                <th scope="row">12.01.2019</th>
                                <td>Кемеровская клиническая районная больница</td>
                                <td>Евгений Олегович Ващенко</td>
                                <td>Головная боль</td>
                                <td>Гипертония</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">17.03.2017</th>
                                <td>Кемеровская клиническая районная больница</td>
                                <td>Евгений Олегович Ващенко</td>
                                <td>Повышеное артериальное давление (>150)</td>
                                <td>Гипертония</td>
                                <td>Прописаны таблетки</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">33</div>
                <div class="tab-pane fade" id="nav-activity" role="tabpanel" aria-labelledby="nav-activity-tab">activity</div>
                <div class="tab-pane fade" id="nav-obsled" role="tabpanel" aria-labelledby="nav-obsled-tab">obsled</div>
            </div>
        </div>
    )
}
export default withRouter(User);