'use client';

import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  useEffect(() => {
    let map: any;

    (async () => {
      const L = (await import('leaflet')).default;

      if (
        typeof window !== 'undefined' &&
        !document.getElementById('leaflet-map')?.hasChildNodes()
      ) {
        map = L.map('leaflet-map').setView([40.0725, -105.3469], 14);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
        }).addTo(map);

        try {
          // Use environment variable so the same code works in dev (localhost) and prod
          const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
          const response = await fetch(`${BASE_URL}/entries/`);
          const entries = await response.json();

          entries.forEach((entry: any) => {
            if (entry.lat !== undefined && entry.lng !== undefined) {
              L.marker([entry.lat, entry.lng])
                .addTo(map)
                .bindPopup(
                  `<b>${entry.title || 'Entry'}</b><br />${entry.description || ''}`
                );
            }
          });
        } catch (error) {
          console.error('Failed to load entries:', error);
        }
      }
    })();

    return () => {
      if (map) map.remove();
    };
  }, []);

  return (
    <div id="leaflet-map" className="h-[600px] w-full rounded-lg shadow-md" />
  );
}