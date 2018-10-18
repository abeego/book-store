import React from 'react';
import {Nav, NavItem, Navbar, Badge} from 'react-bootstrap';
import {connect} from 'react-redux';

class Menu extends React.Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Book Store</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/about">
              About
            </NavItem>
            <NavItem eventKey={2} href="/contact">
              Contact Us
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/admin">
              Admin
            </NavItem>
            <NavItem eventKey={2} href="/cart">
              YourCart
              <span> </span>
              {this.props.totalQty > 0 ? (
                <Badge className="badge">{this.props.totalQty}</Badge>
              ) : (
                ''
              )}
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalQty: state.cart.totalQty,
  };
}

export default connect(mapStateToProps)(Menu);
