const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    return (
      <div>{this.props.pets.map((pet) => {
        return <div className="ui cards"><Pet pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)}/></div>
      })}</div>
    )
  }
}

module.exports = PetBrowser;
