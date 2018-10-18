const express = require('express');
const path = require('path');
const logger = require('morgan');

const httpProxy = require('http-proxy');

const app = express();

// Proxy to API
const apiProxy = httpProxy.createProxyServer({
  target: 'http://localhost:3001',
});
// Middleware which retreived resources
// from api over the proxy
app.use('/api', (req, res) => {
  apiProxy.web(req, res);
});

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

module.exports = app;
