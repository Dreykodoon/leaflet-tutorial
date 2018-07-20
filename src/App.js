import React, {createRef, Component} from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import './App.css';

class App extends Component {
	state = {
		latlng: {
			lat: 44.44,
			lng: 26.1,
		},
		zoom: 13,
		hasLocation: false,
	};

	mapRef = createRef();

	handleClick = () => {
		this.mapRef.current.leafletElement.locate();
	};

	handleLocationFound = (e) => {
		this.setState({
			hasLocation: true,
			latlng: e.latlng,
		});
	};

	render() {
		const {latlng, zoom} = this.state;

		const marker = this.state.hasLocation ? (
			<Marker position={ this.state.latlng }>
				<Popup>
					<span>You are here</span>
				</Popup>
			</Marker>
		) : null;

		return (
			<Map center={ latlng } zoom={ zoom } onClick={ this.handleClick }
			onLocationFound={ this.handleLocationFound } ref={this.mapRef}>
				<TileLayer
					attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{marker}
			</Map>
		);
	}
}

export default App;
