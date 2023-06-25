const fetch = require('node-fetch');

const licenseUrl = 'https://api.github.com/licenses';

async function getLicenses() {
    const response = await fetch(licenseUrl);
    const licenseData = await response.json();
    console.log(licenseData);
}

getLicenses();