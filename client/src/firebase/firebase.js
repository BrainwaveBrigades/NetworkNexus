// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAW2MqkC2ct4zuh9ESOw0o6cadHRvq-npA",
  authDomain: "networknexus-f183e.firebaseapp.com",
  projectId: "networknexus-f183e",
  storageBucket: "networknexus-f183e.firebasestorage.app",
  messagingSenderId: "658935964244",
  appId: "1:658935964244:web:d84c1aab209fcc655c03c1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
