import axios from "axios";
import { Component, state, changeHandle, btnLogin } from "react";
import {Redirect} from 'react-router-dom';

class Login extends Component{
   
        state={
            username:"",
            password:"",
            // ,
            loginChk : false

        }
        changeHandle = (e)=> {
            this.setState({
                [e.target.name] : e.target.value//helps to take inpout vfrom onchange to state
            })
        }
        btnlogin = (e) => {
            e.preventDefault();//to prevent webpage from reload so that to prevent data loss
            
            axios.post("http://localhost:201/login", this.state)
            .then((response)=>{
                this.setState({
                    loginChk : true
                })
               localStorage.setItem('token', response.data.token);
               localStorage.setItem('userType',response.data.userType);
               console.log(response)
             
            })
            .catch((err)=>{
                console.log(err.response)
            })
        }
        
        render(){
            if(this.state.loginChk===true){
                return <Redirect to='./AddTransfer' />
            }
            // if(localStorage.getItem('token')){
            //     return <Redirect to='/items' />
            // }w
        return(
            <form>
            <div> 
                <p>Username<input type="text" name="username" defaultValue={this.state.username} onChange={this.changeHandle}/></p>
                <p>Password<input type="text" name="password" defaultValue={this.state.password} onChange={this.changeHandle}/></p>
                <button onClick={this.btnlogin}>Login</button>
            </div>
            </form>
        )
    }
}


export default Login;