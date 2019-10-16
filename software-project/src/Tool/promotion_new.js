import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CustomInput, Form, FormGroup, Label } from 'reactstrap';
import Plus from './Plus-PNG-Image.png';

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
      <h2>      Promotion </h2>
       <div style = {{padding: 30}} >
       <Button outline color="secondary" onClick={toggle} style = {{height: 150, width: 150}}>
       <img src= {Plus} alt = "Plus" width="40" height="40" align="absmiddle" /> 
       </Button>
      <Modal isOpen={modal} toggle={toggle} className={className} >
        <ModalHeader toggle={toggle}>Choose Picture</ModalHeader>
        <ModalBody>
          <FormGroup>
        <Label for="exampleCustomFileBrowser">File Browser</Label>
        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label = "choose" />
      </FormGroup>
        </ModalBody>
        <ModalFooter>
        <Button  outline color="secondary" onClick={toggle}>DELETE</Button>
          <Button  outline color="secondary" onClick={toggle}>SUMMIT</Button>
        </ModalFooter>
      </Modal>

      <Button outline color="secondary" onClick={toggle} style = {{height: 150, width: 150}}>
       <img src= {Plus} alt = "Plus" width="40" height="40" align="absmiddle" /> 
       </Button>
      <Modal isOpen={modal} toggle={toggle} className={className} >
        <ModalHeader toggle={toggle}>Choose Picture</ModalHeader>
        <ModalBody>
          <FormGroup>
        <Label for="exampleCustomFileBrowser">File Browser</Label>
        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label = "choose" />
      </FormGroup>
        </ModalBody>
        <ModalFooter>
        <Button  outline color="secondary" onClick={toggle}>DELETE</Button>
          <Button  outline color="secondary" onClick={toggle}>SUMMIT</Button>
        </ModalFooter>
      </Modal>

      <Button outline color="secondary" onClick={toggle} style = {{height: 150, width: 150}}>
       <img src= {Plus} alt = "Plus" width="40" height="40" align="absmiddle" /> 
       </Button>
      <Modal isOpen={modal} toggle={toggle} className={className} >
        <ModalHeader toggle={toggle}>Choose Picture</ModalHeader>
        <ModalBody>
          <FormGroup>
        <Label for="exampleCustomFileBrowser">File Browser</Label>
        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label = "choose" />
      </FormGroup>
        </ModalBody>
        <ModalFooter>
        <Button  outline color="secondary" onClick={toggle}>DELETE</Button>
          <Button  outline color="secondary" onClick={toggle}>SUMMIT</Button>
        </ModalFooter>
      </Modal>
       </div>
   
    </div>
  );
}

export default ModalExample;

