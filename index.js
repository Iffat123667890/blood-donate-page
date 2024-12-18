

document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const bloodType = document.getElementById('bloodType').value;
    const contact = document.getElementById('contact').value;

    
    if (name === '' || age === '' || bloodType === '' || contact === '') {
        alert('Please fill in all the fields.');
        return;
    }

    
    if (age < 18 || age > 65) {
        alert('You must be between 18 and 65 years old to donate blood.');
        return;
    }

 
    document.getElementById('confirmationMessage').classList.remove('hidden');
    document.getElementById('donationForm').reset();
});