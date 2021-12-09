const axios = require('axios');

const config = require('../app/config/default');

const searchByString = (name, pages) => new Promise((resolve, reject) => {
  axios(
    {
      url:'characters',
      params : {
        name,
      },
      baseURL: config.restClient.baseURL
    })
    .then(response => {
      resolve(response);
    }).catch(error => {
      reject(error);
    });
});

module.exports = {
    searchByString,
};