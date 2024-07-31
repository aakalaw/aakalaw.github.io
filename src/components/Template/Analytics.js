import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const { NODE_ENV, REACT_APP_GA_MEASUREMENT_ID } = process.env;

const Analytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (NODE_ENV === 'production') {
      if (!REACT_APP_GA_MEASUREMENT_ID) {
        console.error('Error: GA_MEASUREMENT_ID is not defined');
        return;
      }
      
      ReactGA.initialize(REACT_APP_GA_MEASUREMENT_ID);
      ReactGA.set({ page: pathname });
      ReactGA.send({ hitType: 'pageview', pathname });
    }
  }, [pathname]);

  return null;
};

export default Analytics;
