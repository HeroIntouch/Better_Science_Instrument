import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Example extends Component {
  render(){
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">{this.props.header}</h1>
                    <p className="lead">{this.props.content}</p>
                </Jumbotron>
            </div>
        );
    }
}

export default Example;