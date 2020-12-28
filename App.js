import React from 'react';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import About from "./components/About";
import Notfound from "./components/Notfound";

import Products from "./components/Products";  
import ProductItem from "./components/ProductItem"; 
import Information from "./components/Information";  
import Users from "./components/Users";
import Clients from "./components/Clients";
import Contact from "./components/Contact";

import Signup from "./components/Signup";
import Login from "./components/Login";   

import { useTranslation } from "react-i18next";
import i18next from 'i18next';

function App() { 
     const { t } = useTranslation(); 

     function handleChange(lang) {
          i18next.changeLanguage(lang);
     }

     return (
          <div className="container-fluid">
               <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <Link to={"/home"} className="navbar-brand">React</Link>
                    <div className="navbar-nav mr-auto"> 
                         <li className="nav-item">
                              <Link to={"/products"} className="nav-link">{t("Products")}</Link>
                         </li>
                         <li className="nav-item">
                              <Link to={"/clients"} className="nav-link">{t("Clients")}</Link>
                         </li>
                         <li className="nav-item">
                              <Link to={"/users"} className="nav-link">{t("Users")}</Link>
                         </li>

                         <li className="nav-item">
                              <Link to={"/information"} className="nav-link">{t("Information")}</Link>
                         </li>
                         <li className="nav-item">
                              <Link to={"/contact"} className="nav-link">{t("Contact")}</Link>
                         </li>
                         <li className="nav-item">
                              <Link to={"/about"} className="nav-link">{t("About")}</Link>
                         </li>
                    </div>

                    <div className="navbar-nav mr-1">
                         <button onClick={()=>handleChange('en')}>En</button>
                         <button onClick={()=>handleChange('ch')}>Ch</button>

                         <li className="nav-item">
                              <Link to={"/signup"} className="nav-link">{t("Signup")}</Link>
                         </li>
                         <li className="nav-item">
                              <Link to={"/login"} className="nav-link">{t("Login")}</Link>
                         </li>
                    </div>
               </nav>

               <div className="container">
                    <Switch>
                         <Route exact path="/home" component={Home} />
                         <Route path="/products" exact component={Products} /> 
                    <Route path="/products/:id" component={ProductItem} /> 
                         <Route path="/clients" component={Clients} />
                         <Route path="/users" component={Users} />

                         <Route path="/information" component={Information} />
                         <Route path="/contact" component={Contact} />
                         <Route path="/about" component={About} />

                         <Route path="/signup" component={Signup} />
                         <Route path="/login" component={Login} />
                         <Route component={Notfound} />
                    </Switch>
               </div>
          
        </div>
     )  
};

export default App;

