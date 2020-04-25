import React , {Component} from 'react';
import {Card, CardImg,CardTitle ,CardText, CardBody, BreadcrumbItem, Breadcrumb, Button, Modal, ModalHeader, ModalBody, Label, Row, Col, } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control,Errors} from 'react-redux-form';

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
                        <div className="col-md-5 mt-1 mb-1">
                            <h4> Comments</h4>
                            <RenderComments comments = {props.comments} />
                            <CommentForm />
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

const maxLength = (len)=> (val)=> !(val) || (val.length <= len);
const minLength = (len)=> (val)=> (val)&& (val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state={
            modalToggle:false
        }
        this.onModalToggle = this.onModalToggle.bind(this);
        this.onSubmitComment = this.onSubmitComment.bind(this);
    }

    onModalToggle(){
        this.setState({
            modalToggle: !this.state.modalToggle
        });
    }
    
    onSubmitComment(values){
        alert(JSON.stringify(values));
    }

    render(){
        return(
            <React.Fragment>
                <Button outline color="dark" onClick= {this.onModalToggle}>
                    <span className="fa fa-write fa-md"></span>
                    Add Comment
                </Button>

                <Modal isOpen={this.state.modalToggle} toggle={this.onModalToggle}>
                    <ModalHeader toggle={this.onModalToggle} >Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.onSubmitComment}>
                            <Row className="form-group">
                                <Label htmlFor="ratting" md={12}>Ratting</Label>
                                <Col md={12}>
                                    <Control.select   model=".ratting" className="form-control"
                                    name="ratting" id="ratting">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text  className="form-control" model=".name" 
                                    name="name" id="name" placeholder="Your Name"
                                    validators={{
                                        minLength:minLength(3),
                                        maxLength:maxLength(15)
                                    }}/>
                                    <Errors model=".name" show="touched" className="text-danger"
                                    messages={{
                                        minLength:"Must be greater than 2 character",
                                        maxLength:"Must be 15 character or less"
                                    }}/>

                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea  className="form-control" rows="6" model=".comment" 
                                    name="comment" id="comment" />
                                </Col>
                            </Row>
                            <Button type="submit" color="primary" value="submit">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}
    
    


export default DishDetail;