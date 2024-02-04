//Version with all React functionality

import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import tickets from "./tickets";

const TicketingSystem = () => {
  //userSate Variables
  const [customerId, setCustomerId] = useState(0);
  const [customerName, setCustomerName] = useState('');
  const [ticketType, setTicketType] = useState('');
  const [entrantType, setEntrantType] = useState('');
  const [extras, setExtras] = useState([]);
  const [ticketInfo, setTicketInfo] = useState({});
  const [createEstimate, setCreateEstimate] = useState()
  const [createReceipt, setCreateReceipt] = useState()
  const [currentDisplay, setCurrentDisplay] = useState('admissionDisplay');

  //Helper Functions
  const formatPriceDisplay = num => `$${num}.00`;

  const getAdmissionPrice = (ticketType, age) => {
    return formatPriceDisplay(tickets[ticketType]?.price[age]);
  };

  const getExtraPrice = (entrantType, extra) => {
    return formatPriceDisplay(tickets.extras[extra]?.price[entrantType]);
  };

  const capitalizeFirstLetter = str => str[0].toUpperCase() + str.slice(1);

  const extrasDisplay = extras => {
    return extras.map((extra, idx) => {
      const capitalizedExtra = capitalizeFirstLetter(extra);
      return idx !== extras.length - 1 ? `${capitalizedExtra} Access,` : `${capitalizedExtra} Access`;
    }).join(' ');
  };

  const calculateTotal = ticketInfo => {
    let totalEstimate = 0;
    for (const customerID in ticketInfo) {
      let totalPerPerson = 0;
      const { ticketType, entrantType, extras: selected } = ticketInfo[customerID];
      totalPerPerson += tickets[ticketType].price[entrantType];
      if (selected.length) {
        totalPerPerson += selected.reduce((sum, extra) => {
          sum += tickets.extras[extra].price[entrantType];
          return sum;
        }, 0);
      }
      ticketInfo[customerID].totalPerPerson = totalPerPerson;
      totalEstimate += totalPerPerson;
    }
    return totalEstimate;
  };

  //Logic for displays
  const displayAdmission = (
    <>
      Enter Name: <br />
      <input type="text" name="customerName" value={customerName} onChange={(e) => setCustomerName(e.target.value)}/><br /><br />
      Please choose your Admission Type: <br />
      <input type="radio" name="ticketType" id="general" value="general" checked={ticketType === 'general'} onChange={() => setTicketType('general')} />
      <label htmlFor="general">General</label><br />
      <input type="radio" name="ticketType" id="membership" value="membership" checked={ticketType === 'membership'} onChange={() => setTicketType('membership')} />
      <label htmlFor="membership">Membership</label><br /><br />
      <button onClick={() => handleButtonClick('chooseAge')}>Continue</button><br /><br />
    </>
  );
  
  const selectAgeGroup = () => {
    if(ticketType && customerName){
      setCurrentDisplay('ageGroupDisplay');
    } 
    else{
      alert((!ticketType && !customerName) ? 'Please fill in all required fields.' :
        !ticketType ? 'Please choose an admission type!' :
          'Please type a name.');
    }
  };

  const displayAgeGroup = (
    <>
      Choose Age Group: <br />
      <input type="radio" name="entrantType" id="child" value="child" checked={entrantType === 'child'} onChange={() => setEntrantType('child')}/>
      <label htmlFor="child">Child {getAdmissionPrice(ticketType, 'child')}</label><br />
      <input type="radio" name="entrantType" id="adult" value="adult" checked={entrantType === 'adult'} onChange={() => setEntrantType('adult')}/>
      <label htmlFor="adult">Adult {getAdmissionPrice(ticketType, 'adult')}</label><br />
      <input type="radio" name="entrantType" id="senior" value="senior" checked={entrantType === 'senior'} onChange={() => setEntrantType('senior')}/>
      <label htmlFor="senior">Senior {getAdmissionPrice(ticketType, 'senior')}</label><br /><br />
      <button onClick={() => handleButtonClick('chooseExtras')}>Continue</button><br /><br />
    </>
  );

  
  const selectExtras = () => {
    if(entrantType){
      setCurrentDisplay('extrasDisplay');
    } 
    else{
      alert('Please choose an Age Group.');
    }
  };
  
  const displayExtras = (
    <>
      Any Extras? <br />
      <input type="checkbox" name="extras" id="movie" value="movie" checked={extras.includes('movie')} onChange={(e) => handleCheckboxChange(e, 'movie')}/>
      <label htmlFor="movie">Movie Access {getExtraPrice(entrantType, 'movie')}</label><br />
      <input type="checkbox" name="extras" id="education" value="education" checked={extras.includes('education')} onChange={(e) => handleCheckboxChange(e, 'education')}/>
      <label htmlFor="education">Education Access {getExtraPrice(entrantType, 'education')}</label><br />
      <input type="checkbox" name="extras" id="terrace" value="terrace" checked={extras.includes('terrace')} onChange={(e) => handleCheckboxChange(e, 'terrace')}/>
      <label htmlFor="terrace">Terrace Access {getExtraPrice(entrantType, 'terrace')}</label><br /><br />
      <button onClick={() => handleButtonClick('submitExtras')}>Continue</button><br /><br />
    </>
  );

  const selectNextStep = () => {
    const newTicketInfo = { customerName, ticketType, entrantType, extras };
    setTicketInfo(prevTicketInfo => ({
      ...prevTicketInfo,
      [customerId]: newTicketInfo
    }));
    setCustomerId(prevCustomerID => prevCustomerID + 1);
    setCustomerName('');
    setTicketType('');
    setEntrantType('');
    setExtras([]);
    setCurrentDisplay('chooseNextSteps');
  };

  const displayChoice = (
    <>
      Add Another Person? <br />
      <button onClick={() => setCurrentDisplay('admissionDisplay')}>Add Another Person</button><br /><br />
      Get Final Estimate: <br />
      <button onClick={() => handleButtonClick('getEstimate')}>Get Estimate</button><br /><br />
    </>
  );

  const createEstimateDisplay = () => {
    let customerCheckBox = [];
    let totalEstimate = calculateTotal(ticketInfo);
    for(const customerId in ticketInfo){
      const {customerName, totalPerPerson, extras: selected} = ticketInfo[customerId];
      if(selected.length){
        customerCheckBox.push(<div key={customerId}><input type="checkbox" name="customer" value={customerId} />
          <label htmlFor={customerId}>{customerName}: {formatPriceDisplay(totalPerPerson)} with ({extrasDisplay(selected)})</label><br /></div>);
      }
      else{
        customerCheckBox.push(<div key={customerId}><input type="checkbox" name="customer" value={customerId} />
                    <label htmlFor={customerId}>{customerName}: {formatPriceDisplay(totalPerPerson)}</label><br /></div>);
      }
    }
    customerCheckBox.push(<div key="buttons"><br /><br />Total: {formatPriceDisplay(totalEstimate)}<br /><br />
                          <button onClick={() => handleButtonClick('deleteSelected')}>Remove Selected</button> 
                          <button onClick={() => setCurrentDisplay('admissionDisplay')}>Add Person</button> 
                          <button onClick={() => handleButtonClick('payTicket')}>Pay</button><br /><br /></div>);
    setCreateEstimate(customerCheckBox);
    setCurrentDisplay('estimateDisplay');
  };
  
  const displayEstimate = (
    <>
      {createEstimate}
    </>
  );

  const removeCustomer = () => {
    let customerIds = Array.from(document.querySelectorAll('input[name="customer"]:checked')).map(checkbox => checkbox.value);
    for(const customerId of customerIds){
      delete ticketInfo[customerId]
    }
    createEstimateDisplay();
  };

  const fillPaymentInfo = () => {
      if(calculateTotal(ticketInfo)){
        return setCurrentDisplay('paymentFieldsDisplay');
      }
      else{
        return alert('Cart is empty.');
      }
  };

  const displayPaymentFields = (
    <>
      Total Due: {formatPriceDisplay(calculateTotal(ticketInfo))}<br /><br />
      Enter Card Number (16 digits, no spaces):<br />
      <input type="text" name="cardNumber" maxLength="16" /><br />
      Enter Expiration Date (MM/YYYY):<br />
      <input type="text" name="cardExp" maxLength="7" /><br />
      Enter Security Code (3 digits, no spaces):<br />
      <input type="text" name="cardSC" maxLength="3" /><br /><br />
      <button onClick={() => setCurrentDisplay('estimateDisplay')}>Remove Person/s</button>
      <button onClick={() => setCurrentDisplay('admissionDisplay')}>Add Person</button>
      <button onClick={() => handleButtonClick('paymentInfo')}>Submit Payment</button>
      <br />
      <br />
    </>
  );

  const showReceipt = () => {
    let cardNumber = document.querySelector('input[name="cardNumber"]');
    let cardExp = document.querySelector('input[name="cardExp"]');
    let cardSC = document.querySelector('input[name="cardSC"]');
    if(cardNumber && cardNumber.value && cardExp && cardExp.value && cardSC && cardSC.value){
      const cardNumberFormat = /^\d{16}$/.test(cardNumber.value);
      const cardExpFormat = /^\d{2}\/\d{4}$/.test(cardExp.value);
      const cardSCFormat = /^\d{3}$/.test(cardSC.value);
      if(cardNumberFormat && cardExpFormat && cardSCFormat){
        const dateParts = cardExp.value.split('/');
        const year = parseInt(dateParts[1], 10);
        const month = parseInt(dateParts[0], 10) - 1;
        const inputDate = new Date(year, month);
        const currentDate = new Date();
        if(inputDate > currentDate && month < 12 && year < currentDate.getFullYear() + 9){
          let receipt = [];
          for (const customerId in ticketInfo) {
            const { customerName, extras: selected, totalPerPerson, ticketType } = ticketInfo[customerId];
            if (selected.length) {
              receipt.push(
                <div key="customer">{customerName} {capitalizeFirstLetter(ticketType)} Admission: {formatPriceDisplay(totalPerPerson)} ({extrasDisplay(selected)})<br /></div>
              );
            } else {
              receipt.push(<div key="customer">{customerName} {capitalizeFirstLetter(ticketType)} Admission: {formatPriceDisplay(totalPerPerson)}<br /></div>);
            }
          }
          receipt.unshift(
            <div key="top">Thank you for visiting Pursuit Ticketmaster!<br />
            -------------------------------------------<br /></div>
          );
          receipt.push(
            <div key="bottom">-------------------------------------------<br />
            Total Paid: {formatPriceDisplay(calculateTotal(ticketInfo))}<br />
            -------------------------------------------<br />
            Come Back Soon!
            <br /><br /></div>
          );
          setCreateReceipt(receipt);
          setCurrentDisplay('receiptDisplay');
        }
        else{
          alert(
            !(inputDate > currentDate)
              ? 'Card expired! Please enter a new card.'
              : !(month < 12)
              ? 'Month should be a number between 1 - 12!'
              : 'Year seems too far ahead, is the year correct?'
          );
        }
      }
      else{
          alert(
            !cardNumberFormat
              ? 'Card Number may be missing a number/s or contains invalid characters!'
              : !cardExpFormat
              ? 'Card Expiration Date may be missing a number/s and/or a slash or contains invalid characters!'
              : 'Card Security Code may be missing a number/s or contains invalid characters!'
          );
        }
      }
    else{
      alert(
        !cardNumber.value && !cardExp.value && !cardSC.value
          ? 'Please fill in all required fields.'
          : !cardNumber.value
          ? 'Please enter a card number!'
          : !cardExp.value
          ? 'Please enter an expiration date!'
          : 'Please enter a security code!'
      );
    }
  }

  const displayReceipt = (
    <>
      {createReceipt}
    </>
  )
  
  //Handle changes functions
  const handleCheckboxChange = (e, extra) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setExtras([...extras, extra]);
    } else {
      setExtras(extras.filter((item) => item !== extra));
    }
  };

  const handleButtonClick = (action) => {
    switch (action) {
      case 'chooseAge':
        selectAgeGroup();
        break;
      case 'chooseExtras':
        selectExtras();
        break;
      case 'submitExtras':
        selectNextStep();
        break;
      case 'getEstimate':
        createEstimateDisplay();
        break;
      case 'deleteSelected':
        removeCustomer();
        break;
      case 'payTicket':
        fillPaymentInfo();
        break;
      case 'paymentInfo':
        showReceipt();
        break;
      default:
        break;
    }
  };

  //Resets form at any point;
  const resetForm = () => {
    setCustomerId(0);
    setCustomerName('');
    setTicketType('');
    setEntrantType('');
    setExtras([]);
    setCreateEstimate();
    setCreateReceipt();
    setTicketInfo({});
    setCurrentDisplay('admissionDisplay');
  };

  return (
    <>
      <h1>Welcome to Pursuit TicketMaster!</h1>
      <form name="getOrder" onSubmit={(e) => e.preventDefault()}>
        <div id="options">
          {currentDisplay === 'admissionDisplay' && displayAdmission}
          {currentDisplay === 'ageGroupDisplay' && displayAgeGroup}
          {currentDisplay === 'extrasDisplay' && displayExtras}
          {currentDisplay === 'chooseNextSteps' && displayChoice}
          {currentDisplay === 'estimateDisplay' && displayEstimate}
          {currentDisplay === 'paymentFieldsDisplay' && displayPaymentFields}
          {currentDisplay === 'receiptDisplay' && displayReceipt}
        </div>
        <button id="reset" onClick={resetForm}>Start Over</button>
      </form>
    </>
  )
}

export default TicketingSystem;
const root = ReactDOM.createRoot(document.getElementById('display'));
root.render(<TicketingSystem />);