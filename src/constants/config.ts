// export const BASE_API_URL = "https://api-eklinik.ktyudha.site/api/v1";
// export const BASE_API_URL = "http://127.0.0.1:8000/api/v1";

export const VITE_FIREBASE_API_KEY=process.env.VITE_FIREBASE_API_KEY
export const VITE_FIREBASE_AUTH_DOMAIN=process.env.VITE_FIREBASE_AUTH_DOMAIN
export const VITE_FIREBASE_PROJECT_ID=process.env.VITE_FIREBASE_PROJECT_ID
export const VITE_FIREBASE_STORAGE_BUCKET=process.env.VITE_FIREBASE_STORAGE_BUCKET
export const VITE_FIREBASE_MESSAGING_SENDER_ID=process.env.VITE_FIREBASE_MESSAGING_SENDER_ID
export const VITE_FIREBASE_APP_ID = process.env.VITE_FIREBASE_APP_ID
export const VITE_FIREBASE_MEASUREMENT_ID= process.env.VITE_FIREBASE_MEASUREMENT_ID

const config = {
      // BASE_API_URL,
    VITE_FIREBASE_API_KEY,
    VITE_FIREBASE_AUTH_DOMAIN,
    VITE_FIREBASE_PROJECT_ID,
    VITE_FIREBASE_STORAGE_BUCKET,
    VITE_FIREBASE_MESSAGING_SENDER_ID,
  VITE_FIREBASE_APP_ID,
  VITE_FIREBASE_MEASUREMENT_ID
};

export default config;