import React, {Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from '../Component/Home';
import About from '../Component/About';
 import Box from '../Component/Box/BoxProfile';
 import AddBox from '../Component/AddBox/Addbox';
 import BoxList from '../Component/Box/BoxList';
 import AddContribution from '../Component/Contribution/AddContribution';
 import ContributionDetails from '../Component/Contribution/ContributionDetails';
 import BoxDetails from '../Component/Box/BoxDetails';


class Header extends Component{
render(){
    return (
        <Router>
        <header class="p-3 bg-dark text-white" style={{ marginBottom:'30px'}}>
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        {/* logo */}
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li> <Link class="nav-link px-2 text-white" to="/">Home</Link></li>
          {/* <li> <Link class="nav-link px-2 text-white" to="/about">About</Link></li> */}
          <li> <Link class="nav-link px-2 text-white" to="/boxlist">Box List</Link></li>
          <li> <Link class="nav-link px-2 text-white" to="/addbox">Add Box</Link></li>
          <li> <Link class="nav-link px-2 text-white" to="/addcontribution">Add Contribution</Link></li>
          {/* <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" class="nav-link px-2 text-white">About</a></li> */}
        </ul>

        {/* <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div> */}
      </div>
    </div>
  </header>
  <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/boxlist" component={BoxList}/>
          <Route path="/contributiondetails/:id" component={ContributionDetails}/>
          <Route path="/box/:number" component={Box}/>
          <Route path="/boxdetails/:id" component={BoxDetails}/>
       
          <Route path="/addbox" component={AddBox}/>
          <Route path="/addcontribution" component={AddContribution}/>
            
         
        </Switch>
  </Router>
    )
}



}

export default Header;