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
    <div>
        <br></br>
      <h2> Contract US</h2>
      <br></br>
      <Button outline color="secondary" onClick={toggle} style = {{height: 150}} block>Edit</Button>
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
  );
}

export default ModalExample;

