import React, {Component} from 'react';

export default class PlaceItem extends Component {
	render() {
		const {name, longitude, latitude} = this.props.place;
		return (
			<div className="place-item">
				{name}({longitude}, {latitude})
			</div>
		);
	}
}
