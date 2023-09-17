import React, { useState } from 'react';
import './Card.css';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = (props) => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [error, setError] = useState(false);

  const notify = () => {
    toast('Card Added Successfully ✅', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.length === 0 ||
      name.length <= 0 ||
      cardNumber.length === 0 ||
      cardNumber.length < 19 ||
      month.length === 0 ||
      month.length < 2 ||
      year.length === 0 ||
      year.length < 2 ||
      cvc.length === 0 ||
      cvc.length < 3
    ) {
      setError(true);
    } else {
      let data = [name, cardNumber, month, year, cvc];
      props.onChange(data);
      notify();
    }
    console.log(name, cardNumber, month, year, cvc);
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="Card-Holder">CARDHOLDER NAME</label>
        <input
          type="text"
          className="name"
          placeholder="e.g. Jane Appleseed"
          value={name.replace(/[^a-zA-Z]/g, '')}
          onChange={(e) => setName(e.target.value)}
        />
        {error && name.length <= 0 ? (
          <label className="error-message">CardHolder Name required</label>
        ) : (
          ''
        )}

        <label className="Card-Number">CARD NUMBER</label>
        <input
          type="text"
          className="Card"
          placeholder="e.g. 1234 5678 9123 0000"
          maxLength={19}
          value={cardNumber
            .replace(/[^0-9]/g, '')
            .replace(/\s/g, '')
            .replace(/(\d{4})/g, '$1 ')
            .trim()}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        {error && cardNumber.length < 19 ? (
          <label className="error-message">Card Number Invaild</label>
        ) : (
          ' '
        )}

        <div className="Card-container">
          <div className="Card-exp">
            <label className="exp-date">EXP. DATE (MM/YY) </label>
            <div className="card-valid">
              <input
                type="tel"
                className="Month"
                placeholder="MM"
                min="1"
                max="12"
                maxLength={2}
                value={month.replace(/[^0-9]/g, '')}
                onChange={(e) => setMonth(e.target.value)}
              />
              <input
                type="tel"
                className="Year"
                placeholder="YY"
                maxLength={2}
                min="23"
                value={year.replace(/[^0-9]/g, '')}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
            {error && year.length < 2 ? (
              <label className="error-message"> Month and Year invaild</label>
            ) : (
              ''
            )}
          </div>
          <div className="Cvc-details">
            <label className="CVC">CVC</label>
            <input
              type="tel"
              className="Cvc-Number"
              placeholder="e.g. 123"
              min="0"
              maxLength={3}
              value={cvc.replace(/[^0-9]/g, '')}
              onChange={(e) => setCvc(e.target.value)}
            />
            {error && cvc.length < 3 ? (
              <label className="error-message">CVC must be numeric</label>
            ) : (
              ''
            )}
          </div>
        </div>
        <button className=" Submit">Confirm</button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Card;
