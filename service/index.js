const express = require('express');
const app = express();
const uuid = require('uuid');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const DB = require('./database.js');

const authCookieName = 'token';

let users = {};
let MainList = [];

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });

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
    if (existingUser) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const newUser = { username: req.body.username, password: req.body.password, token: uuid.v4() };
      users[newUser.username] = newUser;
    
      res.send({ token: newUser.token });
    }
  });
  

apiRouter.delete('/auth/logout', (req, res) => {
    const { token } = req.body;

  if (!token) {
    return res.status(400).send({ msg: 'Token is required' });
  }

  const user = Object.values(users).find((u) => u.token === token);
  
  if (user) {
    delete user.token;
    res.status(204).end();
  } else {
    res.status(404).send({ msg: 'User not found' });
  }
});

apiRouter.post('/newdeck', (req, res) => {
    console.log('Request body:', req.body);

    const { username, imageUrl } = req.body;

    if (!username || !imageUrl) {
        return res.status(400).send({ msg: 'Username and Pokémon image are required' });
    }

    MainList.unshift({ username, imageUrl });

    if (MainList.length > 8) {
        MainList.pop();
    }

    console.log('MainList updated:', MainList);
    
    res.status(200).send({ msg: 'Deck updated successfully' });
});


  apiRouter.get('/newdeck', (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(400).send({ msg: 'Token is required' });

    const user = Object.values(users).find(u => u.token === token);
    if (!user) return res.status(404).send({ msg: 'User not found' });

    const userDecks = MainList.filter(deck => deck.username === user.username);
    res.json({ decks: userDecks });
});

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}