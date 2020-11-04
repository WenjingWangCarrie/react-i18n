import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import { Route, NavLink, BrowserRouter as Router, Switch } from "react-router-dom";
import App from './App'; 
import Users from "./components/Users";
import Clients from "./components/Clients";
import Products from "./components/Products";  
import ProductItem from "./components/ProductItem";    
import Information from "./components/Information";
import About from "./components/About";
import Contact from "./components/Contact";
import Notfound from "./components/Notfound";
import Signup from "./components/Signup";
import Login from "./components/Login";  

const routing = (
	<Router>
		<div>
			<div className="row">
                <div className="col-md-12">
                    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                        <Navbar.Brand href="#">LOGO</Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/users">Users</Nav.Link>
                                <Nav.Link href="/clients">Clients</Nav.Link>
                                <Nav.Link href="/products">Products</Nav.Link>
                                <Nav.Link href="/information">Information</Nav.Link>
                                <Nav.Link href="/about">About Us</Nav.Link>
                                <Nav.Link href="/contact">Contact Us</Nav.Link>
                            </Nav>
                                    
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>

                            <Nav className="mr-1">
                                <Nav.Link href="/signup">Signup</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

					<Switch>
						<Route exact path="/" component={App} />
						<Route path="/users" component={Users} /> 
						<Route path="/clients" component={Clients} /> 
                        <Route path="/products" exact component={Products} /> 
                        <Route path="/products/:id" component={ProductItem} /> 

						<Route path="/information" component={Information} /> 
						<Route path="/about" component={About} /> 
						<Route path="/contact" component={Contact} />
                        <Route path="/signup" component={Signup} /> 
                        <Route path="/login" component={Login} />  
						<Route component={Notfound} />
					</Switch>
				</div>
			</div>
		</div>
	</Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);


