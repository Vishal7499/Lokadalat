import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Ensure this imports the Tailwind CSS.
import App from './App.jsx'; // Your main app component

// Render the App component inside the root element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
