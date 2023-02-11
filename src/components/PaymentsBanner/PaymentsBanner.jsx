import React from 'react';
import "./PaymentsBanner.css";

function PaymentsBanner() {
  return (
    <div className='paymentsContainer'>
      <p className='paymentsTxt'>3 y 6 cuotas sin interés con</p>
      <img className='paymentsImg' src="../img/payments/visa.png" alt="" />
      <img className='paymentsImg' src="../img/payments/master.png" alt="" />
      <img className='paymentsImg' src="../img/payments/cabal.png" alt="" />
    </div>
  )
}

export default PaymentsBanner
