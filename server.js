const next = require('next');
const http = require('http');
const url = require('url');

const port = process.env.PORT || 3000;

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    http.createServer((req, res) => {
        // parse request url to get its pathname
        const parsedUrl = url.parse(req.url, true);
        const { pathName } = parsedUrl;
        // if service worker requested, serve it as a static file
        if (pathName === '/service-worker.js') {
            console.log(path)
            const filePath = path.join(__dirname, '.next', pathName);
            app.serveStatic(req, res, filePath);
        } else {
            // let next take care of it
            handle(req, res, parsedUrl);
        }
    }).listen(port, () => {
        console.log('listening on port: ', port);
    })
})