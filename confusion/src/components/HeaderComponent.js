import React , {Component} from 'react';
import {Navbar,NavbarBrand, Jumbotron,NavbarToggler, Collapse,Nav,NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            isNavOpen:false
        };
        // we can not use onToggleNav funtion directly in render HTML so we have to bind it as JS varaible 
        this.onToggleNav = this.onToggleNav.bind(this) // this is a JS variable
;    };

    onToggleNav(){
        this.setState(
            {isNavOpen: !this.state.isNavOpen }
        );
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
            </React.Fragment>
        );
    }

}
export default Header;