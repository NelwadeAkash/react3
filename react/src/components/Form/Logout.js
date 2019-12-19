import React, { Component } from 'react'

export class Logout extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        sessionStorage.setItem('status','Logout')   
        sessionStorage.removeItem('statuss')
    }
    
    render() {
        return (
            <div class="App">
            <br></br>
                <h4 class ="Logout">SuccessFully logout!!!!</h4>
                <h4 class="Logout">To Login Again Please click below</h4>
                <a class="Logout" href="/Login">Login</a>
            <br></br>
            </div>
        )
    }
}

export default Logout