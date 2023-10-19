// Get the Support this Project button
const supportButton = document.getElementById('supportButton');

// Flutterwave payment link
const flutterwavePaymentLink = 'https://sandbox-flw-web-v3.herokuapp.com/donate/eqgnx7tnphfa';

// Function to handle support button click
function handleSupportButtonClick() {
    // Redirect the user to the Flutterwave payment link
    window.location.href = flutterwavePaymentLink;
}

// Event listener for the Support this Project button click
supportButton.addEventListener('click', handleSupportButtonClick);
