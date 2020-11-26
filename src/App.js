
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Login from './pages/Login';
import Profile from './pages/Profile';
import api from './api'
import { Row } from 'react-bootstrap';
function App(props) {
  console.log(props)
  return (
    <BrowserRouter>
    {props.state.loginReducer.userLoggedIn ?
    <div>
      <Route path="/" component={Layout}/>
      <div className="main">    
        <Route path="/main">
          <Profile/>
        </Route>
      </div>
    </div>
      
    :
    <div>
      <Route path="/" component={Login}/>
      <Route path="/login">
        <Login/>
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