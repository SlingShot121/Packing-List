// A function that parses URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// When scan is successful function will produce data
function onScanSuccess(qrCodeMessage) {
    html5QrCodeScanner.clear().then(() => {
        window.location.href = qrCodeMessage + "&ref=" + currentReference;
    }).catch((err) => {
        console.log(err);
    });
}

// When scan is unsuccessful function will produce error message
function onScanError(errorMessage) {
    console.log(errorMessage);
}

// Setting up Qr Scanner properties
var html5QrCodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 }, /* verbose= */ false, /* disableFlip= */ true);

// Usage
window.onload = function () {
    var bay = getUrlParameter('bay');
    var ref = getUrlParameter('ref');
    var selectElement = document.getElementById('bays-id-503891');
    var inputElement = document.getElementById('reference-input');
    var currentReference = "2";

    setSelectedOption(selectElement, bay);
    inputElement.value = referenceValues[ref];

    // Open the camera app when the button is clicked
    document.getElementById('scan-bay').addEventListener('click', function() {
        html5QrCodeScanner.render(onScanSuccess, onScanError);
    });
}
