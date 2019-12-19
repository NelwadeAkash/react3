import React, { Component } from 'react'
import  Courselists from  './Courselist.json'
//import user from './Data.json'
import {Table} from 'react-bootstrap'
import Navibar from './Form/Navibar.js'



export class Courselist extends Component {
         
        constructor(props) {
                    super(props)

                    this.state = {
                        courses:Courselists,
                        search:''
                    
                }
                    
        }
            change=(e)=>
            {
                    console.log("change called")
                    this.setState({
                        search:e.target.value
                    })
            }

    
    

                render() {
                        
                    let  filterCourses=this.state.courses.filter(
                        (course)=>{
                            return course.courseName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                        }
                );



        return (
                    <div>
                        <Navibar></Navibar>
                        <br/>
                        {/* <br/>
                    <h3 align="left">Courselist :</h3> */}
                    <br/>
                    <div align="left">
                        <label>Search:</label>
                        <input  width="30px"
                        placeholder="Search"
                        className="Search"
                            // type={'text'}
                            value={this.state.search} name="search"
                            icon="search"
                            onChange={this.change}></input>
                        </div> 
                    <br/>
                    
                    <Table bordered cellpadding="50px" >
                        <thead>
                            <tr> 
                        
                                <th>Course Id </th>
                                <th>Course Name</th>
                                <th>Mentor Name</th>
                                <th>Course Price</th>
                                <th>Course rating</th>
                                <th>Duration</th>
                                <th>Buy Now</th>
                                
                            
                            </tr>
                        </thead>
                        <tbody>
                            {filterCourses.map((course) =>{
                                return(
                                    <tr>
                                            <td>{course.courseId}</td>
                                        <td><tr>
                                            <img src={course.courseImg} width="100px" height="50px"/><br/>
                                            {course.courseName}</tr></td>
                                            <td>{course.Mentor}</td>
                                            <td>{course.coursePrice }</td>
                                            <td>{course.courseRating}</td>
                                            <td>{course.duration}</td>
                                            <td><a href={`Courselist/${course.courseName}`}>Buy Now</a></td>
                                    </tr>
                                    
                                )
                            }
                            )}
                        </tbody>
                    </Table>
                    <br></br>
                        <footer text-align="center"><p>&#169;2019 Copy Rights Reserved.</p></footer>
                               
                    </div>
                )
            }
}

export default Courselist
