import React, {Component} from 'react';

export default class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
			isLoading: false
		};
	}
	handleChange = e => {
		this.setState({
			value: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();

		const {handlePlaces} = this.props;
		const accessToken =
			'pk.eyJ1IjoiYXNhbWFyaXlhIiwiYSI6ImNqejNoMjVleDAzNDMzYnN2azM3anA5cnYifQ.Z3gBIGRLYkSZo3ZQVWQNMg';

		const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.value}.json?access_token=${accessToken}`;

		const fetchPlace = async () => {
			const {places} = this.props;
			const {value} = this.state;

			try {
				const response = await fetch(url);
				const data = await response.json();

				const firstResult = data.features[0];

				places.push({
					name: value,
					longitude: firstResult.center[0],
					latitude: firstResult.center[1]
				});
				handlePlaces(places);
			} catch (error) {
				console.log(error);
			}
		};

		fetchPlace();

		this.setState({
			value: ''
		});
	};

	render() {
		return (
			<form action="" onSubmit={this.handleSubmit}>
				<input
					value={this.state.value}
					onChange={this.handleChange}
					type="text"
					placeholder="Search for place..."
				/>
			</form>
		);
	}
}
