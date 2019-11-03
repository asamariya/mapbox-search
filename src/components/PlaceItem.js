import React, {Component} from 'react';

import mapbox from 'mapbox-gl';

export default class PlaceItem extends Component {
	render() {
		const {name, longitude, latitude} = this.props.place;
		const {app} = this.props;
		const {map} = app.state;
		const {place} = this.props;

		if (map) {
			const popup = new mapbox.Popup({
				closeButton: false
			}).setHTML(name);

			const marker = new mapbox.Marker({
				color: '#2727e6'
			})
				.setLngLat([longitude, latitude])
				.addTo(map)
				.setPopup(popup);
		}
		return (
			<div className="place-item">
				{name}({longitude}, {latitude})
			</div>
		);
	}
}
