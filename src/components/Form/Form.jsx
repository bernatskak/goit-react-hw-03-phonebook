import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

class Form extends Component {
  state = { name: '', number: '' };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = e => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <div className={styles.formContainer}>
          <label className={styles.formLabel}>
            Name
            <input
              className={styles.formInput}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Input name of contact"
            />
          </label>
          <label className={styles.formLabel}>
            Number
            <input
              className={styles.formInput}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
              placeholder="Input telephone number"
            />
          </label>
          <button className={styles.formBtn} type="submit">
            Add contact
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
