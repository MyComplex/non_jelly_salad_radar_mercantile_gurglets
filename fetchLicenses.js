const fetch = require('node-fetch');

const licenseUrl = 'https://api.github.com/licenses';

// async function getLicenses() {
//     const response = await fetch(licenseUrl);
//     const licenseData = await response.json();
//     console.log(licenseData);
// }

// getLicenses();

async function fetchLicenseObjects() {
    const response = await fetch(licenseUrl);
    const licenseData = await response.json();
    const licenses = licenseData.map(obj => obj.spdx_id);
    console.log(licenses);
}

fetchLicenseObjects();

// const licenseTypes = async function fetchLicenseTypes() {
//     const response = await fetch(licenseUrl);
//     const licenseData = await response.json();
//     const licenses = licenseData.map(obj => obj.spdx_id);
//     // console.log(licenses);
// }

// fetchLicenseTypes();

// const fetchedLicenses = async () => {
//     const response = await fetch(licenseUrl);
//     const licenseData = await response.json();
//     return licenseData.map(obj => obj.spdx_id);
// }

// ;(async () => {
//     const ltags = await fetchedLicenses()
//     console.log(ltags)
// })

// const licenseTags = await fetchedLicenses();
// console.log(licenseTags);
// console.log(licenseTypes);
