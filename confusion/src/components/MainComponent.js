// The parrent compoents can change states (data ) of child components using props
// props is a class attribute that can be used to transmit data from parent to child  in run time
// props actully constains all the attributes of class
// Menu is the child of App
// In this we are passing the data from APP to Menu as <Menu dishes={this.state.dishes}/>

import React,{Component} from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from './HomeComponent';
import About from './AboutComponent';
import {connect} from 'react-redux';

const mapStateToProps = state =>{
  return{
    dishes : state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotion: state.promotion 
  }
}
class Main extends Component{
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

  // onDishClick(dishId){
  //   this.setState({selectedDishId : dishId}) // each time you want to change state (data) you have to use this funtion
  //   console.log(this.state.dishes.filter( (dish)=> dish.id === this.selectedDishId  )); // 

  // }

   render() {
    console.log("render called");

// Menu and Dish has been changed to be a funtional component ( as such components are only used to render only view
// and does not require data to be feeded )
    const HomePage = ()=> { // The only way to pass a component in Route we have to use funtional conponent 
      
       return (
        <Home dish= { this.props.dishes.filter( (dish)=> dish.featured  )[0]}
          promotion = { this.props.promotion.filter( (promotion)=> promotion.featured  )[0]}
          leader = { this.props.leaders.filter( (leaders)=> leaders.featured  )[0]}
          // test = { console.log(this.state.leaders.filter( (leaders)=> leaders.featured  ) )}
        />
       );
    };

    const RenderDishDetail = ({match})=>{
      // console.log("DisDetail");
        return(
          <DishDetail dish = {this.props.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10 ))[0]}
            comments = {this.props.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10 ))}
            // test = {console.log(parseInt(match.params.dishId))} 
            // test = { console.log(this.state.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10) ) ) }
          />
        );
    };
    // below is an another way of sending component as funtional component
    return (
      <div >
        <Header/>
        <Switch>
          <Route path="/home" component = {HomePage} />
          <Route exact path="/menu" component = { ()=> <Menu dishes={this.props.dishes}/>}/>
          <Route path = '/menu/:dishId' component={RenderDishDetail} />
          <Route exact path="/contact" component = {Contact}/>/>
          <Route exact path="/about" component = {() => <About leaders = {this.props.leaders}/>}/>/>
          
          <Redirect to = "/home" ></Redirect>
        </Switch>
        {/* <Menu dishes={this.state.dishes}
            onClick = {(dishId) => this.onDishClick(dishId)}  />
        <DishDetail dish = { this.state.dishes.filter( (dish)=> dish.id === this.state.selectedDishId  )[0] } /> */}
        <Footer/>
      </div>
    );
  }

}



export default withRouter(connect(mapStateToProps) (Main)) ;
