import React, {Component} from 'react';
import mapbox from 'mapbox-gl';

export default class Map extends Component {
	componentDidMount() {
		const {latitude, longitude, style} = this.props.app;

		mapbox.accessToken =
			'pk.eyJ1IjoiYXNhbWFyaXlhIiwiYSI6ImNqejNoMjVleDAzNDMzYnN2azM3anA5cnYifQ.Z3gBIGRLYkSZo3ZQVWQNMg';

		const map = new mapbox.Map({
			container: 'map',
			style: style,
			center: [longitude, latitude],
			zoom: 12
		});

		const navControl = new mapbox.NavigationControl();
		map.addControl(navControl, 'top-right');
	}
	render() {
		return <div id="map"></div>;
	}
}
