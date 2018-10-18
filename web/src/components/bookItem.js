import React from 'react';
import { Row, Col, Well, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, updateCartItem } from '../actions/cartActions';

class BookItem extends React.Component {
  constructor() {
    super();
    this.state = {
      isClicked: false
    };
  }

  onReadMore = () => {
    this.setState({ isClicked: true });
  };

  handleCart = () => {
    const book = [...this.props.cart, { ...this.props.book, quantity: 1 }];
    if (this.props.cart.length > 0) {
      let _id = this.props.book._id;
      let cartIndex = this.props.cart.findIndex(c => {
        return c._id === _id;
      });

      if (cartIndex === -1) {
        this.props.addToCart(book);
      } else {
        this.props.updateCartItem(_id, 1, this.props.cart);
      }
    } else {
      this.props.addToCart(book);
    }
  };

  render() {
    const { title, description, price } = { ...this.props.book };
    return (
      <Well>
        <Row>
          <Col xs={12}>
            <h6>{title}</h6>
            <p>
              {description.length > 50 && this.state.isClicked === false
                ? description.substring(0, 50)
                : description}
              <button className="link" onClick={this.onReadMore}>
                {this.state.isClicked === false &&
                description !== null &&
                description.length > 50
                  ? '...read more'
                  : ''}
              </button>
            </p>
            <h6>usd. {price}</h6>
            <Button onClick={this.handleCart} bsStyle="primary">
              Buy now
            </Button>
          </Col>
        </Row>
      </Well>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addToCart,
      updateCartItem
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookItem);
