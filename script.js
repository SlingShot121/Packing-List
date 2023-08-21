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
const html5QrcodeScanner = new Html5QrcodeScanner("reader", {
    fps: 10,
    qrbox: { width: 250, height: 250 },
    videoConstraints: { facingMode: { exact: "environment" } },
  });

// Function to toggle the QR code scanner modal
function toggleQRModal() {
    var modal = document.getElementById('qr-modal');
    if (modal.style.display === 'none' || modal.style.display === '') {
        modal.style.display = 'block';
    } else {
        modal.style.display = 'none';
        // Stop scanning when the modal is closed
        html5QrCodeScanner.clear().catch((err) => {
            console.log(err);
        });
    }
}

// Add a click event listener to the "Scan Bay" button to toggle the modal
document.getElementById('scan-bay-button').addEventListener('click', function () {
    toggleQRModal();
    html5QrCodeScanner.render(onScanSuccess, onScanError);
});

// Add a click event listener to the close button to toggle the modal
document.getElementById('close-qr-modal').addEventListener('click', toggleQRModal);
