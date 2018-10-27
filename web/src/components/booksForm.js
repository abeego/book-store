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
      books: [],
      img: '',
      title: '',
      description: '',
      price: '',
      selection: '',
    };
  }

  componentDidMount() {
    this.props.getBooks();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.books !== nextProps.books) {
      return {
        books: nextProps.books,
      };
    }
    return null;
  }

  handleSubmit = () => {
    const book = {
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
    };
    this.props.postBook(book);
  };

  onDelete = () => {
    this.props.deleteBook(this.state.selection);
    this.setState({ books: [] });
  };

  resetForm = () => {
    this.props.resetButton();
    this.setState({
      title: '',
      description: '',
      price: '',
    });
  };

  updateTitle = e => this.setState({ title: e.target.value });

  updateDescription = e => this.setState({ description: e.target.value });

  updatePrice = e => this.setState({ price: parseFloat(e.target.value) });

  selectBook = e => this.setState({ selection: e.target.value });

  render() {
    const booksList = this.state.books.map(b => {
      return (
        <option key={b.id} value={b.id}>
          {b.title}
        </option>
      );
    });

    const { validation } = this.props;

    return (
      <Well>
        <Row>
          <Col xs={12} sm={6} />
          <Col xs={12} sm={6}>
            <Panel>
              <Panel.Body>
                <FormGroup
                  validationState={
                    validation && validation.title
                      ? validation.title
                      : !validation
                        ? undefined
                        : 'success'
                  }
                >
                  <ControlLabel>Title</ControlLabel>
                  <FormControl
                    type="text"
                    placeholder="Enter Title"
                    onChange={this.updateTitle}
                    value={this.state.title}
                  />
                  <FormControl.Feedback />
                </FormGroup>
                <FormGroup
                  validationState={
                    validation && validation.description
                      ? validation.description
                      : !validation
                        ? undefined
                        : 'success'
                  }
                >
                  <ControlLabel>Description</ControlLabel>
                  <FormControl
                    type="text"
                    placeholder="Enter Description"
                    onChange={this.updateDescription}
                    value={this.state.description}
                  />
                  <FormControl.Feedback />
                </FormGroup>
                <FormGroup
                  validationState={
                    validation && validation.price
                      ? validation.price
                      : !validation
                        ? undefined
                        : 'success'
                  }
                >
                  <ControlLabel>Price</ControlLabel>
                  <FormControl
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Enter Price"
                    value={this.state.price}
                    onChange={this.updatePrice}
                  />
                  <FormControl.Feedback />
                </FormGroup>
                <Button
                  onClick={
                    !this.props.msg ||
                    (this.props.msg && this.props.validation !== 'success')
                      ? this.handleSubmit
                      : this.resetForm
                  }
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
                      componentClass="select"
                      placeholder="select"
                      onChange={this.selectBook}
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
