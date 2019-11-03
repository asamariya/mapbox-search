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

		const accessToken =
			'pk.eyJ1IjoiYXNhbWFyaXlhIiwiYSI6ImNqejNoMjVleDAzNDMzYnN2azM3anA5cnYifQ.Z3gBIGRLYkSZo3ZQVWQNMg';

		const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.value}.json?access_token=${accessToken}`;

		fetch(url)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				const places = this.props.app.state.places;
				const firstResult = data.features[0];
				places.push({
					name: this.state.value,
					longitude: firstResult.center[0],
					latitude: firstResult.center[1]
				});

				this.props.app.setState({
					places: places
				});

				this.setState({
					value: ''
				});
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
