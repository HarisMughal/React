import React , {Component} from 'react';
import {Navbar,NavbarBrand, Jumbotron,NavbarToggler, Collapse,Nav,NavItem, ModalHeader, Button, Modal, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            isNavOpen:false,
            isModlaOpen: false
        };
        // we can not use onToggleNav funtion directly in render HTML so we have to bind it as JS varaible 
        this.onToggleNav = this.onToggleNav.bind(this) // this is a JS variable
        this.onToggleModal = this.onToggleModal.bind(this) // this is a JS variable
        this.onLogin = this.onLogin.bind(this);
;    };

    onToggleNav(){
        this.setState(
            {isNavOpen: !this.state.isNavOpen }
        );
    }

    onToggleModal(){
        this.setState(
            {
                isModlaOpen: !this.state.isModlaOpen
            }
        );

    }

    onLogin(event){
        this.onToggleNav();
        alert("username: "+this.username.value+" password: "+this.password.value+ " remember: "+
        this.remember.checked);
        event.preventDefault();
    }

    render(){
        return (
            <React.Fragment>
                
                <Navbar dark expand="md" >
                    <div className = 'container'>
                        <NavbarToggler onClick = {this.onToggleNav}/>
                        <NavbarBrand className="mr-auto" href="/"> 
                            <img src = "assets/images/logo.png" height="30" width = "41"
                            alt = "Best Restaurant"></img> 
                        </NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem >
                                    <NavLink className="nav-link" to = "/home">
                                        <span className="fa fa-home fa-lg"></span>
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink className="nav-link" to = "/menu">
                                        <span className="fa fa-list fa-lg"></span>
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink className="nav-link" to = "/about">
                                        <span className="fa fa-info fa-lg"></span>
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink className="nav-link" to = "/contact">
                                        <span className="fa fa-address-card fa-lg"></span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className='ml-auto'>
                                <NavItem>
                                    <Button outline color="light" onClick={this.onToggleModal}> 
                                        <span className="fa fa-sign-in fa-md"></span>
                                        Login
                                    </Button>
                                </NavItem>
                            </Nav>
                       </Collapse>
        
                    </div>

                    
                </Navbar >
                <Jumbotron>
                    <div className="container">
                        <div className = "row row-header">
                            <div className = "col-sm-6 ">
                                <h1>Menu of servings</h1>
                                <p> The best items you can get in the world are here form chinese to pasta to Bar BQ where thing you need is here just say mama-miya </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModlaOpen} toggle={this.onToggleModal}>
                    <ModalHeader toggle={this.onToggleModal}>Login</ModalHeader>
                    <ModalBody className="mt-3">
                        <Form onSubmit={this.onLogin}>
                            <FormGroup>
                                <Label htmlFor="username" > Username/Email</Label>
                                <Input  type="text" placeholder="Username/Email" name="username"
                                id ="username"innerRef={(input)=> this.username = input}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password" > Password</Label>
                                <Input  type="password" placeholder="Password" name="password"
                                id ="password" innerRef={(input)=> this.password = input}></Input>
                            </FormGroup>
                            <FormGroup check>
                                <Label check> 
                                    <Input  type="checkbox" name="remember"
                                    innerRef={(input)=> this.remember = input}></Input>
                                    Remember me
                                </Label>
                                
                            </FormGroup>
                            <Button type="submit" color="primary" value="submit">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }

}
export default Header;