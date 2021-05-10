const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello world !!');
});

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});