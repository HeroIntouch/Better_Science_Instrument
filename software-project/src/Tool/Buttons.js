import React from 'react';
import { Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Button color="secondary" href="/homepage">Homepage</Button>{' '}
      <Button color="secondary" href="/product">Product</Button>{' '}
      <Button color="secondary" href="/user">User</Button>{' '}
      <Button color="secondary" href="/theme">Theme</Button>{' '}
    </div>
  );
}

export default Example;