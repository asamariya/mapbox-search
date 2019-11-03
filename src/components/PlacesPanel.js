import React, {Component} from 'react';

import PlaceItem from './PlaceItem';

export default class PlacesPanel extends Component {
	render() {
		const {places} = this.props.app.state;
		let placeItems = <div className="no-results">Nothing added yet</div>;

		if (places.length > 0) {
			placeItems = places.map((place, index) => <PlaceItem place={place} key={index} />);
		}
		return <div className="places">{placeItems}</div>;
	}
}
