import React  from 'react';
//import logo from './logo.svg';
 import './App.css';
//  import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/Form/InputElement';
import Comment from './components/Form/TextElement';
import  { Login } from './components/Form/Login';
import SelectElement from './components/Form/SelectElement';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Form/Home';

import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import RouterElement from './components/Form/Router';
import Register from './components/Form/Register';
import RadioElement from './components/Form/RadioElement';
import TextElement from './components/Form/TextElement';
//import TestEmail from './components/TestEmail';
import Courselist from './components/Courselist';

// import login from './Login';

function App() {

  return (
   <div>
           
     {/* <SelectElement></SelectElement> */}
      {/* <Login/> */}
      {/* <Comment></Comment> */}
       {/* <Input></Input> */}
       {/* <Home></Home> */}
       {/* <footer class="page-footer font-small mdb-color lighten-3 pt-4" style="background-color:lightblue;">
         </footer> */}
         <RouterElement/>
        {/* <Courselist></Courselist> */}
         {/* <TextElement></TextElement> */}
         {/* <Register></Register> */}
         {/* <RadioElement data={["male","female","s"]} /> */}
    </div>
  );
}
export default App;