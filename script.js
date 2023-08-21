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
    { fps: 10, qrbox: 250, facingMode: { exact: "environment" } }, // "environment" forces the use of the back camera
    /* verbose= */ false,
    /* disableFlip= */ false
);

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

function selectBackFacingCamera() {
    // Get the select element
    var selectElement = document.getElementById('html5-qrcode-select-camera');

    // Enumerate the media devices
    navigator.mediaDevices.enumerateDevices().then(function(devices) {
        var backFacingCameraIndex = -1;

        // Look for a device labeled as back-facing
        devices.forEach(function(device, index) {
            if (device.kind === 'videoinput' && (device.label.toLowerCase().includes('back') || device.label.toLowerCase().includes('rear'))) {
                backFacingCameraIndex = index;
            }
        });

        if (backFacingCameraIndex !== -1) {
            // Select the back-facing camera by index
            selectElement.selectedIndex = backFacingCameraIndex;

            // Optionally, trigger a change event if the library requires it
            var event = new Event('change', { 'bubbles': true });
            selectElement.dispatchEvent(event);
        }
    }).catch(function(err) {
        console.log(err);
    });
}

// Call the function to select the back-facing camera
selectBackFacingCamera();
