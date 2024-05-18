import React, { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const [stations, setStations] = useState([]);
  const mapRef = useRef(null); // Référence au conteneur de la carte

  useEffect(() => {
    // Récupérer les données des stations depuis le composant GetStation
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/coordinates");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStations(data); // Mettre à jour les données des stations
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération des données :",
          error
        );
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Vérifier si la carte est déjà initialisée
    if (!mapRef.current) {
      // Initialiser la carte seulement si elle n'est pas déjà initialisée
      const map = L.map("map").setView([48.8566, 2.3522], 5);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      mapRef.current = map; // Mettre à jour la référence de la carte
    }

    // Effacer les marqueurs existants sur la carte
    mapRef.current.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        mapRef.current.removeLayer(layer);
      }
    });

    // Définir l'icône du marqueur
    const blueMarkerIcon = L.icon({
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });

    // Placer les marqueurs sur la carte pour chaque station
    stations.forEach((station) => {
      L.marker([station.Latitude, station.Longitude], { icon: blueMarkerIcon })
        .addTo(mapRef.current)
        .bindPopup(`<b>ID OMM station:</b> ${station["ID OMM station"]}<br>
                    <b>Latitude:</b> ${station.Latitude}<br>
                    <b>Longitude:</b> ${station.Longitude}`);
    });
  }, [stations]);

  return (
    <Box m="20px">
      <Box height="75vh" id="map" />
    </Box>
  );
};

export default Map;
