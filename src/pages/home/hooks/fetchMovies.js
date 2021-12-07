const { searchByString } = require('./../../../services/movies');

const fetchMovies = ({ query }) => searchByString(query)
.then(response => (response))
.catch(error => {
  throw error;
});

module.exports = {
    fetchMovies,
};