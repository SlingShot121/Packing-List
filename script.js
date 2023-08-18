// When scan is successful, this function will produce data
function onScanSuccess(qrCodeMessage) {
    html5QrCodeScanner.clear().then(() => {
        window.location.href = qrCodeMessage;
    }).catch((err) => {
        console.log(err);
    });
}

// When scan is unsuccessful, this function will produce an error message
function onScanError(errorMessage) {
    console.log(errorMessage);
}

// Setting up QR Scanner properties with preferred facing mode for the back camera
var html5QrCodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: 250, facingMode: "environment" }, // "environment" forces the use of the back camera
    /* verbose= */ false,
    /* disableFlip= */ true
);

// Function to toggle the QR code scanner modal
function toggleQRModal() {
    var modal = document.getElementById('qr-modal');
    modal.style.display = modal.style.display === 'none' || modal.style.display === '' ? 'block' : 'none';
}

// Add a click event listener to the "Scan Bay" button to toggle the modal
document.getElementById('scan-bay-button').addEventListener('click', function () {
    toggleQRModal();
    html5QrCodeScanner.render(onScanSuccess, onScanError);
});
