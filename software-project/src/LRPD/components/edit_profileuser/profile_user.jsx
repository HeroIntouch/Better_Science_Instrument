import React from "react" ;
import pfUser from "../../profile_user.svg";
import "./styleEdit.scss";
import { Container, Row, Col , Button } from 'reactstrap';

export class ProfileUser extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <Container> 
            <Row>
                <Col>
            <div className= "base-container">
            <br />
                <div className= "header">Profile</div>
                    <div className= "content">
                        <div className="image">
                            <img src={pfUser} />
                        </div>
                        <div className= "editBt"><button type = "button" className="sizeEditBt">
                        Edit </button></div>
                </div>
            </div>
                    </Col>
                <Col>
                <br />
                <br />
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Company: </label>
                        <input type="text" name ="company" />    
                            </div>
                    <div className="form-group">
                        <label htmlFor="email">Address: </label>
                        <input type="text" name ="address" />    
                            </div>
                    <div className="form-group">
                        <label htmlFor="username">Tel: </label>
                        <input type="text" name ="tel" />    
                            </div>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name ="email" />    
                            </div>
                </div>
                </Col>
                <Col></Col>
                </Row>
            
                <Row>
                <Col>
                <br />
                <br />
                <div className="footer">
                    <center><Button color="dark">Transaction</Button></center>
                </div></Col>
                </Row>
      
      </Container>
        );
    }
}