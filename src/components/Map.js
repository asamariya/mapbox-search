import React, {Component} from 'react';
import mapbox from 'mapbox-gl';

export default class Map extends Component {
	componentDidMount() {
		const {latitude, longitude, style} = this.props.app.state;

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

		this.props.app.setState({
			map: map
		});
	}
	render() {
		const {style} = this.props.app.state;
		const {map} = this.props.app.state;
		if (map) {
			map.setStyle(style);
		}
		return <div id="map"></div>;
	}
}
