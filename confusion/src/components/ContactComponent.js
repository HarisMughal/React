import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Label, Col, Button, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control,LocalForm,Errors } from 'react-redux-form';


const required = (val)=> val && val.length>0;
const maxLenght = (len)=> (val)=> !(val) || (val.length <= len);
const minLenght = (len)=> (val)=> (val)&& (val.length >= len);
const isNumber = (val)=> !isNaN(Number(val));
// const validEmail = (val)=> /^[A-Z0-9._%+-]+@[A-Z0-9.+-]+\.[A-Z] {2,4}$/i.test(val);
const validEmail = (val)=> /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Contact extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     firstname : '',
        //     lastname : '',
        //     number: '',
        //     email : '',
        //     agree: false,
        //     message: '',
        //     contactType: 'Tel.',
        //     formTouched: {
        //         firstname : false,
        //         lastname : false,
        //         number: false,
        //         email : false,
        //     }
        // };
        // this.onType = this.onType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.onTouch = this.onTouch.bind(this);
    }

    // onType(event){ // we need to pass this to every input so they call it whenever they get changed
    //     const target = event.target; // getting the targeted varaible that is being typed
    //     const value = target.type === "checkbox" ? target.checked : target.value;
    //     // ^ We can have different type of input so we have we have to check them before 
    //     // ectracting value
    //     const name = target.name;
    //     this.setState(
    //         {
    //             [name]: value
    //         }
    //     );
        
        
    // }
    onSubmit(values){
        alert(JSON.stringify(values));
        // event.preventDefault();
    }
    // LIKE dirty in Angular we have to implement our own in React
    // this duntion does that
    // onTouch = (field)=>(evt)=>{
    //     this.setState({
    //             formTouched : {
    //                 ...this.state.formValidation,//this means keep all objects same as they were
    //                 [field]: true // except this one
    //             }
    //         }
    //     );
    // };
    // firstname,lastname,email,number
    // formValidation(){ // Set you validation logic here
    //     const errors = {
    //         firstname : '',
    //         lastname : '',
    //         number: '',
    //         email : '',
    //     }
    //     if(this.state.formTouched.firstname){
    //         if(this.state.firstname.length < 3 || this.state.firstname.length  > 10){
    //             errors.firstname = "First name should be >=3 and <= 10 character";
    //         }
    //     }
    //     if(this.state.formTouched.lastname){
    //         if(this.state.lastname.length < 3 || this.state.lastname.length  > 10){
    //             errors.lastname = "First name should be >=3 and <= 10 character";
    //         }
    //     }
    //     if(this.state.formTouched.number){
    //         const reg = /^\d+$/;
    //         if(!reg.test(this.state.number)){
    //             errors.number = "Tel. number should only contain numbers";
    //         }
    //     }
    //     if(this.state.formTouched.email){
    //         if(this.state.email.split('').filter( (x)=> x === '@' || x ==='.' ).length < 2){
    //             errors.email = "Email must contains @ and . symbol";
    //         }
    //     }
    //     return errors;// retrun error messages
    // }

    render(){
        // const errors = this.formValidation();// No render this as error
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem> <Link to ='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active> Contact Us </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href="/"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send Your Feedback</h3>
                    </div>
                    <dvi className="col-12 col-md-9">
                        <LocalForm onSubmit = {this.onSubmit}>
                            <Row className="form-group">
                                <Label htmlFor='firstname' md={2} >First Name</Label>
                                <Col md={10}>
                                    <Control.text className="form-control" model=".firstname" placeholder = "First Name"
                                    name='firstname' id='firstname'
                                    validators={{
                                        required,minLenght:minLenght(3),maxLenght:maxLenght(15)
                                    }}
                                     ></Control.text>
                                     <Errors className="text-danger" model=".firstname" show="touched"
                                     messages={{
                                         required: 'Required',
                                         minLenght:"Must be greater than 2 characters",
                                         maxLenght:"Must be less than 16 characters"
                                     }
                                     }/>
                                    {/* onBlur method will identify the touch event and you need to add validand invalid attribute logic here */}

                                    {/* render error */}
                                     
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor='lastname' md={2} >Last Name</Label>
                                <Col md={10}>
                                    <Control.text  className="form-control"placeholder = "Last Name"
                                    name='lastname' id='lastname' model=".lastname" 
                                    validators={{
                                        required,minLenght:minLenght(3),maxLenght:maxLenght(15)
                                    }}
                                    ></Control.text>
                                    <Errors className="text-danger" model=".lastname" show="touched"
                                     messages={{
                                         required: 'Required',
                                         minLenght:"Must be greater than 2 characters",
                                         maxLenght:"Must be less than 16 characters"
                                     }
                                     }/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor='email' md={2} >Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" className="form-control"
                                     placeholder = "Email" name='email' id='email'
                                     validators={{
                                         required,
                                         validEmail

                                     }}
                                    ></Control.text>
                                    <Errors model=".email" className="text-danger" show="touched"
                                    messages={{
                                        required:"Required",
                                        validEmail:"The email is invalid"
                                    }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor='number' md={2} >Number</Label>
                                <Col md={10}>
                                    <Control.text model=".number" className="form-control" placeholder = "Phone Number"
                                     name='number' id='number'  
                                     validators ={{
                                        required,minLenght:minLenght(3),maxLenght:maxLenght(15),isNumber
                                     }} 
                                    ></Control.text>
                                    <Errors className="text-danger" model=".number" show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLenght:"Must be greater than 2 characters",
                                        maxLenght:"Must be less than 16 characters",
                                        isNumber:"Must contain only digits"
                                    }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:6,offset:2}}>
                                    <div className="form-check">
                                        <Label check >
                                            <Control.checkbox model = ".agree"
                                             className="form-check-input" name='agree' id='agree'
                                             ></Control.checkbox>
                                             <strong>Do you want us to contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size:3,offset:1}}>
                                    <Control.select model=".contactType" className="form-control"
                                     name='contactType' id='contactType'
                                     >
                                        <option>Tle.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message"className="form-control"
                                     name="message" id="message"
                                     rows="12" ></Control.textarea>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit"  color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                            
                        </LocalForm>

                    </dvi>
                </div>
            </div>
        );
    }
}

export default Contact;