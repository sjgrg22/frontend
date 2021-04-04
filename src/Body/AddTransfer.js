import React,{ Component } from "react";
import axios from 'axios';
import { Redirect } from "react-router";
class ProductAdd extends Component{
    state = {
       
        tname : "",
        treceiver : "",
        tamount : "",
        tpass : "",
        tpass1 : "",
        userImage: "",
        config: {
            headers : {'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    
    }
    inputHandler=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    fileHandler = (e)=>{
        this.setState({
            userImage : e.target.files[0]
        })
    }
    proAddMethod = (e)=>{
        

        const data = new FormData() // new line
        e.preventDefault();
        data.append('tname', this.state.tname)
        data.append('treceiver', this.state.treceiver)
        data.append('tamount', this.state.tamount)
        data.append('tpass', this.state.tpass)
        data.append('tpass1', this.state.tpass1)
        data.append('userImage', this.state.userImage)

        axios.post("http://localhost:201/transfer", data,{
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        })
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err.response)
        })

    }
 
    render(){
        // if(localStorage.getItem('userType')=='user' || localStorage.getItem('userType')== 'Admin')
        // {
        //         return<Redirect to='/' />
        // }
        return(
            <div>
            <form>
            
                <p>
                    <label>Transfer Name</label>
                    <input type="text"
                     defaultValue={this.state.tname}
                     name="tname"
                     onChange={this.inputHandler}
                     
                     />
                    </p>

                    <p>
                    <label>Receiver Name</label>
                    <input type="text"
                    defaultValue={this.state.treceiver}
                    name="treceiver"
                    onChange={this.inputHandler}
                    />
                    </p>

                    <p>
                    <label>Amount</label>
                    <input type="text" 
                    defaultValue={this.state.tamount}
                    name="tamount"
                    onChange={this.inputHandler}
                    />
                    </p>

                    <p>
                    <label>Password</label>
                    <input type="text" 
                    defaultValue={this.state.tpass}
                    name="tpass"
                    onChange={this.inputHandler}
                    />
                    </p>

                    <p>
                    <label>Confirm Password</label>
                    <input type="text" 
                    defaultValue={this.state.tpass1}
                    name="tpass1"
                    onChange={this.inputHandler}
                    />
                    </p>

                    <p>
                    <label>Transfer Name</label>
                    <input type="file"
                     defaultValue={this.state.userImage}
                     name="userImage"
                     onChange={this.fileHandler}
                     
                     />
                    </p>


                    <p> <button onClick={this.proAddMethod}>Add</button></p>
                    
            </form>
            </div>
        )
    }
}
export default ProductAdd;