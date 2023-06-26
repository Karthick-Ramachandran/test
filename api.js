// lamda to call another api with express

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const axios = require('axios');

var cors = require('cors');
app.use(cors());


app.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const response = await axios.post("https://smqrnqflls6bu3zbbzrib56mpe0rjnwa.lambda-url.us-west-1.on.aws/'", {
            "inputs": req.body.inputs
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
        });
       return res.json(response.data);
    } catch (error) {
        console.error(error);
    }
});


// run in port 3000
app.listen(3000, () => console.log('Server running on port 3000'))