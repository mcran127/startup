const express = require('express');
const app = express();
const uuid = require('uuid');

let users = {};
let MainList = {};

app.use(express.json());

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

apiRouter.post('/auth/create', async (req, res) => {
    const user = users[req.body.username];
    if (user) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = { username: req.body.username, password: req.body.password, token: uuid.v4() };
      users[user.username] = user;
  
      res.send({ token: user.token });
    }
  });