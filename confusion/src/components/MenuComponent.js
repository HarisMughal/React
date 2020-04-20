// see the state is empyty but at runtime it get updated using props

import React  from 'react';
import {Card, CardImg,CardImgOverlay,CardTitle  } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderMenu({dish}){
    return     (
    <Link to = {`/menu/${dish.id}`}>
        <Card >
            <CardImg src={dish.image} alt= {dish.name}>
                
            </CardImg>
            <CardImgOverlay body className="ml-5">
                <CardTitle>{dish.name}</CardTitle>
                
            </CardImgOverlay>
        </Card>
    </Link>
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
                <Breadcrumb>
                    <BreadcrumbItem> <Link to ='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active> Menu </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Our Menu</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
            
        </div>
    );
};


export default Menu;