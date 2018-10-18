import React from 'react';
import {
  Col,
  Row,
  Well,
  Panel,
  FormControl,
  FormGroup,
  ControlLabel,
  Button,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';
import {
  postBook,
  deleteBook,
  getBooks,
  resetButton,
} from '../actions/booksActions';

class BooksForm extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [{}],
      img: '',
    };
  }

  componentDidMount() {
    this.props.getBooks();
  }

  handleSubmit = () => {
    const book = [
      {
        title: findDOMNode(this.refs.title).value,
        description: findDOMNode(this.refs.description).value,
        price: findDOMNode(this.refs.price).value,
      },
    ];
    this.props.postBook(book);
  };

  onDelete = () => {
    let bookId = findDOMNode(this.refs.delete).value;
    this.props.deleteBook(bookId);
  };

  resetForm = () => {
    this.props.resetButton();
    findDOMNode(this.refs.title).value = '';
    findDOMNode(this.refs.description).value = '';
    findDOMNode(this.refs.price).value = '';
  };

  render() {
    const booksList = this.props.books.map(b => {
      return (
        <option key={b.id} value={b.id}>
          {b.title}
        </option>
      );
    });

    return (
      <Well>
        <Row>
          <Col xs={12} sm={6} />
          <Col xs={12} sm={6}>
            <Panel>
              <Panel.Body>
                <FormGroup
                  controlId="title"
                  validationState={this.props.validation}
                >
                  <ControlLabel>Title</ControlLabel>
                  <FormControl
                    type="text"
                    placeholder="Enter Title"
                    ref="title"
                  />
                  <FormControl.Feedback />
                </FormGroup>
                <FormGroup
                  controlId="description"
                  validationState={this.props.validation}
                >
                  <ControlLabel>Description</ControlLabel>
                  <FormControl
                    type="text"
                    placeholder="Enter Description"
                    ref="description"
                  />
                  <FormControl.Feedback />
                </FormGroup>
                <FormGroup
                  controlId="price"
                  validationState={this.props.validation}
                >
                  <ControlLabel>Price</ControlLabel>
                  <FormControl
                    type="text"
                    placeholder="Enter Price"
                    ref="price"
                  />
                  <FormControl.Feedback />
                </FormGroup>
                <Button
                  onClick={!this.props.msg ? this.handleSubmit : this.resetForm}
                  bsStyle={!this.props.style ? 'primary' : this.props.style}
                >
                  {!this.props.msg ? 'Save the book' : this.props.msg}
                </Button>
              </Panel.Body>
            </Panel>
            <Panel style={{ marginTop: '25px' }}>
              <Panel.Body>
                <form>
                  <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Select a book</ControlLabel>
                    <FormControl
                      ref="delete"
                      componentClass="select"
                      placeholder="select"
                    >
                      <option value="select">select</option>
                      {booksList}
                    </FormControl>
                  </FormGroup>
                  <Button onClick={this.onDelete} bsStyle="danger">
                    Delete
                  </Button>
                </form>
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </Well>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.books,
    msg: state.books.msg,
    style: state.books.style,
    validation: state.books.validation,
  };
}

function mapDispatcheToProps(dispatch) {
  return bindActionCreators(
    { postBook, deleteBook, getBooks, resetButton },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatcheToProps
)(BooksForm);
