import React, { Component } from 'react'
import InputElement from './InputElement'
//import Button from '@material-ui/core/Button';
import user from './Data.json'
import './Element.css'
import {Button,Form,FormGroup,Label,Input} from 'reactstrap'
//import {FacebookLoginButton} from 'react-social-login-buttons'
import './login.css'
import LabelElement from './LabelElement'


export class Login extends Component {
    constructor(props) 
        {
            super(props)

            this.state = {

                username:"",
                password:"",

                usernameError:'',
                passwordError:'',
                error:''
            }

    // this.change = this.change.bind(this)

}


        submitHandler= (event) =>{

            event.preventDefault();
            console.log("inside submit")
            
            let state = this.state
            let valid = false
            let error = state.error
            
            user.map( (data) => {
                //console.log(data)
                if(state.username == data.username && state.password == data.password) {
                    valid=true
                }
            })

            if(!valid)
            {
                error = '*Enter valid credentials'
            }
            else
            {
                //this.props.history.push('/home')
                sessionStorage.setItem('status' , 'LogggedIn')
                sessionStorage.setItem('Name',this.state.username   )
                window.location.href = '/home'
            }

            this.setState
            ({
                error : error
            })

    console.log(valid)
}

            change=(e)=>{
                console.log("change called")
                this.setState({
                [e.target.name]:e.target.value
                })
            }

        onBlur=(event)=>{
            const {name,value}=event.target
            switch (name) 
            {
                    
                    case 'username':
                    this.state.usernameError=(value.length == 0) ? '*Username is required' : ''
                    break;

                    case 'password':
                    this.state.passwordError=(value.length == 0) ? "*Password is required":""   
                    break;

                    default:
                    break;

            }
    
                this.setState
                ({
                [name]:value
                })
                
}

    render() {
        return (
            <div>
            
                <form onSubmit={this.submitHandler} noValidate className="login-form" >
                    
                    <h4><span className="font-weight-bold">www.CodeCourse</span>.com</h4>
                    <br/>
                   <br/>
                   
                       
                       {/* <h5 className="text-center">Welcome</h5> */}
                       <FormGroup>
                                <LabelElement name="UserName"></LabelElement>
                                {/* <label className="">UserName</label> */}
                                    <InputElement label="username"
                                    name="username" 
                                    type={"email"} 
                                    variant="outlined"
                                    value={this.state.username}
                                    onChange={this.change} 
                                    onBlur={this.onBlur}
                                    />
                                    <h6><small>  {this.state.usernameError}</small></h6>
                        </FormGroup>
                        <FormGroup>
                                   <LabelElement name="Password"></LabelElement>
                                    <InputElement label="password" 
                                    name="password"
                                    type={"password"} 
                                    variant="outlined"
                                    value={this.state.password}
                                    onChange={this.change}
                                    onBlur={this.onBlur}
                                    size="50"
                                    />
                                    <h6><small>  {this.state.passwordError}</small></h6>
                        </FormGroup>
                        
                                    <Button 
                                            className="btn-lg btn-primary btn-block active"
                                            role="button" aria-pressed="true"
                                            variant="outlined" 
                                            type="submit"
                                            color="primary"
                                            size="50"
                                    >
                                    Login </Button>
                                    <h6><small>{this.state.error}</small></h6>
                                        {/* <br></br><h4>New uesr!!!</h4>
                                            <a href="/Register">Click here</a>
                                            */}
                                            {/* <div className="text-center pt-3">
                                              or continue with your social account

                                            </div>
                                            <FacebookLoginButton className="mt-3 mb-3"/> */}
                                            <div  className="text-center">
                                             <a href="/Register">Sign up</a>
                                             <span className="p-2">|</span>  
                                             <a href="/Register">Forgot Password</a>                                             
                                            </div>
                                        
                </form>
                
                </div>
            
        )
    }
}

export default Login
