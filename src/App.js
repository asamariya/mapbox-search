import React, {Component} from 'react';
import './App.scss';

import Map from './components/Map';
import Toggler from './components/Toggler';
import Search from './components/Search';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			map: null,
			latitude: -37.803,
			longitude: 144.988,
			style: 'mapbox://styles/mapbox/dark-v9'
		};
	}
	render() {
		return (
			<div className="App">
				<Search app={this} />
				<Toggler app={this} />
				<Map app={this} />
			</div>
		);
	}
}

export default App;
