// =======================================
// SafeSphere Helper Functions
// =======================================

/**
 * Format a JavaScript Date or Firestore Timestamp.
 */
export function formatDate(value) {
  if (!value) return "";

  let date;

  if (value?.toDate) {
    date = value.toDate(); // Firestore Timestamp
  } else {
    date = new Date(value);
  }

  return date.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

/**
 * Generate a random ID.
 */
export function generateId(length = 10) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let id = "";

  for (let i = 0; i < length; i++) {
    id += chars.charAt(
      Math.floor(Math.random() * chars.length)
    );
  }

  return id;
}

/**
 * Validate email.
 */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Calculate safety level from score.
 */
export function getSafetyLevel(score) {
  if (score >= 90) return "Excellent";
  if (score >= 75) return "Good";
  if (score >= 60) return "Moderate";
  return "Low";
}

/**
 * Open Google Maps directions.
 */
export function openGoogleMaps(origin, destination) {
  const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    origin
  )}&destination=${encodeURIComponent(
    destination
  )}&travelmode=walking`;

  window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * Copy text to clipboard.
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

/**
 * Get user's current location.
 */
export function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported."));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) =>
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }),
      reject,
      {
        enableHighAccuracy: true,
      }
    );
  });
}

/**
 * Truncate long text.
 */
export function truncateText(text, maxLength = 120) {
  if (!text) return "";

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.substring(0, maxLength)}...`;
}

/**
 * Format distance.
 */
export function formatDistance(meters) {
  if (meters < 1000) {
    return `${meters} m`;
  }

  return `${(meters / 1000).toFixed(1)} km`;
}

/**
 * Format duration.
 */
export function formatDuration(seconds) {
  const minutes = Math.floor(seconds / 60);

  if (minutes < 60) {
    return `${minutes} mins`;
  }

  const hours = Math.floor(minutes / 60);
  const remaining = minutes % 60;

  return `${hours} hr ${remaining} min`;
}
