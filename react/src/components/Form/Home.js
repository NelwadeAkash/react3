import React, { Component } from 'react'
import RouterElement from './Router';
import Navibar from './Navibar';
import { Navbar,Carousel } from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './about.css'
import Courselist from '../Courselist.json'
import python from './Images/pythonlogo.png'
import java from './Images/javalogo.jpg'
import javascript from './Images/javascript.png'
import dotnet from './Images/dotnet.jpg'

 export class Home extends Component {
           
            
                constructor(props) {
                        super(props)
                    
                        this.state = {
                            list:Courselist,
                            Images:[python,java,javascript,dotnet]
                            
                        }
                    }
                    
     
            render() {

              let  List=this.state.list
              let valid=false
                return (
                    <div className="App">
                    <div><Navibar></Navibar></div>
                    {/* <img  height="450" width="1420" src={require('./Images/carosel-1.png')}  /> */}
                        <br/>
                    <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                height="350" width="1220"
                                src={require('./Images/elearning.jpg')}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>A Great Place To Learn</h3>
                                <p>A learning community dedicated to building respectful and responsible citizens and empowering all learners.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                height="350" width="1220"
                                src={require('./Images/machine-learing.jpg')}
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <h3>A Family Of Learning</h3>
                                <p>A community of lifelong learners,responsible global citizens, and champions of our own success.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                height="350" width="1220"
                                src={require('./Images/elearning-3.png')}
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <h3>Be safe. Be kind. Be smart.</h3>
                                <p>Committed to educating and nurturing all students so they may grow towards responsible global citizenship.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                </Carousel>



                        <br/>
                       
                        <table cellpadding="09">
                           
                                <tr> {List.map((List)=>{
                                    if(List.courseId < 5)
                                    {
                                        valid=true;                           
                                    return (
                                        <th>
                                        <Card style={{ width: '21rem' }}>
                                            <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        alt="Contemplative Reptile"
                                                        height="140"
                                                        src={this.state.Images[(List.courseId)-1]}
                                                        //src={require('./Images/javalogo.jpg')}
                                                        // image="../components/Form/Images/python.png"
                                                        title="Contemplative Reptile"
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            {List.courseName}
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            <b>This course includes</b> 
                                                                <ul>
                                                                    <li>13 hours on-demand video</li>   
                                                                    <li>17 downloadable resources</li> 
                                                                    <li>2 Practice Tests</li> 
                                                                    <li>Full lifetime access</li> 
                                                                    <li>Certificate of Completion</li> 
                                                                </ul>            
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <Button size="small" color="primary">
                                                         Share
                                                    </Button>
                                                    <Button size="small" color="primary"
                                                          href={`home/${List.courseName}`}
                                                    >
                                                          Buy now
                                                    </Button>
                                                </CardActions>
                                                </Card> 
                                            
                                            </th>
                                            
                                    )

                                    }
                                  
                                    
                                })
                               
                               
            }
                                        </tr>
                                  </table>
                                
                        <br></br>
                        <footer text-align="center"><p>&#169;2019 Copy Rights Reserved.</p></footer>
                    </div>
                )
    }
}

export default Home
