import React, { Component } from 'react'
import {Button,Navbar,FormControl,Form,InputGroup,Nav,Image,Dropdown,DropdownButton} from 'react-bootstrap'




export class Navibar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() 
    {

        return (
            
            <div className="App">
                
                <i class="fa fa-creative-commons"></i>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href=""><strong>Code-Course</strong></Navbar.Brand>
                        <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/Courselist">Course-list</Nav.Link>
                        <Nav.Link href="/about">Contact-us</Nav.Link>
                        
                    </Nav>
                        <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-info">Search</Button>
                                <Button variant="outline-info" href="/logout">Logout</Button>
                                {/* <Button variant="outline-info" href="/Register">Register</Button> */}
                        </Form>
                    </Navbar>

            </div>
        )
    }
}

export default Navibar
