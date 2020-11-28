import { useEffect, useState } from "react";
import { Alert, Button, Col, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Chart from '../components/Chart'
import HeartRateChart from "../components/HeartRateChart";
import PrognozChart from "../components/PrognozChart";
function User(props) {
    useEffect(() => {
        // api.get(`/user?id=${match.params.id}`).then(response => {

        // }).catch(err => {
        //     console.log(err)
        // })
    
    })
    let [ancets, setAncets] = useState(true)
    let [history, setHistory] = useState(false)
    let [prognoz, setPrognoz] = useState(false)
    let [data, setData] = useState(false)
    let [show, setShow] = useState(true)
    function openAnkets() {
        setAncets(!ancets)
        // var profile_slider = document.querySelector(".profile_slider");
        // profile_slider.classList.toggle("active");
    }
    function openHistory() {
        closeAll()
        setHistory(!history)
        
    }
    function showData() {
        closeAll()
        setData(!data)
        
    }
    function openPrognoz() {
        closeAll()
        setPrognoz(!prognoz)
        
    }
    function closeAll() {
        setAncets(true)
        setHistory(false)
        setPrognoz(false)
        setData(false)
    }
    return(
        // <div>
        //     <Row style= {{marginTop: "50px"}}>
        //         <div style={{backgroundColor: "#ccc", width:"100%", height:"70px"}}>
        //             <div style={{width: "70px", height: "70px", float: "left"}}>
        //                 <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png" style={{width: "70px", height: "70px"}}>
        //                 </img>
        //             </div>
        //             <h4 style={{marginTop: "20px"}}>
        //             Сергей Владимирович П
        //              </h4>
                    
        //         </div>
        //     </Row>
        //     <nav>
        //         <div class="nav nav-tabs" id="nav-tab" role="tablist">
        //             <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Общие сведения</a>
        //             <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">История</a>
        //             <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Состояния</a>
        //             <a class="nav-item nav-link" id="nav-activity-tab" data-toggle="tab" href="#nav-activity" role="tab" aria-controls="nav-activity" aria-selected="false">Анкеты</a>
        //             <a class="nav-item nav-link" id="nav-obsled-tab" data-toggle="tab" href="#nav-obsled" role="tab" aria-controls="nav-obsled" aria-selected="false">Просмотр данных</a>
        //             <a class="nav-item nav-link" id="nav-prognoz-tab" data-toggle="tab" href="#nav-prognoz" role="tab" aria-controls="nav-prognoz" aria-selected="false">Прогнозирование</a>
        //         </div>
        //     </nav>
        //     <div class="tab-content" id="nav-tabContent">
        //         <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        //             <Row className="ml-1">
        //                 <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        //                     <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Основная иформация</a>
        //                     <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Документы</a>
        //                     </div>
        //                     <div class="tab-content" id="v-pills-tabContent" style={{width:"80%"}}>
        //                         <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
        //                             <Row className="ml-2 mt-2">
        //                                 <Col md={4}>
        //                                         ФИО
        //                                 </Col>
        //                                 <Col>
        //                                         Сергей Владимирович П
        //                                 </Col>
        //                             </Row>
                                    
        //                             <Row className="ml-2 mt-2">
        //                                 <Col md={4}>
        //                                         Пол
        //                                 </Col>
        //                                 <Col>
        //                                         Мужской
        //                                 </Col>
        //                             </Row>
                                    
        //                             <Row className="ml-2 mt-2">
        //                                 <Col md={4}>
        //                                         Дата рождения
        //                                 </Col>
        //                                 <Col>
        //                                         19.03.1985, 35 лет
        //                                 </Col>
        //                             </Row>
                                    
        //                             <Row className="ml-2 mt-2">
        //                                 <Col md={4}>
        //                                         Регистрационный номер
        //                                 </Col>
        //                                 <Col>
        //                                         1456023
        //                                 </Col>
        //                             </Row>
                
        //                         </div>
        //                         <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
        //                         <Row className="ml-2 mt-2">
        //                                 <Col md={4}>
        //                                         Паспорт
        //                                 </Col>
        //                                 <Col>
        //                                         515069 5418
        //                                 </Col>
        //                             </Row>
                                    
        //                             <Row className="ml-2 mt-2">
        //                                 <Col md={4}>
        //                                         Снилс
        //                                 </Col>
        //                                 <Col>
        //                                         127-456-789 00 
        //                                 </Col>
        //                             </Row>
        //                             <Row className="ml-2 mt-2">
        //                                 <Col md={4}>
        //                                         Полис ОМС
        //                                 </Col>
        //                                 <Col>
        //                                         7819 6108 8600 7450
        //                                 </Col>
        //                             </Row>
                                   
        //                         </div>
        //                 </div>
        //             </Row>
        //         </div>
                // <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                //     <table class="table">
                //         <thead>
                //             <tr>
                //             <th scope="col">Дата приема</th>
                //             <th scope="col">Место приема</th>
                //             <th scope="col">Врач</th>
                //             <th scope="col">Жалобы</th>
                //             <th scope="col">Заключение</th>
                //             <th scope="col">Комментарий</th>
                //             </tr>
                //         </thead>
                //         <tbody>
                //             <tr>
                //                 <th scope="row">22.04.2020</th>
                //                 <td>Кузбасская клиническая больница скорой медицинской помощи им. М.А. Подгорбунского</td>
                //                 <td>Евгений Олегович Ващенко</td>
                //                 <td>Повышеное сердцебиение</td>
                //                 <td>Выпил кофе и паникует</td>
                //                 <td>Необходимо дальнейшее наблюдение</td>
                //             </tr>
                //             <tr>
                //                 <th scope="row">12.01.2019</th>
                //                 <td>Кемеровская клиническая районная больница</td>
                //                 <td>Евгений Олегович Ващенко</td>
                //                 <td>Головная боль</td>
                //                 <td>Гипертония</td>
                //                 <td></td>
                //             </tr>
                //             <tr>
                //                 <th scope="row">17.03.2017</th>
                //                 <td>Кемеровская клиническая районная больница</td>
                //                 <td>Евгений Олегович Ващенко</td>
                //                 <td>Повышеное артериальное давление (>150)</td>
                //                 <td>Гипертония</td>
                //                 <td>Прописаны таблетки</td>
                //             </tr>
                //         </tbody>
                //     </table>
                // </div>
        //         <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">33</div>
        //         <div class="tab-pane fade" id="nav-activity" role="tabpanel" aria-labelledby="nav-activity-tab">

        //         </div>
        //         <div class="tab-pane fade" id="nav-obsled" role="tabpanel" aria-labelledby="nav-obsled-tab">obsled</div>
        //         <div class="tab-pane fade" id="nav-prognoz" role="tabpanel" aria-labelledby="nav-prognoz-tab">
        //             <PrognozChart/>
        //             <HeartRateChart/>
        //             <Chart/>
        //         </div>
        //     </div>
        // </div>
        
        <div className="wrapper">
            {localStorage.getItem('role') === 'user' ? 
            <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible style={{position:"absolute",left: "115%", marginTop: "-100px",width: "600px"}}>
            <Alert.Heading>Доступна новая анкета</Alert.Heading>
                <p>
                    Прохождение данной анкеты позволит с большей точностью предсказать возможные болезни
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                <Button onClick={() =>{}} variant="outline-success">
                    Заполнить
                </Button>
                </div>
            </Alert>
            : ""}
            <div className="profile_card">
                <div className="settings_btn" onClick={openAnkets}>
                    Анкеты
                </div>
                <div className="hist_btn" onClick={openHistory}>
                    История
                </div>
                <div className="sost_btn">
                    Состояние
                </div>
                <div className="prog_btn" onClick={openPrognoz}>
                    Прогнозирование
                </div>
                <div className="data_btn" onClick={showData}>
                    Данные
                </div>
                

                
                
                
            
                <div className="profile_wrap">
                    <div className="profile_img">
                        <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png" alt="profile_pic"/>
                        <p className="name">Иванов Иван Иванович</p><br/>
                        <p className="place">
                            <span className="icon">
                                <i className="fas fa-map-pin"></i>
                            </span>
                            <span className="place_name">Кемерово</span>
                        </p>
                    </div>

                    <div className="profile_icons">
                        <div className="profile_item">
                            <div className="icon"><i className="fas fa-passport"></i></div>
                            <div className="title">Паспорт</div>
                            <div className="num">5719235679</div>
                        </div>
                        <div className="profile_item">
                            <div className="icon"><i className="fas fa-id-card"></i></div>
                            <div className="title">Полис</div>
                            <div className="num">152262626</div>
                        </div>
                        <div className="profile_item">
                            <div className="icon"><i className="fas fa-calendar-alt"></i></div>
                            <div className="title">Дата рождения</div>
                            <div className="num">17.11.1963</div>
                        </div>
                    </div>

                    <div className="profile_btn">
                        Подробная информация <i className="fas fa-caret-down"></i>
                    </div>
                </div>
            </div>
            <div className={ancets? "profile_slider active": "profile_slider"}>
                    <ul>
                        <li>
                            <div className="slider_item">
                                <div className="slider_left">
                                    
                                    <div className="item">
                                        <div className="item_name">
                                            Анкета 1: Семья
                                        </div>
                                        <div className="item_email" style={{color: "green"}}>
                                            Заполнена <i className="fas fa-check"></i>

                                        </div>
                                    </div>
                                </div>
                                <div className="slider_right">
                                    <div className="btn btn_following">Просмотр</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="slider_item">
                                <div className="slider_left">
                                    
                                    <div className="item">
                                        <div className="item_name">
                                            Анкета 2: Питание
                                        </div>
                                        <div className="item_email">
                                            Не заполнена <i className="fas fa-times"></i>

                                        </div>
                                    </div>
                                </div>
                                <div className="slider_right">
                                {localStorage.getItem('role') === 'user' ? 
                                    <div className="btn btn_following">Заполнить</div>
                                : ""}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="slider_item">
                                <div className="slider_left">
                                    
                                    <div className="item">
                                        <div className="item_name">
                                            Анкета 3: Образ жизни
                                        </div>
                                        <div className="item_email">
                                            Не заполнена <i className="fas fa-times"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider_right">
                                {localStorage.getItem('role') === 'user' ? 
                                    <div className="btn btn_following">Заполнить</div>
                                : ""}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="slider_item">
                                <div className="slider_left">
                                    
                                    <div className="item">
                                        <div className="item_name">
                                            Анкета 4: Болезни
                                        </div>
                                        <div className="item_email">
                                            Не заполнена <i className="fas fa-times"></i>

                                        </div>
                                    </div>
                                </div>
                                <div className="slider_right">
                                {localStorage.getItem('role') === 'user' ? 
                                    <div className="btn btn_following">Заполнить</div>
                                : ""}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="slider_item">
                                <div className="slider_left">
                                    
                                    <div className="item">
                                        <div className="item_name">
                                            Анкета 5: Место жительства
                                        </div>
                                        <div className="item_email">
                                            Не заполнена <i className="fas fa-times"></i>

                                        </div>
                                    </div>
                                </div>
                                <div className="slider_right">
                                {localStorage.getItem('role') === 'user' ? 
                                    <div className="btn btn_following">Заполнить</div>
                                : ""}
                                </div>
                            </div>
                        </li>
                    </ul>
            </div>
            <div className={history? "profile_slider active": "profile_slider"}>
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
            <div className={prognoz? "profile_slider active": "profile_slider"}>
                <i class="fas fa-times" style={{fontSize: "45px", position:"absolute", marginTop:"-60px"}} onClick={closeAll}></i>
                <PrognozChart/>
            </div>
            <div className={data? "profile_slider active": "profile_slider"}>
                <i class="fas fa-times" style={{fontSize: "45px", position:"absolute", marginTop:"-60px"}} onClick={closeAll}></i>
                <HeartRateChart/>
                <Chart/>
            </div>
        </div>
    )
}
export default withRouter(User);