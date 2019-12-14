import React, { Component } from 'react';
import CardFront from './CardFront.js';

export default class MovieCard extends Component {
	render() {
		return (
			<div className="movie-card">
				<CardFront
					title={this.props.title}
					genres={this.props.genres}
				/>
			</div>
		);
	}
}

MovieCard.defaultProps = {
	title: 'Unknown',
	genres: ['No Genre(s) Found'],
};
