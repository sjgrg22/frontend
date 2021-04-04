
import {Container,Row,Col} from 'react-bootstrap';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import {Route} from 'react-router-dom';
import ProductAdd from './AddTransfer';
import updateT from './UpdateTransfer';
import { Component } from 'react';
import Transferinfo from './TransferHistory';


class Body extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <Route path='/' exact component={Login}></Route>
                        <Route path='/register' exact component={Register}></Route>
                        <Route path='/login' exact component={Login}></Route>
                        <Route path='/transferhistory' exact component={Transferinfo}></Route>
                        <Route path='/updatetransfer/:id' exact component={updateT}></Route>
                        <Route path='/addtransfer' exact component={ProductAdd}></Route>
                    </Col>
                
                </Row>
            </Container>
        )
    }
}

export default Body;