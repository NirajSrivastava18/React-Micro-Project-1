import React from 'react';
import './FrontCard.css';
import PropTypes from 'prop-types';

const FrontCard = ({ name, cardNumber, month, year }) => {
  FrontCard.propTypes = {
    name: PropTypes.string,
    cardNumber: PropTypes.string,
    month: PropTypes.number,
    year: PropTypes.number,
  };
  FrontCard.defalutProps = {
    name: 'Jane Appleseed',
    cardNumber: '0000 0000 0000 0000',
    month: '00',
    year: '00',
  };
  return (
    <div className="container">
      <div className="rectangle">
        <div className="card-design">
          <div className="ellipse1"></div>
          <div className="ellipse3"></div>
          <div className="ellipse2"></div>
          <div className="ellipse4"></div>
          <div className="ellipse5"></div>
        </div>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="card-Number">
          <h4> {cardNumber ? <>{cardNumber}</> : <> 0000 0000 0000 0000</>}</h4>
        </div>
        <div className="card-Name">
          {' '}
          {name ? <>{name}</> : <>JANE APPLESEED</>}
        </div>
        <div className="card-validation">
          {month ? <>{month}</> : <>00</>}/{year ? <>{year}</> : <>00</>}
        </div>
      </div>
    </div>
  );
};

export default FrontCard;
