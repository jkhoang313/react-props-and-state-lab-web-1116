const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    var array = this.props.pets.map((pet) => {
      array.push(pet)
    }

    return (
      <div className="ui cards">
        {array}
      </div>
    )

    {
 //   var nameslist = []
 //   let self = this
 //   self.props.pets.forEach((pet)=>{
 //     if(self.props.adoptedPets.includes(pet.id)){
 //       nameslist.push(<div className="ui cards"><code> <Pet pet={pet} isAdopted={true} onAdoptPet={this.props.onAdoptPet}/> </code></div>)
 //     }else{
 //       nameslist.push(<div className="ui cards"><code> <Pet pet={pet} isAdopted={false} onAdoptPet={this.props.onAdoptPet}/> </code></div>)
 //     }
 //
 //   })
 //   return <div>{ nameslist }</div>
 // }
  }
}

module.exports = PetBrowser;
