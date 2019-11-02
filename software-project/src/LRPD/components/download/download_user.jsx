import React from "react" ;
import "./dl_user.scss";
import { Container, Row, Col , Button ,InputGroup, InputGroupAddon , Input } from 'reactstrap';

export class DownloadUser extends React.Component{
    constructor( props ){
        super(props);
        this.state = { show : false , chkshow : true };
        this.toggleDiv = this.toggleDiv.bind(this)   
    }

    toggleDiv = () => {
        const { show , chkshow } = this.state;
        this.setState( { show : !show , chkshow : !chkshow } )
    }

    render() {
        return (
        <Container> 
            <Row>
                <Col>
            <br />
            <div className= "base-container">
            <br />
                <div className= "header">Download</div>
            <br /><br />
            </div>
                    </Col>
            </Row>
            <Row>
            <br />
                <div className= "txtKEY">KEY : </div>
                <Col>
                    <InputGroup>
                        <Input />
                        <InputGroupAddon addonType="prepend">
                            { this.state.chkshow && <div><Button onClick={ this.toggleDiv } color="danger">Check Key</Button></div> }
                            {/* { this.state.chkshow && <DisChk/> } */}
                            { this.state.show && <BoxInstall/>}
                            </InputGroupAddon>
                    </InputGroup></Col>
            </Row>
            </Container>
        );
    }
}

class BoxInstall extends React.Component{
    render() {
        return(
            <Button color="primary">Download</Button>
        )
    }
}
