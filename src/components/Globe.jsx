"use client";
import React, { useEffect, useState, useRef } from "react";
import Globe from "react-globe.gl";
import useScreenSize from "../../utils/screenSize";

const COUNTRIES_DATA = [
  {
    city: "New Delhi",
    latitude: 28.6139,
    longitude: 77.2088, // India
  },
  {
    city: "Mumbai",
    latitude: 19.076,
    longitude: 72.8777, // India
  },
  {
    city: "Tokyo",
    latitude: 35.6895,
    longitude: 139.6917, // Japan
  },
  {
    city: "Kyoto",
    latitude: 35.0117,
    longitude: 135.7683, // Japan
  },
  {
    city: "Shanghai",
    latitude: 31.2304,
    longitude: 121.4737, // China
  },
  {
    city: "Beijing",
    latitude: 39.9042,
    longitude: 116.4074, // China
  },
  {
    city: "Jakarta",
    latitude: -6.1774,
    longitude: 106.8283, // Indonesia
  },
  {
    city: "Cebu City",
    latitude: 10.315,
    longitude: 123.8969, // Philippines
  },
];

export default function CustomGlobe() {
  const globeEl = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES_DATA[0]);
  const screenSize = useScreenSize();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % COUNTRIES_DATA.length;
        setSelectedCountry(COUNTRIES_DATA[newIndex]);
        return newIndex;
      });
    }, 3000); // Every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const initializeGlobe = () => {
      if (globeEl.current) {
        const controls = globeEl.current.controls();
        if (controls) {
          controls.enableZoom = false;
        }

        const MAP_CENTER = {
          lat: 10,
          lng: 20,
          altitude: screenSize === "small" ? 4.5 : 1.7,
        };
        globeEl.current.pointOfView(MAP_CENTER, 700);
      } else {
        setTimeout(initializeGlobe, 100); // Retry initialization after 100ms
      }
    };

    initializeGlobe();
  }, []);

  useEffect(() => {
    const countryLocation = {
      lat: selectedCountry.latitude,
      lng: selectedCountry.longitude,
      altitude: screenSize === "small" ? 4.5 : 1.7,
    };

    if (globeEl.current) {
      globeEl.current.pointOfView(countryLocation, 700);
    }
  }, [selectedCountry]);

  return (
    <Globe
      ref={globeEl}
      backgroundColor="#fff0"
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      labelsData={[selectedCountry]}
      labelLat={(d) => d.latitude}
      labelLng={(d) => d.longitude}
      labelText={(d) => d.city}
      labelSize={1.4} // Increased multiplier
      labelDotRadius={0.7} // Increased multiplier
      labelColor={() => "rgba(255, 165, 0, 0.75)"}
      labelResolution={2}
    />
  );
}
