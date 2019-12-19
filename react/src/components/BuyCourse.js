import React, { Component } from 'react'
import list from'./Courselist.json'
import Navibar from './Form/Navibar.js'
import { Navbar,Card,Button,Carousel,ListGroupItem,ListGroup } from 'react-bootstrap';


export class BuyCourse extends Component {

    componentDidMount()
    {

            let name = this.props.match.params.name
                console.log(name)

                    list.map( (list) => {

                            console.log(list.courseName)

                            if( name == list.courseName ){
                                console.log('Matched')
                                this.setState({
                                    CourseName:list.courseName,
                                    CoursePrice:list.coursePrice,
                                    CourseDuration:list.duration,
                                    CourseMentor:list.Mentor,
                                    CourseImg:list.courseImg
                                })
                            }

                    })

    }



            constructor(props) {
                            super(props)
                        
                            this.state = {
                                CourseName:'',
                                CoursePrice:'',
                                CourseDuration:'',
                                CourseMentor:'',
                                CourseImg:''
                            }
            }
            
            render() {
                return (
                    <div className="App">
                        <div><Navibar></Navibar></div>
                                <br/>
                                <Card style={{ width: '21rem' }}>
                                    <Card.Img variant="top" height="130" width="180" src={this.state.CourseImg} />
                                    <Card.Body>
                                        <Card.Title>{this.state.CourseName}</Card.Title>
                                        <Card.Text>
                                    <b>This course includes</b> 
                                        <ul>
                                            <li>13 hours on-demand video</li>   
                                            <li>17 downloadable resources</li> 
                                            <li>2 Practice Tests</li> 
                                            <li>Full lifetime access</li> 
                                            <li>Certificate of Completion</li> 
                                        </ul>            
                                    </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem><b>Course Duration: </b>{this.state.CourseDuration}</ListGroupItem>
                                        <ListGroupItem><b>Course Price: </b>{`${this.state.CoursePrice}+G.S.T(%10)`}={`${this.state.CoursePrice+10}`}</ListGroupItem>
                                        <ListGroupItem><b>Course Mentor: </b>{this.state.CourseMentor}</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                        {/* <Card.Link href="#">Card Link</Card.Link> */}
                                        <Card.Link href="#">Procced to Pay</Card.Link>
                                    </Card.Body>
                                </Card>
                                <br></br>
                        <footer text-align="center"><p>&#169;2019 Copy Rights Reserved.</p></footer>
                    </div>
                )
            }
        }

export default BuyCourse
