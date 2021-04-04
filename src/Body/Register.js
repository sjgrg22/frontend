import { Component, state, changeHandle, btnSubmit} from "react";
import axios from 'axios';//axios handles request and response

class Register extends Component{
    
        state = {
            username : "",
            fname: "",
            lname: "",
            email: "",
           addresss: "",
           phoneno: "",
           password: "",
           userType: ""
          

        }
       changeHandle = (e) =>{
                this.setState({
                    [e.target.name] : e.target.value

                })
        }

        btnSubmit=(e) =>{
           e.preventDefault();// prevents form to refresh so that data wont get lost
           axios.post("http://localhost:201/register", this.state)//post for post && get for get
           .then((response)=>{
               console.log(response)}) 
           .catch((theerror)=>{
               console.log(theerror.response)
           })
        }
        
        render(){
        return(
        <form>
            <div>This is register page.

        <p>Username<input type="text" name="username" value={this.state.username} onChange={this.changeHandle}/></p>
        
        <p>FirstName<input type="text" name="fname" value={this.state.fname} onChange={this.changeHandle}/></p>
        
        <p>LastName<input type="text" name="lname" value={this.state.lname} onChange={this.changeHandle}/></p>
        
        <p>Email<input type="text" name="email" value={this.state.email} onChange={this.changeHandle}/></p>

        <p>Address<input type="text" name="addresss" value={this.state.addresss} onChange={this.changeHandle}/></p>

        <p>Phone<input type="text" name="phoneno" value={this.state.phoneno} onChange={this.changeHandle}/></p>

        <p>Password<input type="text" name="password" value={this.state.password} onChange={this.changeHandle}/></p> 

        <p>UserType<input type="text" name="userType" value={this.state.userType} onChange={this.changeHandle}/></p> 

        <button onClick={this.btnSubmit}>SUBMIT</button>

         </div>
         </form>

            
        )
    
    }
}

export default Register;