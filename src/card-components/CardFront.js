import React, { Component } from 'react';

export default class CardFront extends Component {

	render() {
		return (
			<div className="card">
				<h3 className="title">Title: {this.props.title}</h3>
				<h5 className="genres">Genre(s): {this.props.genres.join(', ')}</h5>
			</div>
		);
	}
}
