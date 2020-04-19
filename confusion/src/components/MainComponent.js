// The parrent compoents can change states (data ) of child components using props
// props is a class attribute that can be used to transmit data from parent to child  in run time
// props actully constains all the attributes of class
// Menu is the child of App
// In this we are passing the data from APP to Menu as <Menu dishes={this.state.dishes}/>

import React,{Component} from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';



class Main extends Component{
// just like as ANdroid the react also flows a lifecycle on openning (mount) and closing (unmount)

// bellow is the hirarchey of funtions called during mounting

// constructor()
// static getDerivedStateFromProps()
// render()
// componentDidMount()


  constructor(props){
    super(props);
    this.state = 
     {
       dishes:DISHES,
       selectedDishId: null

    };

    console.log("constructor called");

  }

  componentDidMount(){
    console.log("componentDidMount called");
  }

  onDishClick(dishId){
    this.setState({selectedDishId : dishId}) // each time you want to change state (data) you have to use this funtion
    console.log(this.state.dishes.filter( (dish)=> dish.id === this.selectedDishId  )); // 

  }

   render() {
    console.log("render called");

// Menu and Dish has been changed to be a funtional component ( as such components are only used to render only view
// and does not require data to be feeded )
    return (
      <div >
        <Header/>
        
        <Menu dishes={this.state.dishes}
            onClick = {(dishId) => this.onDishClick(dishId)}  />
        <DishDetail dish = { this.state.dishes.filter( (dish)=> dish.id === this.state.selectedDishId  )[0] } />
        <Footer/>
      </div>
    );
  }

}



export default Main;
