const express = require('express');
const app = express();
const uuid = require('uuid');

let users = {};
let MainList = {};

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

apiRouter.post('/auth/login', (req, res) => {
    const { username, password } = req.body;
    const user = users[username];
  
    if (user && user.password === password) {
      res.send({ token: user.token });
    } else {
      res.status(401).send({ msg: 'Invalid credentials' });
    }
  });
  

  apiRouter.post('/auth/create', async (req, res) => {
    const existingUser = users[req.body.username];
    console.log(existingUser);
    if (existingUser) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const newUser = { username: req.body.username, password: req.body.password, token: uuid.v4() };
      users[newUser.username] = newUser;
    
      res.send({ token: newUser.token });
    }
  });
  

apiRouter.delete('/auth/logout', (req, res) => {
    const user = Object.values(users).find((u) => u.token === req.body.token);
    if (user) {
      delete user.token;
    }
    res.status(204).end();
});