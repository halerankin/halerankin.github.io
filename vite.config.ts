import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// User site (halerankin.github.io): base is "/".
// No env var needed; project sites would use base: "/REPO_NAME/".
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), svgr()],
})
