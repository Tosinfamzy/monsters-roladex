import React, { Component } from 'react';
import { Cardlist } from './components/card-list/card-list.component';
import { Searchbox } from './components/searchbox/searchbox.component';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: '',
		};
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}
	render() {
		const { monsters, searchField } = this.state;
		let filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase()),
		);
		return (
			<div className="App">
				<Searchbox
					placeholder="Search"
					handleChange={(e) =>
						this.setState({ searchField: e.target.value })
					}
				/>
				<Cardlist monsters={filteredMonsters}></Cardlist>
			</div>
		);
	}
}

export default App;
