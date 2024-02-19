import { JSDOM } from 'jsdom';
import fetch from 'node-fetch';

// Create a new JSDOM instance
const dom = new JSDOM(`<!DOCTYPE html><body><div id="dealDetails"></div></body></html>`);

// Get the window object
const window = dom.window;

// Get the dealDetails div
const dealDetails = window.document.getElementById('dealDetails');

// Fetch deal details from Pipedrive CRM
fetch('https://api.pipedrive.com/v1/deals/15?api_token=284e56f49580dd3b28c061077e15d3c3e7e93fa2')
    .then(response => response.json())
    .then(data => {
        // Display deal details in the custom panel
        dealDetails.innerHTML = JSON.stringify(data, null, 2);
        console.log(dealDetails.innerHTML);
    })
    .catch(error => console.error('Error:', error));
