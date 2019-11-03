import React, {Component} from 'react';

import mapbox from 'mapbox-gl';

export default class PlaceItem extends Component {
	goTo = () => {
		const {app} = this.props;
		const {map} = app.state;
		const {longitude, latitude} = this.props.place;

		map.flyTo({
			center: [longitude, latitude],
			zoom: 15
		});
	};

	render() {
		const {name, longitude, latitude} = this.props.place;
		const {app} = this.props;
		const {map} = app.state;

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
			<div className="place-item" onClick={() => this.goTo()}>
				{name}({longitude}, {latitude})
			</div>
		);
	}
}
