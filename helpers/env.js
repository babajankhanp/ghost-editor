/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

let appEnv;

switch (process.env.ENVIRONMENT) {
  case 'development':
    appEnv = {
      WEALTHY_CDN: 'https://i.wlycdn.com',
      IS_PRODUCTION: false,
      COSMO_DB_URI:"mongodb://mogngo-cosmos-dev:VALbD2k1j7AXN1P4jz4UIT0tEhnMcbDQ8G3sq0k370GxuGFlfeQ69MAnehfgCdkJWV2AR9jme2YLACDbtA3dhw==@mogngo-cosmos-dev.mongo.cosmos.azure.com:10255/ghost-writer?ssl=true&replicaSet=globaldb&retryWrites=false"
    };
    break;
  case 'production':
    appEnv = {
      WEALTHY_CDN: 'https://i.wlycdn.com',
      IS_PRODUCTION: true,
      COSMO_DB_URI:"mongodb://mogngo-cosmos-dev:VALbD2k1j7AXN1P4jz4UIT0tEhnMcbDQ8G3sq0k370GxuGFlfeQ69MAnehfgCdkJWV2AR9jme2YLACDbtA3dhw==@mogngo-cosmos-dev.mongo.cosmos.azure.com:10255/ghost-writer?ssl=true&replicaSet=globaldb&retryWrites=false"
    };
    break;
  default:
    appEnv = {
      WEALTHY_CDN: 'https://i.wlycdn.com',
      IS_LOCAL: true,
      IS_PRODUCTION: false,
      COSMO_DB_URI:"mongodb://mogngo-cosmos-dev:VALbD2k1j7AXN1P4jz4UIT0tEhnMcbDQ8G3sq0k370GxuGFlfeQ69MAnehfgCdkJWV2AR9jme2YLACDbtA3dhw==@mogngo-cosmos-dev.mongo.cosmos.azure.com:10255/ghost-writer?ssl=true&replicaSet=globaldb&retryWrites=false"
    };
    break;
}


// MONGO_DB_URI="mongodb+srv://sahildhingra:dhingra123@cluster0.b4wkhun.mongodb.net/ghostwriter?retryWrites=true&w=majority"

// COSMO_DB_URI="mongodb://mogngo-cosmos-dev:VALbD2k1j7AXN1P4jz4UIT0tEhnMcbDQ8G3sq0k370GxuGFlfeQ69MAnehfgCdkJWV2AR9jme2YLACDbtA3dhw==@mogngo-cosmos-dev.mongo.cosmos.azure.com:10255/ghost-writer?ssl=true&replicaSet=globaldb&retryWrites=false"

module.exports = appEnv;
