import React from "react";
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGoogleMap from "react-google-map";

const bnCoord = {
  lat: 44.597923,
  lng: 0.873799,
};

class Map extends React.Component {
  render() {
    return (
      <ReactGoogleMapLoader
        params={{
          key: "AIzaSyDiQ-72-0nMq9ZoSNyYMltV8FozPAO3Glk",
        }}
        style={{ height: "100%" }}
        render={(googleMaps) => {
          return (
            googleMaps && (
              <ReactGoogleMap
                googleMaps={googleMaps}
                coordinates={[
                  {
                    title: "Bosc Nègre",
                    position: bnCoord,
                  },
                ]}
                center={bnCoord}
                zoom={8}
              />
            )
          );
        }}
      />
    );
  }
}

export default Map;
