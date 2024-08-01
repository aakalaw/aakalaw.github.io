import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const NODE_ENV = process.env;
const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;

const Analytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (NODE_ENV === 'production') {
      ReactGA.initialize(GA_MEASUREMENT_ID);
      ReactGA.set({
        page: pathname,
      });
      ReactGA.send({ hitType: 'pageview', pathname });
    }
  }, [pathname]);

  return null;
};

export default Analytics;
