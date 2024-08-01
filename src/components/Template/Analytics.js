import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const Analytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

    if (process.env.NODE_ENV === 'production' && GA_MEASUREMENT_ID) {
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
