const axios = require('axios');

const config = require('../config/default');

const searchByString = (query, pages) => new Promise((resolve, reject) => {
  axios({url:'characters',
    baseURL: config.restClient.baseURL})
    .then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
});

module.exports = {
    searchByString,
};