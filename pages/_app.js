import Moment from "react-moment";
import "../styles/globals.css";

Moment.globalLocale = "pt";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
