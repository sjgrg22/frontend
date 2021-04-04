import { Component} from 'react';
import {Link} from 'react-router-dom';

class Logout extends component{

    logout = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        window.location.href = '/'
     
    }

    render(){
        if(localStorage.getItem('token') && localStorage.getItem('usertype')=='Admin'){
            var menu = 
            <>

            <Link to="/">HOME</Link> |
            <Link to="/Register">REGISTER</Link> |
            <Link to='/Login'>LOGIN</Link> |
            <Link to='/TransferHistory'>Add Product</Link> |
            <Link to='/updatetransfer/:id'>Product Add</Link> |
            <Link to='/addtransfer'>Product Add</Link> |
            <Link to='/logout' onClick={this.logout}>Log Out</Link>
            </>
        }
        else if(localStorage.getItem('token')){
            var menu = 
            <>
            <Link to="/">HOME</Link> |
         
            <Link to='/logout' onClick={this.logout}>Log Out</Link>
            </>
        }
        else if(localStorage.getItem('token') ){
            var menu = 
            <>
            <Link to="/">HOME</Link> |
            </>
        }
        else{
            var menu = 
            <>
            <Link to="/">HOME</Link> |
            <Link to="/login">Login</Link> |
            <Link to="/register">Register</Link> |
            </>
        }
         
           
                
                return(
                    <div>
                  
         
                        {menu}
         
               
                 </div>
                )
            }
        }
        
export default Logout;