import { Fragment, useContext, useEffect, useState } from "react";
import Preloader from "../src/layouts/Preloader";
import "../styles/globals.css";
import { IntlProvider } from 'react-intl';
import AppContext from '../src/context/AppContext';
import AppLocale from '../src/i18n';

function MyApp({ Component, pageProps }) {
  const [preloader, setPreloader] = useState(true);
  const { locale } = useContext(AppContext);
  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 1000);
  }, []);
  return (
    <IntlProvider locale={AppLocale[locale.locale].locale} messages={AppLocale[locale.locale].messages}>
      {preloader && <Preloader />}
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
