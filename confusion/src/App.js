// The parrent compoents can change states (data ) of child components using props
// props is a class attribute that can be used to transmit data from parent to child  in run time
// props actully constains all the attributes of class
// Menu is the child of App
// In this we are passing the data from APP to Menu as <Menu dishes={this.state.dishes}/>

import React,{Component} from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';



class App extends Component{
// just like as ANdroid the react also flows a lifecycle on openning (mount) and closing (unmount)

// bellow is the hirarchey of funtions called during mounting

// constructor()
// static getDerivedStateFromProps()
// render()
// componentDidMount()


  constructor(props){
    super(props);
    
    console.log("constructor called");

  }

  componentDidMount(){
    console.log("componentDidMount called");
  }

   render() {
    console.log("render called");


    return (
      <div>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    );
  }

}



export default App;
