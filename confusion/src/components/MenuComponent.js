// see the state is empyty but at runtime it get updated using props

import React  from 'react';
import {Card, CardImg,CardImgOverlay,CardTitle  } from 'reactstrap';


function RenderMenu({dish, onClick}){
    return     (
    <Card onClick = {() => onClick(dish.id)} >
        <CardImg src={dish.image} alt= {dish.name}>
            
        </CardImg>
        <CardImgOverlay body className="ml-5">
            <CardTitle>{dish.name}</CardTitle>
            
        </CardImgOverlay>
    </Card>
    );
}
  

const Menu = (props) =>{
    // console.log(this.props)
    const menu = props.dishes.map( (dish)=> {
        return (
            <div key={dish.id} className="col-12 col-md-5 mt-2">
                <RenderMenu dish = {dish} onClick = {props.onClick} />
            </div>
        );
    }) ;
    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
            
        </div>
    );
};


export default Menu;