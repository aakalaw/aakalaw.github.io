import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const NODE_ENV = process.env;
const GA_TRACKING_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

if (NODE_ENV === 'production') {
  ReactGA.initialize(GA_TRACKING_ID);
}

const Analytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (NODE_ENV === 'production') {
      ReactGA.set({
        page: pathname,
      });
      ReactGA.pageview(pathname);
    }
  }, [pathname]);

  return null;
};

export default Analytics;
