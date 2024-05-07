/*
* dev: Sazumi Viki
* ig: @moe.sazumiviki
* gh: github.com/sazumivicky
* site: sazumi.moe
*/

const fetch = require('node-fetch');
const FormData = require('form-data');
const fs = require('fs');

async function uploadFile(filePath) {
  const formData = new FormData();
  formData.append('fileInput', fs.createReadStream(filePath));

  try {
    const response = await fetch('https://cdn.sazumi.moe/upload', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      const fileUrl = await response.json(); // Change from response.text() to response.json()
      console.log('Succesfully:', fileUrl);
    } else {
      const errorResponse = await response.json(); // Change from response.statusText to response.json()
      console.error('oops something went wrong:', errorResponse);
    }
  } catch (error) {
    console.error('oops something went wrong:', error.message);
  }
}

module.exports = uploadFile.bind()