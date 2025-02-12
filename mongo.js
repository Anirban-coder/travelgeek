const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function main() {
  await client.connect();
  console.log('Connected to MongoDB');
  
  const database = client.db('myDatabase');
  const collection = database.collection('myCollection');
  
  // Fetch data
  const results = await collection.find({}).toArray();
  console.log(results);
}

main().catch(console.error);