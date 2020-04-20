import React  from 'react';
import {Card, CardImg,CardTitle ,CardText, CardBody, BreadcrumbItem, Breadcrumb, } from 'reactstrap';
import { Link } from 'react-router-dom';

function  RenderDish({dish}){
    // console.log("-----------")
    if(dish != null){
        return (
        
            <div className="col col-md-5 mt-1">
                <Card>
                    <CardImg width="100%" src={dish.image}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }else{
        return (
            <div ></div>
        );
    }

    
}

function RenderComments({comments}){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    const commentList = comments.map( (comment)=>{
        if(comment != null){
            return (
                
                <div key = {comment.id}>                        
                    <ul className="list-unstyled">
                        <li>{comment.comment}</li>

                    </ul>
                    <ul className="list-unstyled">
                        <li> {"-- "+comment.author+", "+ (new Date(comment.date)).toLocaleDateString("en-US",options)} </li>
                    </ul>
                </div>
            );
        }
        else{
            return ( <div></div>);
        }
    } );
    return commentList;

}



const DishDetail = (props)=>{
        // console.log(this.props.dish);
        // console.log(props);
        if(props.dish != null){
            // console.log("DisDetail");    

            return (
                <div className="container">
                    <Breadcrumb>
                        <BreadcrumbItem> <Link to='/home'>Home </Link> </BreadcrumbItem>
                        <BreadcrumbItem> <Link to='/menu'>Menu </Link> </BreadcrumbItem>
                        <BreadcrumbItem active> {props.dish.name} </BreadcrumbItem>
                    </Breadcrumb>
                    <div className = "row">
                        <RenderDish dish = {props.dish} />
                        <div className="col-md-5 mt-1">
                            <h4> Comments</h4>
                            <RenderComments comments = {props.comments} />
                        </div>
                    </div>
                </div>
            );
        }else{
            return (
                <div ></div>
            );
        }
};


    
    


export default DishDetail;