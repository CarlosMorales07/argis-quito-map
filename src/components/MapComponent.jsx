import { useEffect, useRef } from 'react';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';
import Basemap from '@arcgis/core/Basemap';
import '@arcgis/core/assets/esri/themes/light/main.css';

const MapComponent = () => {
    const mapDiv = useRef(null);

    useEffect(() => {
        if (mapDiv.current) {
            // Coordenadas del edificio ESRI Ecuador en Quito
            const esriEcuadorCoords = {
                longitude: -78.47839,
                latitude: -0.18245,
                zoom: 16
            };

            // Crear el mapa con basemap inicial
            const map = new Map({
                basemap: 'streets-vector'
            });

            // Crear la vista del mapa
            const view = new MapView({
                container: mapDiv.current,
                map: map,
                center: [esriEcuadorCoords.longitude, esriEcuadorCoords.latitude],
                zoom: esriEcuadorCoords.zoom
            });

            // Crear basemap alternativo (satélite)
            const satelliteBasemap = Basemap.fromId('satellite');

            // Agregar widget de cambio de basemap
            const basemapToggle = new BasemapToggle({
                view: view,
                nextBasemap: satelliteBasemap
            });

            // Agregar el widget a la vista en la esquina inferior derecha
            view.ui.add(basemapToggle, 'bottom-right');

            // Agregar un marcador en la ubicación de ESRI Ecuador
            view.when(() => {
                const point = {
                    type: 'point',
                    longitude: esriEcuadorCoords.longitude,
                    latitude: esriEcuadorCoords.latitude
                };

                const markerSymbol = {
                    type: 'simple-marker',
                    color: [226, 119, 40],  // Color naranja
                    outline: {
                        color: [255, 255, 255],
                        width: 2
                    },
                    size: 12
                };

                const pointGraphic = {
                    geometry: point,
                    symbol: markerSymbol,
                    popupTemplate: {
                        title: 'ESRI Ecuador',
                        content: 'Ubicación del edificio de ESRI Ecuador en Quito'
                    }
                };

                view.graphics.add(pointGraphic);
            });

            // Cleanup al desmontar el componente
            return () => {
                if (view) {
                    view.destroy();
                }
            };
        }
    }, []);

    return (
        <div
            ref={mapDiv}
            style={{
                height: '100vh',
                width: '100%'
            }}
        />
    );
};

export default MapComponent;