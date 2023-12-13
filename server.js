/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const PORT = process.env.SERVER_PORT || 9008;

// enforceStrictRouting middleware
function enforceStrictRouting(req, res, next) {
  if (req.path.endsWith('/') && req.path.length > 1) {
    const newPath = req.path.slice(0, -1);
    return res.redirect(301, newPath);
  }
  next();
}

app
  .prepare()
  .then(() => {
    const server = express();
    server.use((req, res, next) => {
      enforceStrictRouting(req, res, next);
    });

    server.get('/health', (req, res) => res.send('Hello From GhostWriter!'));

    server.get('/dashboard', (req, res) => {
      const actualPage = '/dashboard';
      const queryParams = {id: req.params.id};
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/template/:templateId', (req, res) => {
      const actualPage = '/template';
      const queryParams = {
        templateId: req.params.templateId
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      req.url = req.url.replace(/\/$/, '');
      if (req.url === '') {
        req.url = '/';
      }
      return handle(req, res);
    });

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
