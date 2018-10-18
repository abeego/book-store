import React from 'react';
import Menu from './menu';
import Footer from './footer';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCart } from '../actions/cartActions';

class Main extends React.Component {
  componentDidMount() {
    this.props.getCart();
  }

  render() {
    return (
      <div>
        <Menu cartItemsNumber={this.props.totalQty} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalQty: state.cart.totalQty
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCart }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
