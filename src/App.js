import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
      // monsters: [
      //   {
      //     name: 'A',
      //     id: 1
      //   },
      //   {
      //     name: 'B',
      //     id: 2
      //   }
      // ]
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
    }

  // handleChange(e) {
  //   this.setState({ searchField: e.target.value })
  // }
  // must use bind(this) in constructor this.handleChange = this.handleChange.bind(this);

  // the other way
  // use errow function
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        {/* <CardList job='developer'> */}
          {/*  job='developer' is one of component CardList's property*/}
          {/* <h2>Dream Job</h2>  */}
          {/* inbetween the tags of the component, is the prop.children */}
          {/* { this.state.monsters.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))} */}
        {/* </CardList> */}
        {/* refactor the above code to CardList to be its own responsibity */}
        {/* <input type='search' placeholder='search monsters' onChange={ e => console.log(e.target.value) }/> */}

        {/* one state late, since the async  */}
        {/* <input type='search' placeholder='search monsters' onChange={ e => { this.setState({ searchField: e.target.value }); console.log(this.state); }}/> */}
        {/* <input 
          type='search' 
          placeholder='search monsters' 
          onChange={ e => { 
            this.setState({ searchField: e.target.value }
              // , () => console.log(this.state) // callback function, async state
            ); 
          }}
        /> */}

        <SearchBox 
          placeholder='search monsters'
          // hangleChange={ e => { this.setState({ searchField: e.target.value }) }} anonymous function
          handleChange={ this.handleChange }
        />
          
       

        {/* <CardList msters={this.state.monsters}/> */}
        <CardList msters={ filteredMonsters } />
        
      </div>
    );
  }
}

export default App;
