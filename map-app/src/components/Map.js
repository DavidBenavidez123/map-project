import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import './App.css';

class App extends Component {

  state = {
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 33.912470,
      longitude: -118.202310,
      zoom: 13
    }
  };

  render() {
    const token = "pk.eyJ1IjoiZGF2aWRiZW5hdmlkZXoiLCJhIjoiY2p5bHc2OHQ1MGN4ajNnbnRrcTJ0ZGRmNCJ9.Jko64ip87P7mKYiOTECKng"
    return (
      <ReactMapGL
        mapboxApiAccessToken={token}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({ viewport })}
      />
    );
  }

}

export default App;
