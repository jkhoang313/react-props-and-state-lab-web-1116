const React = require('react');

class Filters extends React.Component {
  constructor() {
    super();
  }

  changeSelect(event) {

    this.props.onChangeType(event.target.value)
  }

  handleSubmit() {
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.changeSelect.bind(this)} value={this.props.filters.type}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleSubmit.bind(this)}>Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
