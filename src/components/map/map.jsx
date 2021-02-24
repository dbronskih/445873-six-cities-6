import React, {useEffect, useRef} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import {propTypesOffer} from "../../prop-types";
import "leaflet/dist/leaflet.css";
import offerCoordinates from "../../helpers/offer-coordinates";

const Map = ({offers, city, activeOfferId}) => {
  const mapRef = useRef();
  const icon = leaflet.icon({
    iconUrl: `/img/pin.svg`,
    iconSize: [20, 30],
  });

  useEffect(() => {
    const cityLocation = offerCoordinates(city.location);

    mapRef.current = leaflet.map(`map`, {
      center: cityLocation,
      zoom: location.zoom,
      zoomControl: true,
      marker: true,
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
      })
      .addTo(mapRef.current);
    mapRef.current.setView(cityLocation, city.location.zoom);

    offers.forEach(({location}) => {
      leaflet
        .marker(offerCoordinates(location), {icon})
        .addTo(mapRef.current);
    });

    return () => {
      mapRef.current.remove();
    };
  }, [offers, city]);

  useEffect(() => {
    const pins = [...mapRef.current.getPane(`markerPane`).children];

    pins.forEach((pin) => {
      pin.src = `./img/pin.svg`;
    });

    if (activeOfferId) {
      const activeIndex = offers.findIndex((offer) => offer.id === activeOfferId);
      pins[activeIndex].src = `./img/pin-active.svg`;
    }
  }, [activeOfferId]);

  return (
    <div id="map" style={{height: `100%`}} ref={mapRef}/>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(propTypesOffer),
  ).isRequired,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  activeOfferId: PropTypes.number,
};

export default Map;
