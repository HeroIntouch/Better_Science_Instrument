import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CustomInput, Form, FormGroup, Label } from 'reactstrap';


const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    // <div>
 
    // </div>
    <div >
      <h2>      Logo </h2>
       <div style = {{padding: 30}} >
       <Button outline color="secondary" onClick={toggle} style = {{height: 150, width: 150}}>Edit</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} style = {{height: 600, width: 600}}>
        <ModalHeader toggle={toggle}>Choose Picture</ModalHeader>
        <ModalBody>
          <FormGroup>
        <Label for="exampleCustomFileBrowser">File Browser</Label>
        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label = "choose" />
      </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button  outline color="secondary" onClick={toggle}>SUMMIT</Button>
        </ModalFooter>
      </Modal>
       </div>
   
    </div>
  );
}

export default ModalExample;

