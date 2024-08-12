import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config(); // Load the environment variables

// Export the Vite configuration
export default {
  plugins: [react()],
};