import React from 'react';
import { connect } from 'react-redux';
import {
  Modal,
  Panel,
  Col,
  Row,
  Well,
  Button,
  ButtonGroup,
  Label
} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import {
  deleteCartItem,
  updateCartItem,
  getCart
} from '../actions/cartActions';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  componentDidMount() {
    this.props.getCart();
  }

  handleOpen = () => {
    this.setState({ showModal: true });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  onDelet = _id => {
    const currentBookToDelete = this.props.cart;
    const indexToDelete = currentBookToDelete.findIndex(book => {
      return book._id === _id;
    });

    let cartAfterDelete = [
      ...currentBookToDelete.slice(0, indexToDelete),
      ...currentBookToDelete.slice(indexToDelete + 1)
    ];

    this.props.deleteCartItem(cartAfterDelete);
  };

  onIncrement = _id => {
    this.props.updateCartItem(_id, 1, this.props.cart);
  };

  onDecrement = (_id, quantity) => {
    if (quantity > 1) this.props.updateCartItem(_id, -1, this.props.cart);
  };

  render() {
    if (this.props.cart[0]) {
      return this.renderCart();
    } else {
      return this.renderEmpty();
    }
  }

  renderEmpty() {
    return <div />;
  }

  renderCart() {
    const cartItemsList = this.props.cart.map(c => {
      return (
        <Panel key={c._id}>
          <Panel.Body>
            <Row>
              <Col xs={12} sm={4}>
                <h6>{c.title}</h6>
                <span> </span>
              </Col>
              <Col xs={12} sm={2}>
                <h6>usd. {c.price}</h6>
              </Col>
              <Col xs={12} sm={2}>
                <h6>
                  qty. <Label bsStyle="success">{c.quantity}</Label>
                </h6>
              </Col>
              <Col xs={6} sm={4}>
                <ButtonGroup style={{ minWidth: '300px' }}>
                  <Button
                    onClick={e => this.onDecrement(c._id, c.quantity)}
                    bsStyle="default"
                    bsSize="small"
                  >
                    -
                  </Button>
                  <Button
                    onClick={e => this.onIncrement(c._id)}
                    bsStyle="default"
                    bsSize="small"
                  >
                    +
                  </Button>
                  <span> </span>
                  <Button
                    onClick={e => this.onDelet(c._id)}
                    bsStyle="danger"
                    bsSize="small"
                  >
                    DELETE
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Panel.Body>
        </Panel>
      );
    }, this);
    return (
      <Panel bsStyle="primary">
        <Panel.Heading>Cart</Panel.Heading>
        <Panel.Body>
          {cartItemsList}
          <Row>
            <Col xs={12}>
              <h6>Total amount: {this.props.totalAmount} $</h6>
              <Button
                onClick={this.handleOpen}
                bsStyle="success"
                bsSize="small"
              >
                PROCEED TO CHECKOUT
              </Button>
            </Col>
          </Row>
          <Modal show={this.state.showModal} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Thank you!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h6>Your order has been saved</h6>
              <p>You will receive an email confirmation</p>
            </Modal.Body>
            <Modal.Footer>
              <Col xs={6}>
                <h6>total: {this.props.totalAmount} $</h6>
              </Col>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </Panel.Body>
      </Panel>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
    totalAmount: state.cart.totalAmount
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      deleteCartItem: deleteCartItem,
      updateCartItem: updateCartItem,
      getCart: getCart
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
