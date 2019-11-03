import React, {Component} from 'react';
import './App.scss';

import Map from './components/Map';
import Toggler from './components/Toggler';
import Search from './components/Search';
import PlacesPanel from './components/PlacesPanel';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			map: null,
			longitude: 144.988,
			latitude: -37.803,
			style: 'mapbox://styles/mapbox/dark-v9',
			places: []
		};
	}
	render() {
		return (
			<div className="App">
				<PlacesPanel app={this} />
				<Search app={this} />
				<Toggler app={this} />
				<Map app={this} />
			</div>
		);
	}
}

export default App;
