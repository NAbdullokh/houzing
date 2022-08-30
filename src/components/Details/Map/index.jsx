import React from "react";
import Location from "./Location";
import { Container } from "./style";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const Map = ({ data }) => {
  const containerStyle = {
    width: "100%",
    height: "450px",
  };

  const center = {
    lat: data?.location?.latitude,
    lng: data?.location?.longitude,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4",
  });

  //   const [map, setMap] = React.useState(null);

  //   const onLoad = React.useCallback(function callback(map) {
  //     const bounds = new window.google.maps.LatLngBounds(center);
  //     map.fitBounds(bounds);
  //     setMap(map);
  //   }, []);

  //   const onUnmount = React.useCallback(function callback(map) {
  //     setMap(null);
  //   }, []);
  return isLoaded ? (
    <Container>
      <Location data={data} />
      <>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
            //   onLoad={onLoad}
            //   onUnmount={onUnmount}
          >
            {data?.location?.latitude &&
            data?.location?.longitude &&
            data?.location?.latitude.toString()[2] === "." ? (
              <>
                <Marker position={center} />
                <Marker
                  position={{
                    lat: data?.location?.latitude,
                    lng: data?.location?.longitude,
                  }}
                />
              </>
            ) : (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={{
                  lat: 41.311081,
                  lng: 69.240562,
                }}
                zoom={13}
              />
            )}
            <></>
          </GoogleMap>
        ) : (
          <></>
        )}
      </>
    </Container>
  ) : (
    <></>
  );
};

export default Map;
