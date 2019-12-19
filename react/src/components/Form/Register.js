import React, { Component } from 'react'
import {Button,Navbar,FormControl,Radio,
    Form,Row,Col,InputGroupRadio,
    InputGroup,Nav,Image,Dropdown,DropdownButton} from 'react-bootstrap'
import InputElement from './InputElement'
import { object } from 'prop-types'
import './login.css'
import TextElement from './TextElement'

// import { InputGroupRadio } from 'react-bootstrap/InputGroup'




export class Register extends Component {
    constructor(props) {
        super(props)
    
            this.state = {

                        values:
                        {
                                fullname:'',    
                                password:'',
                                email:'',
                                phone:''
                        },

                        error:
                              {     
                                fullname:'',
                                password:'',
                                email:'',
                                phone:''
                            
                                }
                        }
            }


                    change=(e)=>{
                        // console.log("change called")
                            const{name , value} = e.target

                            this.setState({
                            values:{
                                ...this.state.values,
                                [name]:value
                            },
                            })
                        }






                        submitHandler=(e)=>
                        {
                            console.log("inside submit")
                            e.preventDefault();
                        }

                    onBlur=(event)=>{
                        const {name,value}=event.target
                        let errors=this.state.error

                switch (name) 
                {
                    
        
                        case 'fullname':
                        errors.fullname = (value.length == 0) ? '*Username is required' : ''
                        break;
            
                        case 'password':
                        errors.password = (value.length  == 0) ? "*Password is required":''   
                        break;
            
                        case 'email':
                        errors.email = (value.length ==0 ) ? '*Please Enter Your email ': 
                        errors.email = (value.includes("@")) ? '': "*Enter valid Email"  
                        break;

                        case 'phone':
                        errors.phone = (value.length == 0) ? '*Phone is required' : 
                        errors.phone =  value.match(/^[0-9]{10}$/)  ? '' : '*Enter valid phone Number'
                        break;



                        default:
                        break;
            
                }

                this.setState ({
                    errors,[name]:value
                            })
                            
    }
        

         

                    validateForm()
                    {
                        var v=0
                        var e=0
                        var valid=false
                        var errors=this.state.error
                        var values=this.state.values

                        Object.values(errors).forEach(error => 
                            {
                                if(error.length != 0 )
                                {
                                    e++
                                }
                            })

                            console.log("errors"+e)


                            Object.values(values).forEach(values => 
                                {
                                  if(values.length != 0)
                                    {
                                       v++
                                    }
                            })


                            console.log("values"+v)


                            if(v==4 && e==0)
                            {
                                valid=true
                            }


                            return valid
                    }



    render() {

        return (
            <div className="App">
                <Form onSubmit={this.submitHandler} noValidate>
                    <br/>
                    <h5>Please enter your details!!!</h5>
                    <Row>
                        <Col>
                         <br/>
                            <InputElement  
                                    label="FullName"
                                    name="fullname" 
                                    id="standard-basic"
                                    type={"text"}
                                    variant="standard"
                                    value={this.state.values.fullname}
                                    onChange={this.change} 
                                    onBlur={this.onBlur}
                            />
                                  <h6><small>{this.state.error.fullname}</small></h6>
                            <br/>
                            
                             <InputElement  
                                        label="Email"
                                        name="email" 
                                        type={"email"}
                                        value={this.state.values.email}
                                        onChange={this.change} 
                                        onBlur={this.onBlur}
                              />
                             <h6><small>{this.state.error.email}</small> </h6>
                            <br/>
                           <InputElement  
                                        label="password"
                                        name="password" 
                                        type={"password"}
                                        value={this.state.values.password}
                                        onChange={this.change} 
                                        onBlur={this.onBlur}
                            />
                            
                             <h6><small>{this.state.error.password}</small></h6>
                             <br/>
                             <InputElement  
                                        label="Phone"
                                        name="phone" 
                                        type={"number"}
                                        value={this.state.phone}
                                        onChange={this.change} 
                                        onBlur={this.onBlur}
                              />
                              <h6><small>{this.state.error.phone}</small></h6>
                            <br/>
                            <Button disabled={!this.validateForm()}
                                    className="btn-lg btn-primary active"
                                    role="button" aria-pressed="true"
                                    variant="outlined" 
                                    type="submit"
                                    color="primary"
                                    //  size="10"
                                    href="/home"
                             > Submit </Button>




                        </Col>
                    </Row>
                            <br/>
                            
                </Form>
                            
                            <small>Already have an Account <a href="/Login">Click here</a></small>  
                            <br></br>
                            <footer text-align="center"><p>&#169;2019 Copy Rights Reserved.</p></footer>     
             </div>
        )
    }
}

export default Register
