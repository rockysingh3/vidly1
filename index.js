const express = require('express');
const app = express();

const genres = [
    { id: 1, name: "horror" },
    { id: 2, name: "comedy" },
    { id: 3, name: "pornography" }
]

app.get('/', (req, res) => {
    res.send("Hi, welcome to the welcome page. You moron.");
})

app.get('/api/genres/:id', (req,res) => {
    const genre = genres.find(id => id.id === parseInt(req.params.id));
    res.send(genre);
});

app.post('/api/genres/:genreName', (req,res) => {
    const genre = {id: genres.length + 1, name: req.body.genreName};
    genres.push(genre);
    res.send(genre);
});


app.get('/api/genres/', (req,res) => {
    res.send(genres);
});

app.post('/api/genres')





const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`))