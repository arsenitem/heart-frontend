
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Login from './pages/Login';
import Profile from './pages/Profile';
import api from './api'
import { Row } from 'react-bootstrap';
import Users from './pages/Users';
import User from './pages/User';
import Register from './pages/Register';
import Notifications from './pages/Notifications';
import MainAdmin from './pages/MainAdmin';
import Recomendations from './pages/Recomendations';
import UserNotify from './pages/UserNotify';
import Diary from './pages/Diary';
import AreaAnket from './pages/AreaAnket';
import AnalysisResult from './pages/AnalysisResult';
import MainAnket from './pages/MainAnket';
function App(props) {
  console.log(props)
  return (
    <BrowserRouter>
    {localStorage.getItem('token') ?
    <div>
      <Route path="/" component={Layout}/>
      <div className="main">    
        <Route path="/main">
          <MainAdmin/>
        </Route>
        <Route exact path="/users">
          <Users/>
        </Route>
        <Route exact path="/users/:id">
          <User/>
        </Route>
        <Route exact path="/notifications">
          <Notifications/>
        </Route>
        <Route exact path="/user_notify">
          <UserNotify/>
        </Route>
        <Route exact path="/diary">
          <Diary/>
        </Route>
        <Route exact path="/anket_area">
          <AreaAnket/>
        </Route>
        <Route exact path="/anket_main">
          <MainAnket/>
        </Route>
        <Route exact path="/analysis_result/:id">
          <AnalysisResult/>
        </Route>
        <Route exact path="/recomendations">
          <Recomendations/>
        </Route>
      </div>
    </div>
      
    :
    <div>
      <Route path="/" component={Login}/>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/register">
        <Register/>
      </Route>
    </div>
   
    }
    </BrowserRouter>
   
  );
}
function mapStateToProps(state) {
  return {
    state: state
  }
}
export default connect(mapStateToProps)(App);