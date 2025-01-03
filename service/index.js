const express = require('express');
const app = express();
const uuid = require('uuid');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');

const authCookieName = 'token';

app.use(express.json());

app.use(express.static('public'));

app.use(cookieParser());

app.set('trust proxy', true);

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });

apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUser(req.body.username);
  
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        setAuthCookie(res, user.token);
        res.send({ id: user._id, token: user.token });
        return;
      }
    }
    res.status(401).send({ msg: 'Unauthorized' });
  });
  

  apiRouter.post('/auth/create', async (req, res) => {
    if (await DB.getUser(req.body.username)) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = await DB.createUser(req.body.username, req.body.password);

      setAuthCookie(res, user.token);
    
      res.send({ id: user._id, token: user.token });
    }
  });
  

  apiRouter.delete('/auth/logout', (_req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
  });

  const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});
  

apiRouter.post('/newdeck', async (req, res) => {
    console.log('Request body:', req.body);

    const { username, imageUrl } = req.body;

    if (!username || !imageUrl) {
        return res.status(400).send({ msg: 'Username and Pokémon image are required' });
    }

    const newDeck = {username, imageUrl};
    await DB.addDeck(newDeck);
    const decks = await DB.getDecks();
    res.send({decks});
});


  apiRouter.get('/newdeck', async (req, res) => {
    const decks = await DB.getDecks();
    res.send({decks});
});

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);