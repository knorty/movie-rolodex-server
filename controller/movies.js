const axios = require('axios');
const qs = require('qs');

const getMovies = (req, res) => {
    const query = qs.stringify({
        api_key: 'ffa9544f9617b768fcb7fde474d40490',
        language: 'en-US',
        page: 1,
        include_adult: false
    });

    axios.get(`https://api.themoviedb.org/3/movie/${req.body.type}?${query}`)
        .then(response => {
            res.send(response.data)
        })
        .catch(error => {
            res.status(500).send(error);
        });
}

const searchMovies = (req, res) => {
    const query = qs.stringify({
        api_key: 'ffa9544f9617b768fcb7fde474d40490',
        language: 'en-US',
        page: 1,
        include_adult: false,
        query: req.body.e
    });

    axios.get(`https://api.themoviedb.org/3/search/movie?${query}`)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            res.status(500).send(error);
        });
}

module.exports = {
    getMovies,
    searchMovies
}