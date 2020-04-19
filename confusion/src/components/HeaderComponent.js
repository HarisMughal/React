import React , {Component} from 'react';
import {Navbar,NavbarBrand, Jumbotron} from 'reactstrap';

class Header extends Component {


    render(){
        return (
            <React.Fragment>
                <Navbar dark >
                    <div className = 'container'>
                    <NavbarBrand href="/"> Confusion </NavbarBrand>
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