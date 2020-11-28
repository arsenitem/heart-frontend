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
                    <label style={{marginLeft: "10%", color: "#ef0000"}}>СППР "Сердце"</label>
                    <div style={{marginRight: 0, marginLeft: "auto"}}>
                    {props.state.loginReducer.userName} Сергей Владмирович П.
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
                            <ul style={{fontSize:"26px"}}>
                                <li>
                                    <Link to="/main" className="nav-link">
                                        <div className="nav-icon-link">
                                            <i class="fas fa-user"></i>
                                        </div>
                                        Профиль
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/users" className="nav-link">
                                        <div className="nav-icon-link">
                                            <i class="fas fa-users"></i>
                                        </div>
                                        Больные
                                    </Link>

                                </li>
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
                                <li>
                                    <Link to="/form" className="nav-link">
                                        <div className="nav-icon-link notifications">
                                           
                                            <i class="fas fa-bell"></i>
                                        </div>
                                        Анкеты 1/4
                                    </Link>
                                </li>
                                <li><Link to="/profile" className="nav-link">Что-то</Link></li>
                                <li className="small"><a href="#0">Facebook</a><a href="#0">Instagram</a></li>
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
  