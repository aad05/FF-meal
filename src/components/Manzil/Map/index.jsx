import React from "react";
import {
  Map,
  Placemark,
  YMaps,
  TypeSelector,
  GeolocationControl,
  FullscreenControl,
  RouteButton,
  SearchControl,
  TrafficControl,
  ZoomControl,
} from "react-yandex-maps";
export const Maps = () => {
  return (
    <div>
      <YMaps>
        <Map
          style={{ width: "100%", height: "100vh" }}
          defaultState={{
            center: [41.114592, 72.077593],
            zoom: 10,
            controls: [],
          }}
        >
          <Placemark geometry={[41.114592, 72.077593]} />
          <Placemark geometry={[41.000085, 71.672579]} />
          <Placemark geometry={[41.002399, 71.226422]} />
          <Placemark geometry={[40.875109, 71.097208]} />
          <Placemark geometry={[41.311158, 69.279737]} />
          <Placemark geometry={[40.783368, 72.350654]} />
          <Placemark geometry={[41.077012, 71.814387]} />
          <Placemark geometry={[41.077012, 71.814385]} />
          <Placemark geometry={[41.077012, 71.81438]} />
          <Placemark geometry={[41.077012, 71.814387]} />
          <Placemark geometry={[41.077012, 71.814367]} />
          <Placemark geometry={[41.077012, 71.814341]} />
          <Placemark geometry={[41.077012, 71.814357]} />
          <Placemark geometry={[41.077012, 71.814487]} />
          <Placemark geometry={[41.077012, 71.824387]} />
          <Placemark geometry={[41.077012, 71.814387]} />
          <Placemark geometry={[41.077012, 71.884387]} />
          <Placemark geometry={[41.077012, 71.804387]} />
          <Placemark geometry={[41.077012, 71.812387]} />
          <Placemark geometry={[41.077012, 71.811387]} />
          <Placemark geometry={[41.101188, 71.778462]} />
          <Placemark geometry={[41.058089, 72.020492]} />
          <Placemark geometry={[40.980046, 71.854018]} />
          <Placemark geometry={[40.915536, 72.118932]} />
          <Placemark geometry={[40.827503, 72.028753]} />
          <Placemark geometry={[40.857618, 72.313988]} />
          <Placemark geometry={[40.781847, 71.963691]} />
          <Placemark geometry={[40.609844, 71.979635]} />
          <Placemark geometry={[40.642371, 72.246802]} />
          <Placemark geometry={[40.554022, 72.240536]} />
          <Placemark geometry={[41.375561, 69.365871]} />
          <Placemark geometry={[41.307122, 69.137265]} />
          <Placemark geometry={[41.226185, 69.372523]} />
          <Placemark geometry={[41.387327, 69.463056]} />
          <Placemark geometry={[41.207763, 69.557022]} />
          <Placemark geometry={[41.306329, 69.76756]} />
          <Placemark geometry={[41.306329, 69.76756]} />
          <Placemark geometry={[41.076112, 69.027608]} />
          <Placemark geometry={[40.898096, 69.351156]} />
          <Placemark geometry={[40.845886, 69.607106]} />
          <Placemark geometry={[41.171611, 70.328959]} />
          <Placemark geometry={[40.950412, 70.769161]} />
          <Placemark geometry={[41.012661, 70.085301]} />
          <TypeSelector options={{ float: "right" }} />
          <GeolocationControl options={{ float: "left" }} />
          <FullscreenControl />
          <RouteButton options={{ float: "right" }} />
          <SearchControl options={{ float: "right" }} />
          <TrafficControl options={{ float: "right" }} />
          <ZoomControl options={{ float: "right" }} />
        </Map>
      </YMaps>
    </div>
  );
};
export default Maps;
