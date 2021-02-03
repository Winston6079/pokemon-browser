import React, {Component} from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import Scroll from './Scroll';


class App extends Component {
  constructor() {
    super();
    this.state = {
      character: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon').then(resp => resp.json()).then(data => this.setState({character: data.results }))
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render() {
    const filteredChar = this.state.character.filter(data => { return data.name.toLowerCase().includes(this.state.searchField.toLowerCase())});
    if (this.state.character.length === 0) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className='tc'>
          <h1>Pokemons</h1>
          <SearchBox searchChange= {this.onSearchChange} />
          <Scroll>
              <Cardlist character={ filteredChar }/>
          </Scroll>
        </div>
    )}
  }
}


export default App;



