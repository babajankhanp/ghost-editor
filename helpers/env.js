/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

let appEnv;

switch (process.env.ENVIRONMENT) {
  case 'development':
    appEnv = {
      WEALTHY_CDN: 'https://i.wlycdn.com',
      IS_PRODUCTION: false
    };
    break;
  case 'production':
    appEnv = {
      WEALTHY_CDN: 'https://i.wlycdn.com',
      IS_PRODUCTION: true
    };
    break;
  default:
    appEnv = {
      WEALTHY_CDN: 'https://i.wlycdn.com',
      IS_LOCAL: true,
      IS_PRODUCTION: false
    };
    break;
}

module.exports = appEnv;
