import { useEffect, useState } from "react";
import { Alert, Button, Col, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Chart from '../components/Chart'
import HeartRateChart from "../components/HeartRateChart";
import PrognozChart from "../components/PrognozChart";
function User(props) {
    useEffect(() => {
        if (localStorage.getItem('role') ==="admin") {
            setApproveButton(<Button onClick={approvePrognoz} variant="outline-primary" style={{position: "absolute", left: "80%", marginTop: "-55px",width: "150px"}}>
                    Подтвердить прогноз
                </Button>)
        }
    }, [])
    let [ancets, setAncets] = useState(true)
    let [history, setHistory] = useState(false)
    let [prognoz, setPrognoz] = useState(false)
    let [sost, setSost] = useState(false)
    let [data, setData] = useState(false)
    let [show, setShow] = useState(true)
    let [prognozApproved, setPrognozApproved] = useState(false)
    let [settings, showSettings] = useState(false)
    let [approveButton, setApproveButton] = useState(null);
    let [fullInfo, setFullInfo] = useState(false);
    let [diagnosis, setDiagnosis] = useState(false);
    function goToSost() {
        props.history.push('/states/Гипертензия')
    }
    function fillAreaAnket() {
        props.history.push('/anket_area')
    }
    function approvePrognoz() {
        setPrognozApproved(true)
        setApproveButton(<Button variant="outline-sucess" style={{position: "absolute", left: "80%", marginTop: "-55px",width: "150px", color: "green", borderColor: "green"}}>
                            Подтверждено <i className="fas fa-check"></i>
                        </Button>)
    }
    function openFullInfo() {
        setDiagnosis(false)
        setFullInfo(!fullInfo)
    }
    function openDiagnosis() {
        setFullInfo(false)
        setDiagnosis(!diagnosis)
    }
    function openAnkets() {
        closeAll()
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
    function openSost() {
        closeAll()
        setSost(!sost)
    }
    function closeAll() {
        setAncets(true)
        setHistory(false)
        setPrognoz(false)
        setData(false)
        setSost(false)
    }
    return(
        <div className="wrapper">
            {localStorage.getItem('role') === 'user' ? 
            <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible style={{position:"absolute",left: "115%", marginTop: "-100px",width: "600px"}}>
            <Alert.Heading>Доступна новая анкета</Alert.Heading>
                <p>
                    Прохождение данной анкеты позволит с большей точностью предсказать возможные болезни
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                <Button onClick={() =>{props.history.push('/anket_main')}} variant="outline-success">
                    Заполнить
                </Button>
                </div>
            </Alert>
            : ""}
            <div className={diagnosis ? "bottom-togler active": "bottom-togler"}>
                            <Row className="justify-content-center">
                                <Button style={{marginTop: "30px"}} onClick={() => {props.history.push('/analysis_result/5410100101')}}>Просмотр результатов исследований и анализов</Button>
                            </Row>
                            <Row className="justify-content-center">
                            <Button style={{marginTop: "30px"}}>Cформировать отчет</Button>
                            </Row>
                            <Row className="justify-content-center">
                            <Button style={{marginTop: "30px"}}>Выписать рецепт</Button>
                            </Row>
                            
                        </div>
                        <div className={fullInfo ? "bottom-togler active": "bottom-togler"} style={{paddingLeft: "50px"}}>
                            <p>
                            Гражданство: Россия
                            </p>
                             <p>
                            Домашний адрес: Черепоковый переулок. дом 3
                            </p>
                            <p>
                            Рабочий адрес: ул. Рабочая 11
                            </p>
                            <p>
                            Мобильный телефон: 89630112262
                            </p>
                               <p>
                               Электронная почта: getrekt@mail.ru
                               </p>
                               <p>
                               Телеграм: @user123
                               </p>
                            

                        </div> 
            <div className="profile_card">
                <div className="settings_btn" onClick={openAnkets}>
                    Анкеты
                </div>
                <div className="hist_btn" onClick={openHistory}>
                    История
                </div>
                <div className="sost_btn" onClick={openSost}>
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
                    {localStorage.getItem("role") === "admin" ?
                        <Row className="justify-content-between">
                        <div className="profile_btn" onClick={openFullInfo}>
                            Подробная информация <i className="fas fa-caret-down"></i>
                        </div>
                        <div className="profile_btn" onClick={openDiagnosis}>
                            Диагностика <i class="fas fa-tools"></i>
                        </div>
                    </Row>:
                        <div className="profile_btn" onClick={openFullInfo}>
                            Подробная информация <i className="fas fa-caret-down"></i>
                        </div>
                    }
                                           
                             
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
                                            Анкета 2: Территория
                                        </div>
                                        <div className="item_email">
                                            Не заполнена <i className="fas fa-times"></i>

                                        </div>
                                    </div>
                                </div>
                                <div className="slider_right">
                                {localStorage.getItem('role') === 'user' ? 
                                    <div className="btn btn_following" onClick={fillAreaAnket}>Заполнить</div>
                                : ""}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="slider_item">
                                <div className="slider_left">
                                    
                                    <div className="item">
                                        <div className="item_name">
                                            Анкета 3: Достаток
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
                                            Анкета 6: Питание
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
                {approveButton}                     
                <PrognozChart/>
            </div>
            <div className={data? "profile_slider active": "profile_slider"}>
                <i class="fas fa-times" style={{fontSize: "45px", position:"absolute", marginTop:"-60px"}} onClick={closeAll}></i>
                {/* <i class="fas fa-cogs" style={{fontSize: "45px", position:"absolute", marginTop:"-60px"}} onClick={() => (showSettings(!settings))}></i> */}
                <HeartRateChart/>
                <Chart/>
                <div className={settings? "rigth-settigs-panel active": "rigth-settigs-panel"} ></div>
            </div>
            <div className={sost? "profile_slider active": "profile_slider"}>
               <Row>
                   <div style={{width: "800px", height:"600px"}}>
                       <div style={{fontSize: "26px", height:"110px"}}>
                            Текущее состояние: <p style={{color: "#a20f0f"}}>Гипертензия</p> 
                       </div>
                       {localStorage.getItem('role') === "admin" ?
                             <Row>
                             <Button style={{width:"200px"}} onClick={goToSost}>
                                 Пациенты со схожим состоянием
                             </Button>
                        </Row>
                       : ""
                       }
                      
                       
                   </div>
               </Row>
            </div>
        </div>
    )
}
export default withRouter(User);