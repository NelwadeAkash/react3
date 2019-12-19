import React, { Component } from 'react'
import Navibar from './Navibar'
import {fontawesome,Button} from 'react-bootstrap' 
import InputElement from './InputElement'
import './about.css'



export class About extends Component {
    render() {
        return (
            <div>
                <Navibar></Navibar>
                {/* <h4>About</h4> */}
                <div class="contactform">
                     <div class="address">
                            <p>Contact us and well get back to you with in 24 hours</p>
                            <p><span class="glyphicon glyphicon-map-marker">
                                </span>&nbsp;&nbsp;&nbsp; Bangalore:</p>
                                <i class="fa fa-address-card" aria-hidden="true"></i>

                                <p><span class="glyphicon glyphicon-map-phone">
                                </span>&nbsp;&nbsp;&nbsp; +91 8722678739</p>
                                <p><span class="glyphicon glyphicon-map-envelope">
                                </span>&nbsp;&nbsp;&nbsp; codecourse@gmail.com</p>
                     </div>
                     <div class="contact">
                         <form noValidate>
                            <InputElement
                                label="Enter your Name"
                                name="name" 
                                type={"text"}
                                id="name"
                                variant="standard"
                                
                            />

                            <InputElement
                                label="Email"
                                name="email" 
                                type={"email"}
                                id="sub"
                            />
                            <InputElement
                                label="Feedback"
                                name="email" 
                                type={"email"}
                                id="sub"
                            />

                            <InputElement
                                label="Phone"
                                name="phone" 
                                type={"number"}
                            />
                        </form>
                        <br></br>
                        <Button 
                            className="btn-lg btn-dark active"
                            role="button" aria-pressed="true"
                            variant="outlined" 
                            type="submit"
                            color="primary"
                            // size="50"
                        >
                        Submit </Button>

                     </div>
                </div>
                <footer><p>&#169;2019 Copy Rights Reserved.</p></footer>
            </div>
        )
    }
}

export default About
