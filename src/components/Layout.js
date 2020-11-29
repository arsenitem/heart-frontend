import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import {logout} from '../store/reducers/loginReducer'
import { Link } from "react-router-dom";


function Layout(props) {
    function onLogout() {
        props.logout();
        localStorage.removeItem('token')
    }
    return (
        <div style={{float: "left", zIndex: "100000", position: "absolute"}}>
            <div className="page">
                <header tabindex="0">
                    <div style={{marginLeft: "10%", color: "white", width: "200px"}}>
                    <i class="fas fa-hand-holding-heart" style={{fontSize: "26px"}}></i>
                    <label style={{marginLeft: "3%"}}>СППР "Сердце"</label>
                    </div>

                   
                    <div style={{marginRight: 0, marginLeft: "auto"}}>
                    {props.state.loginReducer.userName}
                        <i class="fas fa-sign-out-alt" style={{fontSize:"32px", marginRight: 0, marginLeft: "auto",cursor: "pointer", marginLeft:"20px"}} onClick={onLogout}></i>
                    </div>
                </header>
                <div id="nav-container">
                    <div className="bg"></div>
                        <div className="button" tabindex="0">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </div>
                        <div id="nav-content" tabindex="0">
                            <ul style={{fontSize:"25px"}}>
                                <li>
                                {localStorage.getItem('role') === 'admin' ? 
                                    <Link to="/main" className="nav-link">
                                        <div className="nav-icon-link">
                                            <i class="fas fa-user"></i>
                                        </div>
                                        Главная
                                    </Link>
                                    :  <Link to="/users/me" className="nav-link">
                                    <div className="nav-icon-link">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    Главная
                                </Link>}
                                </li>
                                {localStorage.getItem('role') === 'admin' ? 
                                    <li>
                                    <Link to="/users" className="nav-link">
                                        <div className="nav-icon-link">
                                            <i class="fas fa-users"></i>
                                        </div>
                                        Наблюдаемые
                                    </Link>
                                </li>
                                : ""}
                                {localStorage.getItem('role') === 'admin' ? 
                                <li>
                                 <Link to="/notifications" className="nav-link">
                                     <div className="nav-icon-link notifications">
                                         <div className="notification-counter">
                                             3
                                         </div>
                                         <i class="fas fa-bell"></i>
                                     </div>
                                     Оповещения
                                 </Link>
                                </li>
                                : ""}
                               {localStorage.getItem('role') === 'user' ? 
                                <li>
                                 <Link to="/user_notify" className="nav-link">
                                     <div className="nav-icon-link notifications">
                                         <div className="notification-counter">
                                             2
                                         </div>
                                         <i class="fas fa-bell"></i>
                                     </div>
                                     Уведомления
                                 </Link>
                                </li>
                                : ""}
                                {localStorage.getItem('role') === 'user' ? 
                                <li>
                                 <Link to="/recomendations" className="nav-link">
                                     <div className="nav-icon-link notifications">
                                        <i class="fas fa-thumbs-up"></i>
                                     </div>
                                    Рекомендации
                                 </Link>
                                </li>
                                : ""}
                                {localStorage.getItem('role') === 'user' ? 
                                <li>
                                 <Link to="/diary" className="nav-link">
                                     <div className="nav-icon-link notifications">
                                        <i class="fas fa-notes-medical"></i>
                                     </div>
                                    Дневник
                                 </Link>
                                </li>
                                : ""}
                                <li>
                                    <Link to="/form" className="nav-link">
                                        <div className="nav-icon-link notifications">
                                           
                                            <i class="fas fa-cogs"></i>
                                        </div>
                                        Настройки
                                    </Link>
                                </li>
                               
                                <li className="small"><a href="#0">Команда Курабье</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

        </div>
    );
}
function mapStateToProps(state) {
    return {
      state: state
    }
  }
export default connect(mapStateToProps, {logout})(Layout);
  