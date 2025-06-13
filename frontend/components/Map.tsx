'use client';

import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  useEffect(() => {
    let map: any;

    (async () => {
      // Dynamically import Leaflet to avoid window reference on the server
      const L = (await import('leaflet')).default;

      // Prevent duplicate map initialization
      if (
        typeof window !== 'undefined' &&
        !document.getElementById('leaflet-map')?.hasChildNodes()
      ) {
        map = L.map('leaflet-map').setView([40.0725, -105.3469], 14); // Center on Boulder Heights

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
        }).addTo(map);

        // Example marker
        L.marker([40.0725, -105.3469])
          .addTo(map)
          .bindPopup('<b>Tussock Moth Spraying</b><br />123 Deer Trail')
          .openPopup();
      }
    })();

    // Cleanup on unmount
    return () => {
      if (map) map.remove();
    };
  }, []);

  return (
    <div id="leaflet-map" className="h-[600px] w-full rounded-lg shadow-md" />
  );
}