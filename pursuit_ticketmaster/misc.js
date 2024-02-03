// // // import tickets from "./tickets";
// // import './index.css'

// // //HelperFunctions
// // const addZeros = num => `$${num}.00`;

// // const getAdmissionPrice = (ticketType, age) => {
// //   return addZeros(tickets[ticketType].price[age]);
// // }

// // const getExtraPrice = (entrantType, extra) => {
// //   return addZeros(tickets.extras[extra].price[entrantType]);
// // }

// // const capitalizeFirstLetter = str => str[0].toUpperCase() + str.slice(1);

// // const extrasDisplay = extras => {
// //   return extras.map((extra, idx) => {
// //       const capitalizedExtra = capitalizeFirstLetter(extra);
// //       return idx !== extras.length - 1 ? `${capitalizedExtra} Access,` : `${capitalizedExtra} Access`;
// //   }).join(' ');
// // }

// // const calculateTotal = (ticketInfo) => {
// //   let totalEstimate = 0;
// //   for(const customerID in ticketInfo){
// //     let totalPerPerson = 0;
// //     const {ticketType, entrantType, extras: selected} = ticketInfo[customerID];
// //     totalPerPerson += tickets[ticketType].price[entrantType];
// //     if(selected.length){
// //       totalPerPerson += selected.reduce((sum, extra) => {
// //         sum += tickets.extras[extra].price[entrantType];
// //         return sum;
// //       },0);
// //     }
// //     ticketInfo[customerID].totalPerPerson = totalPerPerson;
// //     totalEstimate += totalPerPerson;
// //   }
// //   totalCharge = totalEstimate;
// //   return totalEstimate;
// // }

// // //To Create Customer Object
// // let customerID = 0;
// // let personName = undefined;
// // let ticketType = undefined;
// // let entrantType = undefined;
// // let extras = undefined;
// // let ticketInfo = {};

// // //To Create Receipt
// // let totalCharge = 0;

// // //addEventListener Functions
// // const selectAdmission = () => {
// //   const displayDiv = document.getElementById('display');
// //   displayDiv.innerHTML = '';
// //   const admissionOptions = document.createElement('div');
// //   admissionOptions.innerHTML = `
// //       Enter Name: <br>
// //       <input type="text" name="personName"><br><br>
// //       Please choose your Admission Type: <br>
// //       <input type="radio" name="ticketType" id="general" value="general">
// //       <label for="general">General</label><br>
// //       <input type="radio" name="ticketType" id="membership" value="membership">
// //       <label for="membership">Membership</label><br><br>
// //       <button id="chooseAge">Continue</button><br><br>
// //   `;
// //   displayDiv.appendChild(admissionOptions);
// // }

// // const selectAgeGroup = () => {
// //   const ticketTypeInput = document.querySelector('input[name="ticketType"]:checked');
// //   const personNameInput = document.querySelector('input[name="personName"]');
// //   if(ticketTypeInput && ticketTypeInput.value && personNameInput && personNameInput.value){
// //     ticketType = ticketTypeInput.value;
// //     personName = personNameInput.value;
// //     const displayDiv = document.getElementById('display');
// //     displayDiv.innerHTML = '';
// //     const ageGroupOptions = document.createElement('div');
// //     ageGroupOptions.innerHTML = `
// //         Choose Age Group: <br>
// //         <input type="radio" name="entrantType" id="child" value="child">
// //         <label for="child">Child ${getAdmissionPrice(ticketType, 'child')}</label><br>
// //         <input type="radio" name="entrantType" id="adult" value="adult">
// //         <label for="adult">Adult ${getAdmissionPrice(ticketType, 'adult')}</label><br>
// //         <input type="radio" name="entrantType" id="senior" value="senior">
// //         <label for="senior">Senior ${getAdmissionPrice(ticketType, 'senior')}</label><br><br>
// //         <button id="chooseExtras">Continue</button><br><br>
// //     `;
// //     displayDiv.appendChild(ageGroupOptions);
// //   } 
// //   else{
// //     alert((!ticketTypeInput && !personNameInput.value) ? 'Please fill in all required fields.' :
// //           !ticketTypeInput ? 'Please choose an admission type!' : 
// //                               'Please type a name.');
// //   }
// // }

// // const selectExtras = () => {
// //   const entrantTypeInput = document.querySelector('input[name="entrantType"]:checked');
// //   if(entrantTypeInput && entrantTypeInput.value){
// //     entrantType = entrantTypeInput.value;
// //     const displayDiv = document.getElementById('display');
// //     displayDiv.innerHTML = '';
// //     const extrasOptions = document.createElement('div');
// //     extrasOptions.innerHTML = `
// //         Any Extras? <br>
// //         <input type="checkbox" name="extras" id="movie" value="movie">
// //         <label for="movie">Movie Access ${getExtraPrice(entrantType, 'movie')}</label><br>
// //         <input type="checkbox" name="extras" id="education" value="education">
// //         <label for="education">Education Access ${getExtraPrice(entrantType, 'education')}</label><br>
// //         <input type="checkbox" name="extras" id="terrace" value="terrace">
// //         <label for="terrace">Terrace Access ${getExtraPrice(entrantType, 'terrace')}</label><br></br>
// //         <button id="submitExtras">Continue</button><br><br>
// //     `;
// //     displayDiv.appendChild(extrasOptions);
// //   } 
// //   else{
// //     alert('Please choose an Age Group.');
// //   }
// // }

// // const selectNextStep = () => {
// //   extras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(checkbox => checkbox.value);
// //   ticketInfo[customerID] = {personName,ticketType,entrantType,extras};
// //   customerID++;
// //   const displayDiv = document.getElementById('display');
// //   displayDiv.innerHTML = '';
// //   const finalOptions = document.createElement('div');
// //   finalOptions.innerHTML = `
// //       Add Another Person? <br>
// //       <button id="addPerson">Add Another Person</button><br><br>
// //       Get Final Estimate: <br>
// //       <button id="getEstimate">Get Estimate</button><br><br>
// //   `;
// //   displayDiv.appendChild(finalOptions);
// // }

// // const createEstimateDisplay = () => {
// //   let customerCheckbox = [];
// //   let totalEstimate = calculateTotal(ticketInfo);
// //   for(const customerID in ticketInfo){
// //     const {personName, totalPerPerson, extras: selected} = ticketInfo[customerID];
// //     if(selected.length){
// //       customerCheckbox.push(`<input type="checkbox" name="customer" value="${customerID}">
// //       <label for="${customerID}">${personName}: ${addZeros(totalPerPerson)} with (${extrasDisplay(selected)})</label><br>`);
// //     }
// //     else{
// //       customerCheckbox.push(`<input type="checkbox" name="customer" value="${customerID}">
// //       <label for="${customerID}">${personName}: ${addZeros(totalPerPerson)}</label><br>`);
// //     }
// //   }
// //   customerCheckbox.push(`<br>Total: ${addZeros(totalEstimate)}<br>`);
// //   customerCheckbox.push('<br><br><button id="deleteSelected">Remove Selected</button>','<button id="addPerson">Add Another Person</button>','<button id="payTicket">Pay</button><br><br>');
// //   const displayDiv = document.getElementById('display');
// //   displayDiv.innerHTML = '';
// //   const estimate = document.createElement('div');
// //   estimate.innerHTML = `
// //     Cart:<br><br>
// //     ${customerCheckbox.join('\n')}
// //   `;
// //   displayDiv.appendChild(estimate);
// // }

// // const removePerson = () => {
// //   let customerIDs = Array.from(document.querySelectorAll('input[name="customer"]:checked')).map(checkbox => checkbox.value);
// //   for(let customerID of customerIDs){
// //     delete ticketInfo[customerID];
// //   }
// //   const displayDiv = document.getElementById('display');
// //   displayDiv.innerHTML = '';
// //   const estimate = document.createElement('div');
// //   const estimateContent = createEstimateDisplay() || '';
// //   estimate.innerHTML = `
// //     ${estimateContent}
// //   `;
// //   displayDiv.appendChild(estimate);
// // }

// // const fillPaymentInfo = () => {
// //   if(totalCharge){
// //     const displayDiv = document.getElementById('display');
// //     displayDiv.innerHTML = '';
// //     const estimate = document.createElement('div');
// //     estimate.innerHTML = `
// //       Total Due: ${addZeros(totalCharge)}<br><br>
// //       Enter Card Number (16 digit number, no spaces): <br>
// //       <input type="text" name="cardNumber" maxlength="16"><br>
// //       Enter Expiration Date (As follow, MM/YYYY): <br>
// //       <input type="text" name="cardExp" maxlength="7"><br>
// //       Enter Security Code (3 digit number, no spaces): <br>
// //       <input type="text" name="cardSC" maxlength="3"><br><br>
// //       <button id="deleteSelected">Remove Selected</button>
// //       <button id="addPerson">Add Another Person</button>
// //       <button id="paymentInfo">Submit Payment</button><br><br>
// //     `;
// //     displayDiv.appendChild(estimate);
// //   }
// //   else{
// //     alert('Cart is empty.');
// //   }
// // }

// // const showReceipt = () => {
// //   let cardNumber = document.querySelector('input[name="cardNumber"]');
// //   let cardExp = document.querySelector('input[name="cardExp"]');
// //   let cardSC = document.querySelector('input[name="cardSC"]');
// //   if(cardNumber && cardNumber.value && cardExp && cardExp.value && cardSC && cardSC.value){
// //     const cardNumberFormat = /^\d{16}$/.test(cardNumber.value);
// //     const cardExpFormat = /^\d{2}\/\d{4}$/.test(cardExp.value);
// //     const cardSCFormat = /^\d{3}$/.test(cardSC.value);
// //     if(cardNumberFormat && cardExpFormat && cardSCFormat){
// //       const dateParts = cardExp.value.split('/');
// //       const year = parseInt(dateParts[1], 10);
// //       const month = parseInt(dateParts[0], 10) - 1;
// //       const inputDate = new Date(year, month);
// //       const currentDate = new Date();
// //       if(inputDate > currentDate && month < 12 && year < currentDate.getFullYear() + 9){
// //         let receipt = [];
// //         for(const customerID in ticketInfo){
// //           const {personName, extras: selected, totalPerPerson, ticketType} = ticketInfo[customerID];
// //           if(selected.length){
// //               receipt.push(`${personName} ${capitalizeFirstLetter(ticketType)} Admission: ${addZeros(totalPerPerson)} (${extrasDisplay(selected)})`);
// //           }
// //           else{
// //               receipt.push(`${personName} ${capitalizeFirstLetter(ticketType)} Admission: ${addZeros(totalPerPerson)}`);
// //           }
// //         }
// //         receipt.unshift('Thank you for visiting Pursuit Ticketmaster!', '-------------------------------------------');
// //         receipt.push('-------------------------------------------', `TOTAL PAID: ${addZeros(totalCharge)}`,'-------------------------------------------','Come Back Soon','<br>');
// //         const displayDiv = document.getElementById('display');
// //         displayDiv.innerHTML = '';
// //         const receiptInfo = document.createElement('div');
// //         receiptInfo.innerHTML = `
// //           ${receipt.join('<br>')}
// //         `;
// //         displayDiv.appendChild(receiptInfo);
// //       }
// //       else{
// //         alert(!(inputDate > currentDate) ? 'Card expired! Please enter new card.' : 
// //               !(month < 12) ? 'Month should be a number between 1 - 12!' : 
// //                               'Year seems too far ahead, is the year right?');
// //       }
// //     }
// //     else{
// //       alert((!cardNumberFormat && !cardExpFormat && !cardSCFormat) ? 'PLease make sure all fields are formatted correctly!' : 
// //               !cardNumberFormat ? 'Card Number may be missing a number/s, or contains invalid characters!' : 
// //               !cardExpFormat ? 'Card Expiration Date may be missing a number/s and/ or a slash, or contains invalid characters!' : 
// //                                 'Card Security Code may be missing a number/s, or contains invalid characters!');
// //     }
// //   }
// //   else{
// //     alert((!cardNumber.value && !cardExp.value && !cardSC.value) ? 'Please fill in all required fields.' :
// //             !cardNumber.value ? 'Please enter a card number!' :
// //             !cardExp.value ? 'Please enter an expiration date!' :
// //                                 'Please enter a security code!');
// //   }
// // }

// // document.getElementById('display').addEventListener('click', function (event) {
// //   const targetId = event.target.id;
// //   if(targetId === 'chooseAge'){
// //       selectAgeGroup();
// //   }
// //   else if(targetId === 'chooseExtras'){
// //       selectExtras();
// //   } 
// //   else if(targetId === 'submitExtras'){
// //       selectNextStep();
// //   } 
// //   else if(targetId === 'getEstimate'){
// //       createEstimateDisplay();
// //   } 
// //   else if(targetId === 'addPerson'){
// //       selectAdmission();
// //   } 
// //   else if(targetId === 'deleteSelected'){
// //       removePerson();
// //   } 
// //   else if(targetId === 'payTicket'){
// //       fillPaymentInfo();
// //   }
// //   else if(targetId === 'paymentInfo'){
// //       showReceipt();
// //   }
// // });


// // //To Reset Form
// // const resetForm = () => {
// //   customerID = 0;
// //   personName = undefined;
// //   ticketType = undefined;
// //   entrantType = undefined;
// //   extras = undefined;
// //   totalCharge = 0;
// //   ticketInfo = {};
// //   const displayDiv = document.getElementById('display');
// //   displayDiv.innerHTML = '';
// //   const original = document.createElement('div');
// //   original.innerHTML = `
// //       Enter Name: <br>
// //       <input type="text" name="personName"><br><br>
// //       Please choose your Admission Type: <br>
// //       <input type="radio" name="ticketType" id="general" value="general">
// //       <label for="general">General</label><br>
// //       <input type="radio" name="ticketType" id="membership" value="membership">
// //       <label for="membership">Membership</label><br><br>
// //       <button id="chooseAge">Continue</button><br><br>
// //   `;
// //   displayDiv.appendChild(original);
// // }
// // document.getElementById('reset').addEventListener('click', function startOver() {
// //     resetForm()
// // });


// // 

// import React, { useState } from 'react';
// import './index.css'; // Assuming you have a CSS file for styling
// import tickets from "./tickets";

// const TicketingSystem = () => {
//   const [customerID, setCustomerID] = useState(0);
//   const [personName, setPersonName] = useState('');
//   const [ticketType, setTicketType] = useState('');
//   const [entrantType, setEntrantType] = useState('');
//   const [extras, setExtras] = useState([]);
//   const [ticketInfo, setTicketInfo] = useState({});
//   const [totalCharge, setTotalCharge] = useState(0);
//   const [currentStep, setCurrentStep] = useState('admission');
//   const [ageGroupOptionsVisible, setAgeGroupOptionsVisible] = useState(false);
//   const [extrasOptionsVisible, setExtrasOptionsVisible] = useState(false);

//   const addZeros = (num) => `$${num}.00`;

//   const getAdmissionPrice = (ticketType, age) => {
//     return addZeros(tickets[ticketType].price[age]);
//   };

//   const getExtraPrice = (entrantType, extra) => {
//     return addZeros(tickets.extras[extra].price[entrantType]);
//   };

//   const capitalizeFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

//   const extrasDisplay = (extras) => {
//     return extras.map((extra, idx) => {
//       const capitalizedExtra = capitalizeFirstLetter(extra);
//       return idx !== extras.length - 1 ? `${capitalizedExtra} Access,` : `${capitalizedExtra} Access`;
//     }).join(' ');
//   };

//   const calculateTotal = (ticketInfo) => {
//     let totalEstimate = 0;
//     for (const customerID in ticketInfo) {
//       let totalPerPerson = 0;
//       const { ticketType, entrantType, extras: selected } = ticketInfo[customerID];
//       totalPerPerson += tickets[ticketType].price[entrantType];
//       if (selected.length) {
//         totalPerPerson += selected.reduce((sum, extra) => {
//           sum += tickets.extras[extra].price[entrantType];
//           return sum;
//         }, 0);
//       }
//       ticketInfo[customerID].totalPerPerson = totalPerPerson;
//       totalEstimate += totalPerPerson;
//     }
//     setTotalCharge(totalEstimate);
//     return totalEstimate;
//   };

//   const resetForm = () => {
//     setCustomerID(0);
//     setPersonName('');
//     setTicketType('');
//     setEntrantType('');
//     setExtras([]);
//     setTotalCharge(0);
//     setTicketInfo({});
//     setCurrentStep('admission');
//     setAgeGroupOptionsVisible(false);
//     setExtrasOptionsVisible(false)
//   };

//   const admissionOptions = (
//     <>
//       Enter Name: <br />
//       <input type="text" name="personName" /><br /><br />
//       Please choose your Admission Type: <br />
//       <input type="radio" name="ticketType" id="general" value="general" checked={ticketType === 'general'} onChange={() => setTicketType('general')} />
//       <label htmlFor="general">General</label><br />
//       <input type="radio" name="ticketType" id="membership" value="membership" checked={ticketType === 'membership'} onChange={() => setTicketType('membership')} />
//       <label htmlFor="membership">Membership</label><br /><br />
//       <button id="">Continue</button><br /><br />
//     </>
//   );
//   const selectAdmission = () => {
//     setCurrentStep('admission');
//   };

//   const entrantTypeOptions = (
//     <>
//       Choose Age Group: <br />
//       <input type="radio" name="entrantType" id="child" value="child" />
//       <label htmlFor="child">Child {getAdmissionPrice(ticketType, 'child')}</label><br />
//       <input type="radio" name="entrantType" id="adult" value="adult" />
//       <label htmlFor="adult">Adult {getAdmissionPrice(ticketType, 'adult')}</label><br />
//       <input type="radio" name="entrantType" id="senior" value="senior" />
//       <label htmlFor="senior">Senior {getAdmissionPrice(ticketType, 'senior')}</label><br /><br />
//       <button onClick={() => setExtrasOptionsVisible(true)}>Continue</button><br /><br />
//     </>
//   );
//   const selectAgeGroup = () => {
//     if (ticketType && personName) {
//       setAgeGroupOptionsVisible(true);
//     } else {
//       alert((!ticketType && !personName) ? 'Please fill in all required fields.' :
//         !ticketType ? 'Please choose an admission type!' :
//           'Please type a name.');
//     }
//   };

//   const extrasOptions = (
//     <>
//       Any Extras? <br />
//       <input type="checkbox" name="extras" id="movie" value="movie" />
//       <label htmlFor="movie">Movie Access {getExtraPrice(entrantType, 'movie')}</label><br />
//       <input type="checkbox" name="extras" id="education" value="education" />
//       <label htmlFor="education">Education Access {getExtraPrice(entrantType, 'education')}</label><br />
//       <input type="checkbox" name="extras" id="terrace" value="terrace" />
//       <label htmlFor="terrace">Terrace Access {getExtraPrice(entrantType, 'terrace')}</label><br /><br />
//       <button onClick={() => selectNextStep('submitExtras')}>Continue</button><br /><br />
//     </>
//   );
//   const selectExtras = () => {
//     const entrantTypeInput = document.querySelector('input[name="entrantType"]:checked');
//     if (entrantTypeInput && entrantTypeInput.value) {
//       setEntrantType(entrantTypeInput.value);
//       setExtrasOptionsVisible(true);
//     } else {
//       alert('Please choose an Age Group.');
//     }
//   };

//   const finalOptions = (
//     <>
//       Add Another Person? <br />
//       <button id="addPerson" onClick={() => setCurrentStep('admission')}>Add Another Person</button><br /><br />
//       Get Final Estimate: <br />
//       <button id="getEstimate" onClick={createEstimateDisplay}>Get Estimate</button><br /><br />
//     </>
//   );
//   const selectNextStep = () => {
//     const selectedExtras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(checkbox => checkbox.value);
//     const newTicketInfo = { personName, ticketType, entrantType, extras: selectedExtras };
    
//     setTicketInfo(prevTicketInfo => ({
//       ...prevTicketInfo,
//       [customerID]: newTicketInfo
//     }));

//     setCustomerID(prevCustomerID => prevCustomerID + 1);

//     // Reset form state
//     setPersonName('');
//     setTicketType('');
//     setEntrantType('');
//     setExtras([]);

//     // Move to the next step
//     setCurrentStep('submitExtras');
//   };

//   const estimateField = (
//     <>
//       Add Another Person? <br />
//       <button id="addPerson" onClick={() => setCurrentStep('admission')}>
//         Add Another Person
//       </button>
//       <br />
//       <br />
//       Get Final Estimate: <br />
//       <button id="getEstimate" onClick={createEstimateDisplay}>
//         Get Estimate
//       </button>
//       <br />
//       <br />
//     </>
//   );
//   const createEstimateDisplay = () => {
//     let customerCheckbox = [];
//     let totalEstimate = calculateTotal(ticketInfo);

//     for (const customerID in ticketInfo) {
//       const { personName, totalPerPerson, extras: selected } = ticketInfo[customerID];
//       if (selected.length) {
//         customerCheckbox.push(
//           <div key={customerID}>
//             <input type="checkbox" name="customer" value={customerID} />
//             <label htmlFor={customerID}>
//               {personName}: {addZeros(totalPerPerson)} with ({extrasDisplay(selected)})
//             </label>
//           </div>
//         );
//       } else {
//         customerCheckbox.push(
//           <div key={customerID}>
//             <input type="checkbox" name="customer" value={customerID} />
//             <label htmlFor={customerID}>{personName}: {addZeros(totalPerPerson)}</label>
//           </div>
//         );
//       }
//     }

//     customerCheckbox.push(<div key="total">Total: {addZeros(totalEstimate)}</div>);
//     customerCheckbox.push(
//       <div key="buttons">
//         <button id="deleteSelected">Remove Selected</button>
//         <button id="addPerson">Add Another Person</button>
//         <button id="payTicket">Pay</button>
//       </div>
//     );

//     // Update state to trigger a re-render with new content
//     return (
//       <div>
//         <p>Cart:</p>
//         {customerCheckbox}
//       </div>
//     );
//   };

//   const removeList = (
//     <>
//       <button id="deleteSelected" onClick={removePerson}>
//         Remove Selected
//       </button>
//       <button id="addPerson" onClick={() => setCurrentStep('admission')}>
//         Add Another Person
//       </button>
//       <button id="payTicket">Pay</button>
//       <br />
//       <br />
//     </>
//   );
//   const removePerson = () => {
//     let customerIDs = Array.from(document.querySelectorAll('input[name="customer"]:checked')).map(
//       (checkbox) => checkbox.value
//     );

//     // Update state to trigger a re-render with new content
//     setTicketInfo((prevTicketInfo) => {
//       const newTicketInfo = { ...prevTicketInfo };

//       for (let customerID of customerIDs) {
//         delete newTicketInfo[customerID];
//       }

//       return newTicketInfo;
//     });
//   };

//   const paymentField = (
//     <>
//       Total Due: ${addZeros(totalCharge)}<br />
//       <br />
//       Enter Card Number (16 digit number, no spaces): <br />
//       <input type="text" name="cardNumber" maxLength="16" /><br />
//       Enter Expiration Date (As follow, MM/YYYY): <br />
//       <input type="text" name="cardExp" maxLength="7" /><br />
//       Enter Security Code (3 digit number, no spaces): <br />
//       <input type="text" name="cardSC" maxLength="3" /><br />
//       <br />
//       <button id="deleteSelected">Remove Selected</button>
//       <button id="addPerson" onClick={() => setCurrentStep('admission')}>
//         Add Another Person
//       </button>
//       <button id="paymentInfo" onClick={submitPayment}>
//         Submit Payment
//       </button>
//       <br />
//       <br />
//     </>
//   );
//   const fillPaymentInfo = () => {
//     if (totalCharge) {
//       // Update state to trigger a re-render with new content
//       setCurrentStep('paymentInfo');
//     } else {
//       alert('Cart is empty.');
//     }
//   };

//   const receiptDisplay = showReceipt();
//   const showReceipt = () => {
//     let cardNumber = document.querySelector('input[name="cardNumber"]');
//     let cardExp = document.querySelector('input[name="cardExp"]');
//     let cardSC = document.querySelector('input[name="cardSC"]');

//     if (cardNumber && cardNumber.value && cardExp && cardExp.value && cardSC && cardSC.value) {
//       const cardNumberFormat = /^\d{16}$/.test(cardNumber.value);
//       const cardExpFormat = /^\d{2}\/\d{4}$/.test(cardExp.value);
//       const cardSCFormat = /^\d{3}$/.test(cardSC.value);

//       if (cardNumberFormat && cardExpFormat && cardSCFormat) {
//         const dateParts = cardExp.value.split('/');
//         const year = parseInt(dateParts[1], 10);
//         const month = parseInt(dateParts[0], 10) - 1;
//         const inputDate = new Date(year, month);
//         const currentDate = new Date();

//         if (inputDate > currentDate && month < 12 && year < currentDate.getFullYear() + 9) {
//           let receipt = [];
//           for (const customerID in ticketInfo) {
//             const { personName, extras: selected, totalPerPerson, ticketType } = ticketInfo[customerID];
//             if (selected.length) {
//               receipt.push(
//                 `${personName} ${capitalizeFirstLetter(ticketType)} Admission: ${addZeros(totalPerPerson)} (${extrasDisplay(selected)})`
//               );
//             } else {
//               receipt.push(`${personName} ${capitalizeFirstLetter(ticketType)} Admission: ${addZeros(totalPerPerson)}`);
//             }
//           }

//           receipt.unshift('Thank you for visiting Pursuit Ticketmaster!', '-------------------------------------------');
//           receipt.push(
//             '-------------------------------------------',
//             `TOTAL PAID: ${addZeros(totalCharge)}`,
//             '-------------------------------------------',
//             'Come Back Soon',
//             '<br>'
//           );

//           // Update state to trigger a re-render with new content
//           setCurrentStep('receipt');

//           // Display receipt in JSX
//           const receiptInfo = (
//             <div>
//               {receipt.map((line, index) => (
//                 <p key={index}>{line}</p>
//               ))}
//             </div>
//           );

//           return receiptInfo;
//         } else {
//           alert(
//             !(inputDate > currentDate) ? 'Card expired! Please enter a new card.' : !(month < 12) ? 'Month should be a number between 1 - 12!' : 'Year seems too far ahead, is the year correct?'
//           );
//         }
//       } else {
//         alert(
//           !cardNumberFormat
//             ? 'Card Number may be missing a number/s or contains invalid characters!'
//             : !cardExpFormat
//             ? 'Card Expiration Date may be missing a number/s and/or a slash or contains invalid characters!'
//             : 'Card Security Code may be missing a number/s or contains invalid characters!'
//         );
//       }
//     } else {
//       alert(
//         !cardNumber.value && !cardExp.value && !cardSC.value
//           ? 'Please fill in all required fields.'
//           : !cardNumber.value
//           ? 'Please enter a card number!'
//           : !cardExp.value
//           ? 'Please enter an expiration date!'
//           : 'Please enter a security code!'
//       );
//     }
//   };


//   const handleButtonClick = (action) => {
//     // Define a function to handle button clicks
//     switch (action) {
//       case 'chooseAge':
//         selectAgeGroup();
//         break;
//       case 'chooseExtras':
//         selectExtras();
//         break;
//       case 'submitExtras':
//         selectNextStep();
//         break;
//       case 'getEstimate':
//         createEstimateDisplay();
//         break;
//       case 'addPerson':
//         selectAdmission();
//         break;
//       case 'deleteSelected':
//         removePerson();
//         break;
//       case 'payTicket':
//         fillPaymentInfo();
//         break;
//       case 'paymentInfo':
//         showReceipt();
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <>
//       <h1>Welcome to Pursuit TicketMaster!</h1>
//       <form name="getOrder" onSubmit={(e) => e.preventDefault()}>
//         <div id="options">
//           {currentStep === 'admissionType' && admissionOptions}
//           {currentStep === 'ageGroup' && entrantTypeOptions}
//           {currentStep === 'selectExtras' && extrasOptions}
//           {currentStep === 'nextSteps' && finalOptions}
//           {currentStep === 'showEstimate' && estimateField}
//           {currentStep === 'remove' && removeList}
//           {currentStep === 'add' && admissionOptions}
//           {currentStep === 'createReceipt' && receiptDisplay}
//           {currentStep === 'estimateDisplay' && createEstimateDisplay()}
//         </div>
//         <button id="reset" onClick={resetForm}>Start Over</button>
//         <br />
//         <br />
//       </form>
//     </>
//   );
// };

// export default TicketingSystem;


// import React, { useState } from 'react';
// import './index.css'; // Assuming you have a CSS file for styling
// import tickets from './tickets';

// const TicketingSystem = () => {
//   const [customerID, setCustomerID] = useState(0);
//   const [personName, setPersonName] = useState('');
//   const [ticketType, setTicketType] = useState('');
//   const [entrantType, setEntrantType] = useState('');
//   const [extras, setExtras] = useState([]);
//   const [ticketInfo, setTicketInfo] = useState({});
//   const [totalCharge, setTotalCharge] = useState(0);
//   const [currentStep, setCurrentStep] = useState('admissionType');
//   const [ageGroupOptionsVisible, setAgeGroupOptionsVisible] = useState(false);
//   const [extrasOptionsVisible, setExtrasOptionsVisible] = useState(false);

//   const addZeros = (num) => `$${num}.00`;

//   const getAdmissionPrice = (ticketType, age) => {
//     return addZeros(tickets[ticketType].price[age]);
//   };

//   const getExtraPrice = (entrantType, extra) => {
//     return addZeros(tickets.extras[extra].price[entrantType]);
//   };

//   const capitalizeFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

//   const extrasDisplay = (extras) => {
//     return extras
//       .map((extra, idx) => {
//         const capitalizedExtra = capitalizeFirstLetter(extra);
//         return idx !== extras.length - 1 ? `${capitalizedExtra} Access,` : `${capitalizedExtra} Access`;
//       })
//       .join(' ');
//   };

//   const calculateTotal = (ticketInfo) => {
//     let totalEstimate = 0;
//     for (const customerID in ticketInfo) {
//       let totalPerPerson = 0;
//       const { ticketType, entrantType, extras: selected } = ticketInfo[customerID];
//       totalPerPerson += tickets[ticketType].price[entrantType];
//       if (selected.length) {
//         totalPerPerson += selected.reduce((sum, extra) => {
//           sum += tickets.extras[extra].price[entrantType];
//           return sum;
//         }, 0);
//       }
//       ticketInfo[customerID].totalPerPerson = totalPerPerson;
//       totalEstimate += totalPerPerson;
//     }
//     setTotalCharge(totalEstimate);
//     return totalEstimate;
//   };

//   const resetForm = () => {
//     setCustomerID(0);
//     setPersonName('');
//     setTicketType('');
//     setEntrantType('');
//     setExtras([]);
//     setTotalCharge(0);
//     setTicketInfo({});
//     setCurrentStep('admissionType');
//     setAgeGroupOptionsVisible(false);
//     setExtrasOptionsVisible(false);
//   };

//   const admissionOptions = (
//     <>
//       Enter Name: <br />
//       <input
//         type="text"
//         name="personName"
//         value={personName}
//         onChange={(e) => setPersonName(e.target.value)}
//       />
//       <br />
//       <br />
//       Please choose your Admission Type: <br />
//       <input
//         type="radio"
//         name="ticketType"
//         id="general"
//         value="general"
//         checked={ticketType === 'general'}
//         onChange={() => setTicketType('general')}
//       />
//       <label htmlFor="general">General</label>
//       <br />
//       <input
//         type="radio"
//         name="ticketType"
//         id="membership"
//         value="membership"
//         checked={ticketType === 'membership'}
//         onChange={() => setTicketType('membership')}
//       />
//       <label htmlFor="membership">Membership</label>
//       <br />
//       <br />
//       <button onClick={() => handleButtonClick('chooseAge')}>Continue</button>
//       <br />
//       <br />
//     </>
//   );

//   const entrantTypeOptions = (
//     <>
//       Choose Age Group: <br />
//       <input
//         type="radio"
//         name="entrantType"
//         id="child"
//         value="child"
//         checked={entrantType === 'child'}
//         onChange={() => setEntrantType('child')}
//       />
//       <label htmlFor="child">Child {getAdmissionPrice(ticketType, 'child')}</label>
//       <br />
//       <input
//         type="radio"
//         name="entrantType"
//         id="adult"
//         value="adult"
//         checked={entrantType === 'adult'}
//         onChange={() => setEntrantType('adult')}
//       />
//       <label htmlFor="adult">Adult {getAdmissionPrice(ticketType, 'adult')}</label>
//       <br />
//       <input
//         type="radio"
//         name="entrantType"
//         id="senior"
//         value="senior"
//         checked={entrantType === 'senior'}
//         onChange={() => setEntrantType('senior')}
//       />
//       <label htmlFor="senior">Senior {getAdmissionPrice(ticketType, 'senior')}</label>
//       <br />
//       <br />
//       <button onClick={() => handleButtonClick('chooseExtras')}>Continue</button>
//       <br />
//       <br />
//     </>
//   );

//   const extrasOptions = (
//     <>
//       Any Extras? <br />
//       <input
//         type="checkbox"
//         name="extras"
//         id="movie"
//         value="movie"
//         checked={extras.includes('movie')}
//         onChange={(e) => handleCheckboxChange(e, 'movie')}
//       />
//       <label htmlFor="movie">Movie Access {getExtraPrice(entrantType, 'movie')}</label>
//       <br />
//       <input
//         type="checkbox"
//         name="extras"
//         id="education"
//         value="education"
//         checked={extras.includes('education')}
//         onChange={(e) => handleCheckboxChange(e, 'education')}
//       />
//       <label htmlFor="education">Education Access {getExtraPrice(entrantType, 'education')}</label>
//       <br />
//       <input
//         type="checkbox"
//         name="extras"
//         id="terrace"
//         value="terrace"
//         checked={extras.includes('terrace')}
//         onChange={(e) => handleCheckboxChange(e, 'terrace')}
//       />
//       <label htmlFor="terrace">Terrace Access {getExtraPrice(entrantType, 'terrace')}</label>
//       <br />
//       <br />
//       <button onClick={() => handleButtonClick('submitExtras')}>Continue</button>
//       <br />
//       <br />
//     </>
//   );

//   const estimateField = (
//     <>
//       {currentStep === 'nextSteps' && (
//         <>
//           Add Another Person? <br />
//           <button id="addPerson" onClick={() => handleButtonClick('addPerson')}>
//             Add Another Person
//           </button>
//           <br />
//           <br />
//           Get Final Estimate: <br />
//           <button id="getEstimate" onClick={() => handleButtonClick('getEstimate')}>
//             Get Estimate
//           </button>
//           <br />
//           <br />
//         </>
//       )}
//     </>
//   );

//   const createEstimateDisplay = () => {
//     let customerCheckbox = [];
//     let totalEstimate = calculateTotal(ticketInfo);

//     for (const customerID in ticketInfo) {
//       const { personName, totalPerPerson, extras: selected } = ticketInfo[customerID];
//       if (selected.length) {
//         customerCheckbox.push(
//           <div key={customerID}>
//             <input type="checkbox" name="customer" value={customerID} />
//             <label htmlFor={customerID}>
//               {personName}: {addZeros(totalPerPerson)} with ({extrasDisplay(selected)})
//             </label>
//           </div>
//         );
//       } else {
//         customerCheckbox.push(
//           <div key={customerID}>
//             <input type="checkbox" name="customer" value={customerID} />
//             <label htmlFor={customerID}>{personName}: {addZeros(totalPerPerson)}</label>
//           </div>
//         );
//       }
//     }

//     customerCheckbox.push(<div key="total">Total: {addZeros(totalEstimate)}</div>);
//     customerCheckbox.push(
//       <div key="buttons">
//         <button id="deleteSelected" onClick={() => handleButtonClick('deleteSelected')}>
//           Remove Selected
//         </button>
//         <button id="addPerson" onClick={() => handleButtonClick('addPerson')}>
//           Add Another Person
//         </button>
//         <button id="payTicket" onClick={() => handleButtonClick('payTicket')}>
//           Pay
//         </button>
//       </div>
//     );

//     // Display receipt in JSX
//     return <div>{customerCheckbox}</div>;
//   };

//   const removeList = (
//     <>
//       <button id="deleteSelected" onClick={() => handleButtonClick('deleteSelected')}>
//         Remove Selected
//       </button>
//       <button id="addPerson" onClick={() => handleButtonClick('addPerson')}>
//         Add Another Person
//       </button>
//       <button id="payTicket" onClick={() => handleButtonClick('payTicket')}>
//         Pay
//       </button>
//       <br />
//       <br />
//     </>
//   );

//   const paymentField = (
//     <>
//       Total Due: ${addZeros(totalCharge)}<br />
//       <br />
//       Enter Card Number (16 digit number, no spaces): <br />
//       <input
//         type="text"
//         name="cardNumber"
//         maxLength="16"
//         onChange={(e) => handleInputChange(e, 'cardNumber')}
//       />
//       <br />
//       Enter Expiration Date (As follow, MM/YYYY): <br />
//       <input
//         type="text"
//         name="cardExp"
//         maxLength="7"
//         onChange={(e) => handleInputChange(e, 'cardExp')}
//       />
//       <br />
//       Enter Security Code (3 digit number, no spaces): <br />
//       <input
//         type="text"
//         name="cardSC"
//         maxLength="3"
//         onChange={(e) => handleInputChange(e, 'cardSC')}
//       />
//       <br />
//       <br />
//       <button id="deleteSelected" onClick={() => handleButtonClick('deleteSelected')}>
//         Remove Selected
//       </button>
//       <button id="addPerson" onClick={() => handleButtonClick('addPerson')}>
//         Add Another Person
//       </button>
//       <button id="paymentInfo" onClick={() => handleButtonClick('paymentInfo')}>
//         Submit Payment
//       </button>
//       <br />
//       <br />
//     </>
//   );

//   const fillPaymentInfo = () => {
//     if (totalCharge) {
//       // Update state to trigger a re-render with new content
//       setCurrentStep('paymentInfo');
//     } else {
//       alert('Cart is empty.');
//     }
//   };

//   const showReceipt = () => {
//     let cardNumber = document.querySelector('input[name="cardNumber"]');
//     let cardExp = document.querySelector('input[name="cardExp"]');
//     let cardSC = document.querySelector('input[name="cardSC"]');

//     if (cardNumber && cardNumber.value && cardExp && cardExp.value && cardSC && cardSC.value) {
//       const cardNumberFormat = /^\d{16}$/.test(cardNumber.value);
//       const cardExpFormat = /^\d{2}\/\d{4}$/.test(cardExp.value);
//       const cardSCFormat = /^\d{3}$/.test(cardSC.value);

//       if (cardNumberFormat && cardExpFormat && cardSCFormat) {
//         const dateParts = cardExp.value.split('/');
//         const year = parseInt(dateParts[1], 10);
//         const month = parseInt(dateParts[0], 10) - 1;
//         const inputDate = new Date(year, month);
//         const currentDate = new Date();

//         if (inputDate > currentDate && month < 12 && year < currentDate.getFullYear() + 9) {
//           let receipt = [];
//           for (const customerID in ticketInfo) {
//             const { personName, extras: selected, totalPerPerson, ticketType } = ticketInfo[customerID];
//             if (selected.length) {
//               receipt.push(
//                 `${personName} ${capitalizeFirstLetter(ticketType)} Admission: ${addZeros(totalPerPerson)} (${extrasDisplay(selected)})`
//               );
//             } else {
//               receipt.push(`${personName} ${capitalizeFirstLetter(ticketType)} Admission: ${addZeros(totalPerPerson)}`);
//             }
//           }

//           receipt.unshift(
//             'Thank you for visiting Pursuit Ticketmaster!',
//             '-------------------------------------------'
//           );
//           receipt.push(
//             '-------------------------------------------',
//             `TOTAL PAID: ${addZeros(totalCharge)}`,
//             '-------------------------------------------',
//             'Come Back Soon',
//             '<br>'
//           );

//           // Update state to trigger a re-render with new content
//           setCurrentStep('createReceipt');

//           // Display receipt in JSX
//           const receiptInfo = (
//             <div>
//               {receipt.map((line, index) => (
//                 <p key={index}>{line}</p>
//               ))}
//             </div>
//           );

//           return receiptInfo;
//         } else {
//           alert(
//             !(inputDate > currentDate)
//               ? 'Card expired! Please enter a new card.'
//               : !(month < 12)
//               ? 'Month should be a number between 1 - 12!'
//               : 'Year seems too far ahead, is the year correct?'
//           );
//         }
//       } else {
//         alert(
//           !cardNumberFormat
//             ? 'Card Number may be missing a number/s or contains invalid characters!'
//             : !cardExpFormat
//             ? 'Card Expiration Date may be missing a number/s and/or a slash or contains invalid characters!'
//             : 'Card Security Code may be missing a number/s or contains invalid characters!'
//         );
//       }
//     } else {
//       alert(
//         !cardNumber.value && !cardExp.value && !cardSC.value
//           ? 'Please fill in all required fields.'
//           : !cardNumber.value
//           ? 'Please enter a card number!'
//           : !cardExp.value
//           ? 'Please enter an expiration date!'
//           : 'Please enter a security code!'
//       );
//     }
//   };

//   const handleButtonClick = (action) => {
//     // Define a function to handle button clicks
//     switch (action) {
//       case 'chooseAge':
//         setCurrentStep('ageGroup');
//         break;
//       case 'chooseExtras':
//         setCurrentStep('selectExtras');
//         break;
//       case 'submitExtras':
//         setCurrentStep('nextSteps');
//         break;
//       case 'getEstimate':
//         setCurrentStep('estimateDisplay');
//         break;
//       case 'addPerson':
//         setCurrentStep('admissionType');
//         break;
//       case 'deleteSelected':
//         removePerson();
//         break;
//       case 'payTicket':
//         fillPaymentInfo();
//         break;
//       case 'paymentInfo':
//         showReceipt();
//         break;
//       default:
//         break;
//     }
//   };

//   const handleCheckboxChange = (e, extra) => {
//     const isChecked = e.target.checked;
//     if (isChecked) {
//       setExtras([...extras, extra]);
//     } else {
//       setExtras(extras.filter((item) => item !== extra));
//     }
//   };

//   const handleInputChange = (e, field) => {
//     const value = e.target.value;
//     switch (field) {
//       case 'cardNumber':
//         // Handle card number input
//         break;
//       case 'cardExp':
//         // Handle card expiration input
//         break;
//       case 'cardSC':
//         // Handle card security code input
//         break;
//       default:
//         break;
//     }
//   };

//   const removePerson = () => {
//     let customerIDs = Array.from(
//       document.querySelectorAll('input[name="customer"]:checked')
//     ).map((checkbox) => checkbox.value);

//     // Update state to trigger a re-render with new content
//     setTicketInfo((prevTicketInfo) => {
//       const newTicketInfo = { ...prevTicketInfo };

//       for (let customerID of customerIDs) {
//         delete newTicketInfo[customerID];
//       }

//       return newTicketInfo;
//     });
//   };

//   return (
//     <>
//       <h1>Welcome to Pursuit TicketMaster!</h1>
//       <form name="getOrder" onSubmit={(e) => e.preventDefault()}>
//         <div id="options">
//           {currentStep === 'admissionType' && admissionOptions}
//           {currentStep === 'ageGroup' && entrantTypeOptions}
//           {currentStep === 'selectExtras' && extrasOptions}
//           {currentStep === 'nextSteps' && estimateField}
//           {currentStep === 'remove' && removeList}
//           {currentStep === 'paymentInfo' && paymentField}
//           {currentStep === 'createReceipt' && showReceipt()}
//         </div>
//         <button id="reset" onClick={resetForm}>
//           Start Over
//         </button>
//         <br />
//         <br />
//       </form>
//     </>
//   );
// };

// export default TicketingSystem;
