import React from 'react';
import ReactDOM from 'react-dom';
import Fluke from './fluke';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Fluke />, div);
  ReactDOM.unmountComponentAtNode(div);
});
