import React from 'react';
import './BackCard.css';
import PropTypes from 'prop-types';

const BackCard = ({ cvc }) => {
  BackCard.propTypes = {
    cvc: PropTypes.number,
  };
  return (
    <div className="container">
      <div className="reactangle2">
        <div className="card-strip"></div>
        <div className="cvc-card-number ">
          <h2>{cvc ? <>{cvc}</> : <>000</>}</h2>
        </div>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        <div className="line4"></div>
        <div className="line5"></div>
        <div className="line6"></div>
        <div className="line7"></div>
        <div className="line8"></div>
        <div className="line9"></div>
        <div className="line10"></div>
        <div className="line11"></div>
        <div className="line12"></div>
      </div>
    </div>
  );
};

export default BackCard;
