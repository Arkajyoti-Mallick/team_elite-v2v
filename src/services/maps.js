const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

/**
 * Convert an address into latitude & longitude.
 */
export async function geocodeAddress(address) {
  const url =
    `https://maps.googleapis.com/maps/api/geocode/json?` +
    `address=${encodeURIComponent(address)}` +
    `&key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.status !== "OK") {
    throw new Error(data.error_message || "Unable to find location.");
  }

  return data.results[0];
}

/**
 * Convert latitude & longitude into an address.
 */
export async function reverseGeocode(latitude, longitude) {
  const url =
    `https://maps.googleapis.com/maps/api/geocode/json?` +
    `latlng=${latitude},${longitude}` +
    `&key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.status !== "OK") {
    throw new Error(data.error_message || "Unable to determine address.");
  }

  return data.results[0];
}

/**
 * Get the browser's current location.
 */
export function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported."));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => reject(error),
      {
        enableHighAccuracy: true,
        timeout: 10000,
      }
    );
  });
}

/**
 * Build a Google Maps directions URL.
 */
export function buildDirectionsUrl(origin, destination) {
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    origin
  )}&destination=${encodeURIComponent(destination)}&travelmode=walking`;
}

/**
 * Build a Google Maps search URL.
 */
export function buildPlaceSearchUrl(place, latitude, longitude) {
  return `https://www.google.com/maps/search/${encodeURIComponent(
    place
  )}/@${latitude},${longitude},15z`;
}
