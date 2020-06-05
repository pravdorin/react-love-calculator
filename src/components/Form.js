import React from 'react';
import './Form.css';

class Form extends React.Component {
    state = { queryName: '', queryCrash: '' };

    submitForm = (e) => {
      e.preventDefault();

      if (this.state.queryName === '' || this.state.queryCrash === '') {
        this.props.calcLove();
      }
      if (this.state.queryName !== '' && this.state.queryCrash !== '') {
        this.props.calcLove(this.state.queryName, this.state.queryCrash);
      }
    };

    render() {
        return (
          <form className="form-content" onSubmit={this.submitForm}>
            <label className="form-label" htmlFor="">Enter your name:</label>
            <input
              className="form-input"
              type="text"
              value={this.state.queryName}
              onChange={(e) => this.setState({ queryName: e.target.value })}
            />
            <label className="form-label" htmlFor="">Enter crash name:</label>
            <input
              className="form-input"
              type="text"
              value={this.state.queryCrash}
              onChange={(e) => this.setState({ queryCrash: e.target.value })}
            />
            <button className="btn-submit" onClick={this.submitForm} type="submit">
              Calculate
            </button>
          </form>
        )
    }
}

export default Form;
