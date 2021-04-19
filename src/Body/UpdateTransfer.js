import axios from 'axios';
import { Component } from "react";


class updateT extends Component{

    state={
        tname: "",
        treceiver: "",
        tamount: "",
        tpass: "",
        id: this.props.match.params.id
      
    }

    changeHandle=(e)=>{
        this.setState({
        [e.target.name]:e.target.value
    })
    }

    componentDidMount(){
        axios.get('http://localhost:201/user/single/'+this.state.id)
        .then((response)=>{
            console.log(response)
            this.setState({
                tname: response.data.result.tname,
                treceiver: response.data.result.treceiver,
                tamount: response.data.result.tamount,
                tpass: response.data.result.tpass
            })
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }

    btnUpdate=(e)=>{
        e.preventDefault();
    //     const userdata={
    //         tname:this.state.tname,
    //         treceiver:this.state.treceiver,
    //         tamount:this.state.tamount,
    //         tpass:this.state.tpass
    // }
        axios.put("http://localhost:201/user/update",this.state,{
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        })
        .then((response)=>{
            console.log(response)
        })

        .catch((error)=>{
            console.log(error.response)
        })

    }
render(){
return(
    
        <div>
            <form>
            <p>Your Name<input type="text" name="tname" defaultValue={this.state.tname} onChange={this.changeHandle}/></p>
            
            <p>Receiver Name<input type="text" name="treceiver" defaultValue={this.state.treceiver} onChange={this.changeHandle}/></p>

            <p>Amount<input type="text" name="tamount" defaultValue={this.state.tamount} onChange={this.changeHandle}/></p>
            
            <p>Password<input type="text" name="tpass" defaultValue={this.state.tpass} onChange={this.changeHandle}/></p>

            <p><button onClick={this.btnUpdate}>UPDATE</button></p>
            </form>
        </div>
    
)}

}

export default updateT;