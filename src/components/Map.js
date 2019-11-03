import React, {Component} from 'react';
import mapbox from 'mapbox-gl';

export default class Map extends Component {
	componentDidMount() {
		mapbox.accessToken =
			'pk.eyJ1IjoiYXNhbWFyaXlhIiwiYSI6ImNqejNoMjVleDAzNDMzYnN2azM3anA5cnYifQ.Z3gBIGRLYkSZo3ZQVWQNMg';

		const map = new mapbox.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [144.988, -37.803],
			zoom: 15
		});

		const navControl = new mapbox.NavigationControl();
		map.addControl(navControl, 'top-right');
	}
	render() {
		return <div id="map"></div>;
	}
}
