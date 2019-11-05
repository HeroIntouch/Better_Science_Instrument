import React, { useReducer } from "react" ;
import loginImg from "../../../LRPD/login.svg" ;
import { auth } from '../../firebase/index' ;
import { useDispatch } from 'react-redux' ;
import { changeUserStateLogin, changeAdminStateLogin, changeUserStateLogout, changeAdminStateLogout } from '../../../actions' ;

var admin_state = -1 ;
var user_state = -1 ;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      currentUser: null,
      message: '',
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          currentUser: user
        })
      }
    })
  }


  onChange = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  onSubmit = e => {
    e.preventDefault()

    const { email, password } = this.state
    // TODO: implement signInWithEmailAndPassword()
    auth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        this.setState({
          currentUser: response.user
        })
      })
      .catch(error => {
        this.setState({
          message: error.message
        })
      })
  }
  logout = e => {
    user_state = -1
    admin_state = -1
    e.preventDefault()
    auth.signOut().then(response => {
      this.setState({
        currentUser: null,
      })
    })
  }

  render() {
    const { message, currentUser } = this.state
    var dataEmailAdmin = ["asdf@hotmail.com", "hero@hotmail.com"];
    var dataEmailUser = ["user1@hotmail.com", "as@hotmail.com"];

    

    if (currentUser) {
      console.log("back : " + currentUser);

      admin_state = dataEmailAdmin.indexOf(currentUser.email)
      user_state = dataEmailUser.indexOf(currentUser.email)

      if (admin_state != -1) {
        return (
          <div>
            <p>Hello {currentUser.email}</p>
            <p>Hello Admin</p>
            <button name="click_logout" onClick={this.logout}>Logout</button>

          </div>
        )
      }

      else if (user_state != -1) {
        return (
          <div>
            <p>Hello {currentUser.email}</p>
            <p>Hello User</p>
            <button name="click_logout" onClick={this.logout}>Logout</button>

          </div>
        )
      }
    }

    return (
      <div className="base-container" >
        <label className="header">Login</label>
        <div className="image">
          <img src={loginImg} />
        </div>
        <form id="input" onSubmit={this.onSubmit}>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Email</label>
                <input type="email" name="email" placeholder="email" onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input name="password" type="password" name="password" placeholder="password" onChange={this.onChange} />
              </div>
            </div>
          </div>
          {message ? <p className="help is-danger">{message}</p> : null}
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control" >
              <button className="button is-text">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export { Login, admin_state, user_state }