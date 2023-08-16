document.getElementById('camera-menu').addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'none';
});

document.getElementById('go-button').addEventListener('click', function () {
    // Get the user input from the ref-search field
    let userInput = document.getElementById('ref-search').value;
    if (userInput) {
        // Set the user input as the content of the top p tag with id order-ref
        document.getElementById('outbay').querySelector('#outbay-order-ref').textContent = userInput;
    }

    // Continue with the rest of your functionality for the "Go" button
    let outbay2Element = document.getElementById('outbay-2');
    let outbayElement = document.getElementById('outbay');
    if (outbay2Element) outbay2Element.style.display = 'inline-flex';
    if (outbayElement) outbayElement.style.display = 'inline-flex';
});

document.getElementById('add-button').addEventListener('click', function () {
    // Check if any of the bottom content is already displayed
    for (let i = 47; i <= 57; i++) {
        let element = document.querySelector('.div-div-' + i);
        if (element && element.style.display === 'inline-flex') {
            alert('There is already an order in this bay.');
            return; // Exit the function without making changes
        }
    }

    // Get the content from the top p tag with id order-ref
    let orderRefTop = document.getElementById('outbay-order-ref').textContent;

    // Copy the content to the bottom p tags with id order-ref
    let bottomOrderRefs = document.querySelectorAll('.div-div-47 #order-ref, .div-div-57 #order-ref');
    bottomOrderRefs.forEach(function(element) {
        element.textContent = orderRefTop;
    });

    // Continue with the rest of the functionality
    let outbay2Element = document.getElementById('outbay-2');
    let outbayElement = document.getElementById('outbay');
    if (outbay2Element) outbay2Element.style.display = 'none';
    if (outbayElement) outbayElement.style.display = 'none';

    for (let i = 47; i <= 57; i++) {
        let element = document.querySelector('.div-div-' + i);
        if (element) element.style.display = 'inline-flex'; // Show the element
    }
    let bayFooterElement = document.getElementById('bay-footer');
    let bayCapElement = document.getElementById('bay-cap');
    if (bayFooterElement) bayFooterElement.style.display = 'inline-flex'; // Show the bay-footer element
    if (bayCapElement) bayCapElement.style.display = 'inline-flex'; // Show the bay-footer element
});

document.getElementById('remove-button').addEventListener('click', function () {
    for (let i = 47; i <= 57; i++) {
        let element = document.querySelector('.div-div-' + i);
        if (element) element.style.display = 'none';
    }
    let bayFooterElement = document.getElementById('bay-footer');
    let bayCapElement = document.getElementById('bay-cap');
    if (bayFooterElement) bayFooterElement.style.display = 'none';
    if (bayCapElement) bayCapElement.style.display = 'none';
});
