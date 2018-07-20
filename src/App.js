import React, {createRef, Component} from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import './App.css';

class App extends Component {
	state = {
		position: {
			lat: 44.44,
			lng: 26.1,
		},
		markerPositions: [],
		zoom: 13,
	};

	mapRef = createRef();

	handleClick = (event) => {
		this.setState({
			markerPositions: [...this.state.markerPositions, event.latlng],
		});
	};

	render() {
		const {position, zoom, markerPositions} = this.state;
		console.log(markerPositions);

		return (
			<Map center={ position } zoom={ zoom } onClick={ this.handleClick }
			ref={this.mapRef}>
				<TileLayer
					attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{
					markerPositions.map((markerPosition, index) => {
						return (
							<Marker key={index} position={ markerPosition }>
								<Popup>
									<span>Popup text</span>
								</Popup>
							</Marker>
						);
					})
				}
			</Map>
		);
	}
}

export default App;
