import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";

class Map extends React.Component {
  render() {
    const GoogleMapWrapper = styled.div`
      height: 100vh;
      width: 100%;
    `;
    return (
      <GoogleMapWrapper>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDiQ-72-0nMq9ZoSNyYMltV8FozPAO3Glk",
          }}
          defaultCenter={{
            lat: 43.0582954,
            lng: 141.3466919,
          }}
          defaultZoom={15}
        ></GoogleMapReact>
      </GoogleMapWrapper>
    );
  }
}

export default Map;
