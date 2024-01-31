const ticketsPricing = require('./data/tickets.js');
let ticketType = undefined;
let entrantType = undefined;
let extras = undefined;
let ticketInfo = [];

// const ticketType = document.querySelector('input[name="ticketType"]:checked');
//     const entrantType = document.querySelector('input[name="entrantType"]:checked');
//     const extras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(checkbox => checkbox.value);

function clearForm() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => radio.checked = false);
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
}

document.getElementById('chooseAge').addEventListener('click',function chooseAgeGroup() {
    ticketType = document.querySelector('input[name="ticketType"]:checked');
    const displayDiv = document.getElementById('display');
    displayDiv.innerHTML = '';
    const ageGroupOptions = document.createElement('div');
    ageGroupOptions.innerHTML = `
        Choose Age Group: <br>
        <input type="radio" name="entrantType" id="child" value="child">
        <label for="child">Child</label><br>
        <input type="radio" name="entrantType" id="adult" value="adult">
        <label for="adult">Adult</label><br>
        <input type="radio" name="entrantType" id="senior" value="senior">
        <label for="senior">Senior</label><br><br>
        <button id="chooseExtras">Continue</button><br><br>
    `;
    displayDiv.appendChild(ageGroupOptions);

    document.getElementById('chooseExtras').addEventListener('click', function chooseExtras() {
        entrantType = document.querySelector('input[name="entrantType"]:checked');
        const displayDiv = document.getElementById('display');
        displayDiv.innerHTML = '';
        const extrasOptions = document.createElement('div');
        extrasOptions.innerHTML = `
            Any Extras? <br>
            <input type="checkbox" name="extras" id="movies" value="movies">
            <label for="movies">Movie Access</label><br>
            <input type="checkbox" name="extras" id="education" value="education">
            <label for="education">Education Access</label><br>
            <input type="checkbox" name="extras" id="terrace" value="terrace">
            <label for="terrace">Terrace Access</label><br></br>
            <button id="submitExtras">Continue</button><br><br>
        `;
        displayDiv.appendChild(extrasOptions);

        document.getElementById('submitExtras').addEventListener('click', function chooseFinalStep() {
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
            document.getElementById('getEstimate').addEventListener('click', function showEstimate() {
                const displayDiv = document.getElementById('display');
                displayDiv.innerHTML = '';
                const estimate = document.createElement('div');
                estimate.innerHTML = `<p>Selections: ${JSON.stringify(ticketInfo)}</p>`;
                displayDiv.appendChild(estimate);
            })
            document.getElementById('addPerson').addEventListener('click', function addPerson() {
                resetForm()
            })
        })
    });
})
function resetForm() {
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


                

                
