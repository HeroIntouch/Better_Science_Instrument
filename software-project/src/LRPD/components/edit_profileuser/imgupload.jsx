import React, { Component } from 'react';
import {storage} from '../../firebase';
import Plus from "../../profile_user.svg";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CustomInput, Form, FormGroup, Label } from 'reactstrap';

export class ImageUpload extends Component {
    constructor(props){
        super(props);
        this.state = { 
            image: null,
            url: '',
            modal: false,
            check: false
        }
        this.handleChange = this
            .handleChange
            .bind(this);
            this.handleUpload = this.handleUpload.bind(this); 
    }

    toggle(){
        this.setState({
            modal: ! this.state.modal
        });
    }


    


    handleChange = e => {
        if (e.target.files[0]) {
          const image = e.target.files[0];
          this.setState(() => ({image , check : !this.state.check }));

        }
      }

    handleUpload = () => {

        const {image} = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        (snapshot) => {
            // progrss function ....
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress});
          }, 
          (error) => {
               // error function ....
            console.log(error);
          }, 
        () => {
            // complete function ....
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                console.log(url);
                this.setState({url});
            })
        });
    }

    render() {
        const style = {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          };

        const fn = () => {
          this.toggle()
          if(this.state.check ){
            this.handleUpload()
          }
       
           
        }
        
        return(
            // <div style = {style}>
            //     <input type = "file" onChange={this.handleChange} />
            //     <Button onClick={this.handleUpload} > Upload </Button>
            // </div>
            <div >
            <h2> Logo </h2>
             <div style = {{padding: 30}} >
             <Button outline color="secondary" onClick={this.toggle.bind(this)} style = {{height: 160, width: 160}}>
             <center>
             <img src={this.state.url || Plus} alt="Uploaded images" style = {{height: 140, width: 140}}/>
             </center>
             </Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)} className={this.className} style = {{height: 600, width: 600}}>
              <ModalHeader toggle={this.toggle.bind(this)}>Choose Picture</ModalHeader>
              <ModalBody>
                <FormGroup>
              <Label for="exampleCustomFileBrowser">File Browser</Label>
              <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label = "choose" onChange={this.handleChange} />
            </FormGroup>
                {/* <input type = "file" onChange={this.handleChange} /> */}
              </ModalBody>
              <ModalFooter>
                <Button  outline color="secondary" onClick={() => fn()}>SUMMIT</Button>
              </ModalFooter>
            </Modal>
             </div>
              </div>
 
         


    
        )
    }
}
