// import ticketsPricing from './data/tickets.js';

let selectionsArray = [];
document.getElementById('addCart').addEventListener('click', function addSelection() {
    const ticketType = document.querySelector('input[name="ticketType"]:checked');
    const entrantType = document.querySelector('input[name="entrantType"]:checked');
    const extras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(checkbox => checkbox.value);
    if (ticketType && entrantType) {
        const selectionObject = {
            ticketType: ticketType.value,
            entrantType: entrantType.value,
            extras: extras
        };
        selectionsArray.push(selectionObject);
        clearForm();
    } else {
        if (!ticketType && !entrantType) {
            alert('Please choose options for both Admission Type and Age Group.');
        } else if (!ticketType) {
            alert('Please make a selection in Admission Type.');
        } else {
            alert('Please make a selection in Age Group.');
        }
    }
});



function clearForm() {
    // Clear radio buttons
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => radio.checked = false);

    // Clear checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
}

document.getElementById('getEstimate').addEventListener('click',function displaySelections() {
    // Display selectionsArray on the webpage
    document.getElementById('displaySelections').textContent = `Selections: ${JSON.stringify(selectionsArray)}`;
})