const express = require('express');
const path = require('path');
const cors = require('cors');
const request = require('request');

const app = express();

app.use(cors());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// An api endpoint that returns a short list of items
app.all('/api', (req,res) => {
  var newurl = 'http://localhost:5005/webhooks/rest/webhook';
  console.log(newurl);
  
  const r = req.pipe(request.post(newurl));
  console.log(r);
  r.pipe(res);
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'../build/index.html'));
});

const port = 80;
app.listen(port);

console.log('App is listening on port ' + port);
