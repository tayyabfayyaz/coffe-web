// _app.js
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import Font Awesome's CSS globally
config.autoAddCss = false; // Disable automatic addition of CSS to optimize performance

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
