import React from "react" ;
import loginImg from "../../../LRPD/login.svg";
import {auth} from '../../../edit_homepage/firebase'

export class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            currentUser: null,
            message: ''
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
        e.preventDefault()
        auth.signOut().then(response => {
          this.setState({
            currentUser: null
          })
        })
      }

    render() {
    const { message, currentUser } = this.state

    if (currentUser) {
        return (
        <div>
            <p>Hello {currentUser.email}</p>
            <button onClick={this.logout}>Logout</button>
        </div>
        )
    }
    
    
        return (
            <section className= "base-container" >
            <label className= "header">Login</label>
            <form onSubmit = {this.onSubmit}>
            <div className= "content">
                <div className="image">
                    <img src={loginImg} />    
                </div>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="username">Email</label>
                    <input type="email" name ="email" placeholder = "email" onChange={this.onChange}/>    
                        </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name ="password" placeholder = "password" onChange={this.onChange}/>    
                        </div>
                    </div>
                </div>
                {message ? <p className="help is-danger">{message}</p> : null}
                <div className="field is-grouped" style = {{marginLeft : 90}}>
                  <div className="control">
                    <button className="button is-link">Submit</button>
                  </div>
                  <div className="control" style = {{marginLeft : 50}}>
                    <button className="button is-text">Cancel</button>
                  </div>
                  </div>
                </form>
            </section>
        )  
  }
}