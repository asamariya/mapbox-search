import React, {Component} from 'react';

export default class Toggler extends Component {
	render() {
		const handleStyle = this.props.handleStyle;
		const styles = [
			{name: 'Satellite', url: 'mapbox://styles/mapbox/satellite-v9'},
			{name: 'Light', url: 'mapbox://styles/mapbox/light-v9'},
			{name: 'Dark', url: 'mapbox://styles/mapbox/dark-v9'}
		];

		const buttons = styles.map((style, index) => {
			let className = '';

			if (style.url === this.props.style) {
				className = 'selected';
			}
			return (
				<button className={className} key={index} onClick={() => handleStyle(style.url)}>
					{style.name}
				</button>
			);
		});

		return <div className="toggler">{buttons}</div>;
	}
}
