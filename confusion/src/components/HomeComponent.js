import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';



function RenderCard({dish}){
    console.log(dish);
    return (<Card>
        <CardImg src={dish.image}></CardImg>
        <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            {dish.description ? <CardSubtitle>{dish.designation}</CardSubtitle> : null}
            <CardText>{dish.description}</CardText>
        </CardBody>
    </Card>);
}

function Home(props){
    return (
        <div className="container">
            <div className="row align-item-start">
                <div className="col-12 col-md m-1">
                    <RenderCard dish={props.dish}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard dish={props.promotion}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard dish={props.leader}/>
                </div>
            </div>
        </div>
    );
}

export default Home;