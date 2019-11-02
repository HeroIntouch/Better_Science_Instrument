import React, { useState } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios'

export default class Example extends React.Component {
  state = {
    selectedFile: null
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.file[0]
    })
  }

  fileUploadHandler = () => {
    axios.post('');
  }

  render() {
    return (
      <div>
              <Button color="secondary" style = {{height:50}} onClick = {this.fileUploadHandler}> SUMMIT </Button>{' '}
      </div>
     
    );
    
  }
}

