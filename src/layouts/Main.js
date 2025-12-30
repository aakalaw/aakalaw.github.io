import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const Main = ({ children, excludeSidebar, fullPage, title, description }) => (
  <HelmetProvider>
    <Analytics />
    <ScrollToTop />
    <Helmet
      titleTemplate="%s | Angelo Aaron Kalaw"
      defaultTitle="Angelo Aaron Kalaw"
      defer={false}
    >
      {title && <title>{title}</title>}
      <meta name="description" content={description} />
    </Helmet>

    <div id="wrapper">
      {!fullPage && <Navigation />} {/* Hide navigation on fullPage if needed */}
      <div id="main">{children}</div>

      {/* Render Sidebar only if NOT excluded AND not fullPage */}
      {!excludeSidebar && !fullPage && <SideBar />}
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  excludeSidebar: PropTypes.bool,
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  excludeSidebar: false,
  fullPage: false,
  title: null,
  description: "AAK's personal website.",
};

export default Main;
