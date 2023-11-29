const MongoClient = require('mongodb').MongoClient;
import { appEnv } from '@/helpers';
// const connectionString = 'mongodb://mogngo-cosmos-dev:VALbD2k1j7AXN1P4jz4UIT0tEhnMcbDQ8G3sq0k370GxuGFlfeQ69MAnehfgCdkJWV2AR9jme2YLACDbtA3dhw==@mogngo-cosmos-dev.mongo.cosmos.azure.com:10255/?ssl=true';

const connectionString = `${appEnv.MONGO_DB_URI}`

const client = new MongoClient(connectionString);

export default  async function dbConnect() {
  try {
    await client.connect();
    console.log('Connected to Azure Cosmos DB successfully.');
    return client;
  } catch (error) {
    console.error('Failed to connect to Azure Cosmos DB:', error);
    throw error;
  }
};
