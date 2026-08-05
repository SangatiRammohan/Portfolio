import React from 'react';
import './LoadingSpinner.css';
import portfolioData from '../../data/portfolioData';

/* Loader markup from Uiverse.io by dovatgabriel (three-body), recoloured to
   the portfolio blue and wrapped with the name block. */
const LoadingSpinner = ({
  portfolioName = portfolioData.user?.name || '',
  caption = portfolioData.user?.titles?.[0] || '',
}) => {
  return (
    <div className="spinner-overlay" role="status" aria-live="polite">
      <div className="spinner-container">
        <div className="three-body" aria-hidden="true">
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
        </div>


        <span className="sr-only">Loading portfolio</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;