import React, {Component} from 'react';
import './App.css';

import Map from './components/Map';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			latitude: -37.803,
			longitude: 144.988,
			style: 'mapbox://styles/mapbox/streets-v11'
		};
	}
	render() {
		return (
			<div className="App">
				<Map app={this.state} />
			</div>
		);
	}
}

export default App;
