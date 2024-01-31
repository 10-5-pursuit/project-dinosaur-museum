import tickets from "./tickets";
const addZeros = num => `$${num}.00`;
let ticketType = undefined;
let entrantType = undefined;
let extras = undefined;
let ticketInfo = [];

function getAdmissionPrice(ticketType, age){
  return addZeros(tickets[ticketType].price[age])
}

function getExtraPrice(entrantType, extra){
  return addZeros(tickets.extras[extra].price[entrantType])
}

function selectAdmission(){
  const displayDiv = document.getElementById('display');
  displayDiv.innerHTML = '';
  const original = document.createElement('div');
  original.innerHTML = `
      Please choose your Admission Type: <br>
      <input type="radio" name="ticketType" id="general" value="general">
      <label for="general">General</label><br>
      <input type="radio" name="ticketType" id="membership" value="membership">
      <label for="membership">Membership</label><br><br>
      <button id="chooseAge">Continue</button><br><br>
  `;
  displayDiv.appendChild(original);
}

function selectAgeGroup(){
  ticketType = document.querySelector('input[name="ticketType"]:checked');
  const displayDiv = document.getElementById('display');
  displayDiv.innerHTML = '';
  const ageGroupOptions = document.createElement('div');
  ageGroupOptions.innerHTML = `
      Choose Age Group: <br>
      <input type="radio" name="entrantType" id="child" value="child">
      <label for="child">Child ${getAdmissionPrice(ticketType.value, 'child')}</label><br>
      <input type="radio" name="entrantType" id="adult" value="adult">
      <label for="adult">Adult ${getAdmissionPrice(ticketType.value, 'adult')}</label><br>
      <input type="radio" name="entrantType" id="senior" value="senior">
      <label for="senior">Senior ${getAdmissionPrice(ticketType.value, 'senior')}</label><br><br>
      <button id="chooseExtras">Continue</button><br><br>
  `;
  displayDiv.appendChild(ageGroupOptions);
}

function selectExtras(){
  entrantType = document.querySelector('input[name="entrantType"]:checked');
  const displayDiv = document.getElementById('display');
  displayDiv.innerHTML = '';
  const extrasOptions = document.createElement('div');
  extrasOptions.innerHTML = `
      Any Extras? <br>
      <input type="checkbox" name="extras" id="movies" value="movies">
      <label for="movies">Movie Access ${getExtraPrice(entrantType.value, 'movie')}</label><br>
      <input type="checkbox" name="extras" id="education" value="education">
      <label for="education">Education Access ${getExtraPrice(entrantType.value, 'education')}</label><br>
      <input type="checkbox" name="extras" id="terrace" value="terrace">
      <label for="terrace">Terrace Access ${getExtraPrice(entrantType.value, 'terrace')}</label><br></br>
      <button id="submitExtras">Continue</button><br><br>
  `;
  displayDiv.appendChild(extrasOptions);
}

function selectNextStep(){
  extras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(checkbox => checkbox.value);
  ticketInfo.push({ticketType: ticketType.value,entrantType: entrantType.value,extras: extras});
  const displayDiv = document.getElementById('display');
  displayDiv.innerHTML = '';
  const finalOptions = document.createElement('div');
  finalOptions.innerHTML = `
      Add Another Person? <br>
      <button id="addPerson">Add Another Person</button><br><br>
      Get Final Estimate: <br>
      <button id="getEstimate">Get Estimate</button><br><br>
  `;
  displayDiv.appendChild(finalOptions);
}

function calculateEstimate(){
  const displayDiv = document.getElementById('display');
  displayDiv.innerHTML = '';
  const estimate = document.createElement('div');
  estimate.innerHTML = `<p>Selections: ${JSON.stringify(ticketInfo)}</p>`;
  displayDiv.appendChild(estimate);
}

document.getElementById('display').addEventListener('click', function (event) {
  const targetId = event.target.id;
  if (targetId === 'chooseAge') {
      selectAgeGroup();
  } else if (targetId === 'chooseExtras') {
      selectExtras();
  } else if (targetId === 'submitExtras') {
      selectNextStep();
  } else if (targetId === 'getEstimate') {
      calculateEstimate();
  } else if (targetId === 'addPerson') {
      selectAdmission();
  }
});

function resetForm() {
  ticketType = undefined;
  entrantType = undefined;
  extras = undefined;
  ticketInfo = [];
  const displayDiv = document.getElementById('display');
  displayDiv.innerHTML = '';
  const original = document.createElement('div');
  original.innerHTML = `
      Please choose your Admission Type: <br>
      <input type="radio" name="ticketType" id="general" value="general">
      <label for="general">General</label><br>
      <input type="radio" name="ticketType" id="membership" value="membership">
      <label for="membership">Membership</label><br><br>
      <button id="chooseAge">Continue</button><br><br>
  `;
  displayDiv.appendChild(original);
}
document.getElementById('reset').addEventListener('click', function startOver() {
    resetForm()
})

//Need to make independent functions for every addEventListener
//two resets
//one resets everything
//the other one resets just to add another person into list

//Ask Josh about adding ticket data into this file


                

                
