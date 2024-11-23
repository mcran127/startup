const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');

const userCollection = db.collection('user');
const mainDecks = db.collection('decks')

(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

  function getUser(username) {
    return userCollection.findOne({ username: username });
  }
  
  function getUserByToken(token) {
    return userCollection.findOne({ token: token });
  }
  
  async function createUser(username, password) {
    const passwordHash = await bcrypt.hash(password, 10);
  
    const user = {
      username: username,
      password: passwordHash,
      token: uuid.v4(),
    };
    await userCollection.insertOne(user);
  
    return user;
  }

  async function addDeck(deck) {
    return mainDecks.insertOne(deck);
  }

  function getDecks(deck) {
    const pipeline = [
        { $project: { username: 1, imageUrl: 1 } },
        { $sample: { size: 8 } } 
      ];
  const cursor = mainDecks.aggregate(pipeline);
  return cursor.toArray();
  }

  module.exports = {
    getUser,
    getUserByToken,
    createUser,
    addDeck,
    getDecks,
  };