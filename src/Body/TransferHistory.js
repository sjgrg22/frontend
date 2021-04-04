import axios from "axios";
import React,{ Component } from "react";
import { Container, Row} from "react-bootstrap";
import {Link} from 'react-router-dom';


class Transferinfo extends Component{

    state = {
        transfer_info: [],             //[] bracket helps in storing multiple items while '' helps to store just a single data
        config : {
            headers: { 'authorization' : `Bearer ${localStorage.getItem('token')}`}
        }
    }

    componentDidMount(){
        axios.get("http://localhost:201/user/all", this.state.config)
        .then((response)=>{
            console.log(response)
            this.setState({
                transfer_info: response.data.result
             })
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }

    deleteTransfer=(tid)=>{
      axios.delete('http://localhost:201/user/delete/' + tid, this.state.config)
      .then((response)=>{
          console.log(response)
      })
      .catch((e)=>{
          console.log(e.response)
      })
    }
   

    render(){
        return(
            <Container>
                <Row>

            {
               this.state.transfer_info.map((details)=>{
        return(
            <div>
                <p><img src={"http://localhost:201/"+ details.userImage}/></p>
                
                <p>Transferer Name:{details.tname}</p>
                <p>Transferer Password:{details.tpass}</p>

                
            <p><button onClick={this.deleteTransfer.bind(this, details._id)}>DELETE</button></p>
            <p><button><Link to={"/updatetransfer/"+details._id}>UPDATE</Link></button></p>

            </div>
                )
                })
            }
       
                </Row>
                
            </Container>
        )
    }
}

export default Transferinfo;