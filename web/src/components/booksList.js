import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from '../actions/booksActions';
import { Grid, Col, Row } from 'react-bootstrap';

import BookItem from './bookItem';
import BooksForm from './booksForm';
import Cart from './cart';

class BookList extends React.Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    const booksList = this.props.books.map(book => {
      return (
        <Col xs={12} sm={6} md={4} key={book._id}>
          <BookItem book={book} />
        </Col>
      );
    });
    return (
      <Grid>
        <Row>
          <Cart />
        </Row>
        <Row className="second">{booksList}</Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.books
  };
}

function mapDispatcheToProps(dispatch) {
  return bindActionCreators(
    {
      getBooks: getBooks
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatcheToProps
)(BookList);
