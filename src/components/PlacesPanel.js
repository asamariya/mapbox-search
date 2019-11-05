import React from 'react';

import PlaceItem from './PlaceItem';

const PlacesPanel = ({places, map}) => {
	let placeItems = <div className="no-results">Nothing added yet</div>;

	if (places.length > 0) {
		placeItems = places.map((place, index) => <PlaceItem place={place} map={map} key={index} />);
	} else {
	}
	return <div className="places">{placeItems}</div>;
};

export default PlacesPanel;
