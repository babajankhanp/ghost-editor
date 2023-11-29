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
      MONGO_DB_URI:"mongodb+srv://sahildhingra:dhingra123@cluster0.b4wkhun.mongodb.net/ghostwriter?retryWrites=true&w=majority",
       COSMO_DB_URI:"mongodb+srv://sahildhingra:dhingra123@cluster0.b4wkhun.mongodb.net/ghostwriter?retryWrites=true&w=majority"

    };
    break;
  case 'production':
    appEnv = {
      WEALTHY_CDN: 'https://i.wlycdn.com',
      IS_PRODUCTION: true,
      MONGO_DB_URI:"mongodb+srv://sahildhingra:dhingra123@cluster0.b4wkhun.mongodb.net/ghostwriter?retryWrites=true&w=majority",
      COSMO_DB_URI:"mongodb+srv://sahildhingra:dhingra123@cluster0.b4wkhun.mongodb.net/ghostwriter?retryWrites=true&w=majority",
    };
    break;
  default:
    appEnv = {
      WEALTHY_CDN: 'https://i.wlycdn.com',
      IS_LOCAL: true,
      IS_PRODUCTION: false,
      MONGO_DB_URI:"mongodb+srv://sahildhingra:dhingra123@cluster0.b4wkhun.mongodb.net/ghostwriter?retryWrites=true&w=majority",
      COSMO_DB_URI:"mongodb+srv://sahildhingra:dhingra123@cluster0.b4wkhun.mongodb.net/ghostwriter?retryWrites=true&w=majority"
    };
    break;
}

module.exports = appEnv;
