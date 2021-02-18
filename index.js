const express = require('express');
const cors = require('cors');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
});

const corsOptions = {
    origin: 'http://example.com, vscode-file://vscode-app'
}

app.get('/api', cors(corsOptions), (req, res) => {
    res.json({ success: 'yes' });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});