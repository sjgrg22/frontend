import { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component{
  logout = ()=>{
    // localStorage.removeItem('token')
    // localStorage.removeItem('id')
    localStorage.clear()
    window.location.href = '/'
 
}
    render(){

 

        // if(localStorage.getItem('token') && localStorage.getItem('userType')=='Admin')
        // {
        //     var menu = 
        //     <div>
        //        <li class="nav-item">
        //     <Link class="nav-link"to="/">HOME</Link> 
        //     </li>
        //        <li class="nav-item">
        //   <Link class="nav-link" to="/AddBus">Book</Link> 
        //   </li>
             
        //     <li class="nav-item">
        //     <Link class="nav-link"to='/TransferHistory'>TransferHistory</Link>
        //     </li>
           
        //     <li class="nav-item">
        //     <Link class="nav-link"to='/logout' onClick={this.logout}>Log Out</Link> 
        //     </li>
        //     <li class="nav-item dropdown">
        //   <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //     OTHERS
        //   </a>
        //   <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        //     <a class="dropdown-item" href="/DESTINATION">DESTINATION</a>
        //     <a class="dropdown-item" href="/register">REGISTER</a>
        //     <a class="dropdown-item" href="/dashboard">DASHBOARD</a>
        //   </div>
        // </li>
        //     </div>
           
        // }
        if(localStorage.getItem('token') && localStorage.getItem('userType')=='User'){
          var menu =
  
          <div>
              <li class="nav-item">
          <Link class="nav-link" to="./">HOME</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/register">REGISTER</Link> 
          </li>
         
         
          <li class="nav-item">
          <Link class="nav-link" to='/item'>Bus Book</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to='/DESTINATION'>DESTINATION</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to='/dashboard'>DASHBOARD</Link>
            </li>
          <li class="nav-item">
          <Link class="nav-link" to='/logout' onClick={this.logout}>Log Out</Link>
          </li>
         
          </div>
        }
       
        else
        {
            var menu =
        <div>
           
<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
      <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to="/register">Register</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to="/login">Login</Link>
      </li>
    </ul>
  </div>
</nav>
        </div>
    }


        return(
            
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            
            <a class="navbar-brand" Link to="/">Logo</a>
              {menu}
             
          </nav>



        )
    }
}

export default Header;