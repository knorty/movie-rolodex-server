const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const movies = require('./controller/movies');
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.post('/retrieve', movies.getMovies)
app.post('/search-movies', movies.searchMovies)
app.listen(3001, () => console.log('Listening on port 3001'));