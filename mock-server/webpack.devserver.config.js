const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
// use to update cacheData at every first time
const cacheMap = {};
const USE_CACHE = process.env.USE_CACHE - 0;
const dirToCacheData = 'mocks';

const apiHost = 'https://mv.accureanalytics.com';
const origin = 'https://mv.accureanalytics.com';

function getFileByUrl(url) {
  return path.join(__dirname, 'apis', url + '.json');
}

function getFilePathByUrl(url) {
  const fileName = url.replace(/\//g, '@').split('?')[0];
  const dirPath = path.resolve(__dirname, `${dirToCacheData}`);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
  return `${dirPath}/${fileName}.json`;
}

async function responseWithFile(req, res, force) {
  const filePath = getFilePathByUrl(req.url);
  if (fs.existsSync(filePath) && (cacheMap[filePath] || force)) {
    console.log('loading from cache'); // eslint-disable-line
    const cachedData = await fs.readFile(filePath, 'utf8');
    res.writeHead(200);
    res.write(cachedData);
    res.end();
    return true;
  }
  return false;
}

function cacheData(req, res) {
  const filePath = getFilePathByUrl(req.url);
  switch (res.headers['content-encoding']) {
    // or, just use zlib.createUnzip() to handle both cases
    case 'gzip':
      res.pipe(zlib.createGunzip()).pipe(fs.createWriteStream(filePath));
      break;
    default:
      res.pipe(fs.createWriteStream(filePath));
      break;
  }
  cacheMap[filePath] = true;
}

function ifUseCache(req) {
  return USE_CACHE && !req.url.startsWith('/keep-alive') && req.method === 'GET';
}


module.exports = {
  host: '127.0.0.1',
  port: 3000,
  open: true,
  inline: true,
  stats: 'minimal',
  historyApiFallback: {
    index: '/index.html'
  },
  proxy: {
    '/v1/': {
      target: apiHost,
      headers: {
        referer: origin,
        origin,
        'Access-Control-Allow-Origin': '*'
      },
      disableHostCheck: true,
      compress: true,
      passphrase: 'password',
      changeOrigin: true,
      secure: true,
      clientLogLevel: 'error',
      onProxyReq: async (proxyReq, req, res) => {
        console.log('proxy url', req.url); // eslint-disable-line
        const usedCache = await ifUseCache(req) && responseWithFile(req, res);
        !usedCache && console.log('loading from server'); // eslint-disable-line
      },
      onProxyRes: (proxyRes, req) => {
        ifUseCache(req) && cacheData(req, proxyRes);
      },
    }
  },
  before(app) {
    // app = Express server
    app.get('/signin', (req, res) => {
      const filePath = getFileByUrl(req.originalUrl);
      if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
      } else {
        res.sendStatus(404);
      }
    });
    app.get('/userList', (req, res) => {
      const filePath = getFileByUrl(req.originalUrl);
      if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
      } else {
        res.sendStatus(404);
      }
    });
  }
};
