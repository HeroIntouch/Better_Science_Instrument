import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }


  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    let txColor = this.props.txColor;
    let navItem1;
    let navItem2;
    if(this.props.ad){
      navItem1 = <NavItem><Link to="/edithomepage"><NavLink><div style={{color:txColor}}>Edit</div></NavLink></Link></NavItem>
      navItem2 = <NavItem><Link to="/generate"><NavLink><div style={{color:txColor}}>Generate</div></NavLink></Link></NavItem>
    } else {
      navItem1 = null
      navItem2 = null
    }
    return (
      <div>
        <Navbar color={this.props.bgcolor} light expand="md">
          <Link to='/'><NavbarBrand><div style={{color:txColor}}>{this.props.logo}</div></NavbarBrand></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            {navItem1}
            {navItem2}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{color:txColor}}>
                  Item list
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to='/product'><DropdownItem>
                    1
                  </DropdownItem></Link>
                  <Link to='/profileUser'><DropdownItem>
                    proflieUser
                  </DropdownItem></Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link to="/login"><NavLink><div style={{color:txColor}}>{this.props.ad ? "logout" : "login"}</div></NavLink></Link>
              </NavItem>
              <NavItem>
              <Link to="/"><NavLink><div style={{color:txColor}}>Search</div></NavLink></Link>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}