const { MongoClient } = require('mongodb');

async function connectToDatabase() {
  const client = await MongoClient.connect('mongodb+srv://rivaslina:rQbnSMvYNaSey0Ia@lawatty.rtzdvdd.mongodb.net/lawattyBD?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return client;
}



test('Database connection test', async () => {
  const client = await connectToDatabase();
  const db = client.db();
  const collection = db.collection('users');
  expect(collection).toBeTruthy();
  client.close();
});