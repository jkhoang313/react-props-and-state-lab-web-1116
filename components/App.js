const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  changeFilter(filter) {
    this.setState({
      filters: {
        type: filter
      }
    })
  }

  changePets() {
    var url = this.state.filters.type === 'all' ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`

    fetch(url)
    .then(function(response) {
      // return response.blob();
    })
    .then(function(myBlob) {
    })
  }

  handleAdopt(petId) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId]
    })
    return petId
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeFilter.bind(this)} onFindPetsClick={this.changePets.bind(this)} filters={this.state.filters} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdopt.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
