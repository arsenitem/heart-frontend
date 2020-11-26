import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import {logout} from '../store/reducers/loginReducer'
import { Link } from "react-router-dom";

function Layout(props) {
    return (
        <div style={{float: "left"}}>
            <div className="page">
                <header tabindex="0">
                    <label style={{marginLeft: "10%", color: "#ef0000"}}>ИСПБ "Сердце"</label>
                    <div style={{marginRight: 0, marginLeft: "auto"}}>
                    {props.state.loginReducer.userName}
                        <i class="fas fa-sign-out-alt" style={{fontSize:"32px", marginRight: 0, marginLeft: "auto",cursor: "pointer"}} onClick={() => props.logout()}></i>
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
                            <ul>
                                <li>
                                    <Link to="/main" className="nav-link">
                                        <div className="nav-icon-link">
                                            <i class="fas fa-user"></i>
                                        </div>
                                        Профиль
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/profile" className="nav-link">
                                        <div className="nav-icon-link">
                                            <i class="fas fa-users"></i>
                                        </div>
                                      Больные
                                    </Link>
                                </li>
                                <li><Link to="/profile" className="nav-link">Еще</Link></li>
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
  