const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const HOST = 'localhost';
const PUBLIC_DIR = path.join(__dirname, 'public');

// MIME types mapping
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject'
};

// Create server
const server = http.createServer((req, res) => {
    // Parse request URL
    let pathname = req.url.split('?')[0]; // Remove query string

    // Decode URI component (handles spaces and special characters)
    try {
        pathname = decodeURIComponent(pathname);
    } catch (err) {
        res.statusCode = 400;
        res.end('Bad Request');
        return;
    }

    // Default to index.html for root
    if (pathname === '/') {
        pathname = '/index.html';
    }

    // Route handling for specific paths
    if (pathname === '/about') {
        pathname = '/potifoile2about.html';
    } else if (pathname === '/projects' || pathname === '/portfolio') {
        pathname = '/potifoile2contant.html';
    } else if (pathname === '/skills') {
        pathname = '/potifoile2skill.html';
    } else if (pathname === '/contact') {
        pathname = '/potifoile2contant.html';
    }

    // Construct file path
    let filepath = path.join(PUBLIC_DIR, pathname);

    // Security: prevent directory traversal
    const resolvedPath = path.resolve(filepath);
    
    if (!resolvedPath.startsWith(path.resolve(PUBLIC_DIR))) {
        res.statusCode = 403;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Forbidden');
        return;
    }

    // Check if file exists
    fs.stat(filepath, (err, stats) => {
        if (err || !stats.isFile()) {
            // If not found and not an image/static file, try index.html for SPA routing
            if (pathname !== '/index.html' && !pathname.includes('.')) {
                filepath = path.join(PUBLIC_DIR, 'index.html');
                fs.readFile(filepath, (err, data) => {
                    if (err) {
                        res.statusCode = 500;
                        res.setHeader('Content-Type', 'text/plain');
                        res.end('Internal Server Error');
                        return;
                    }
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.setHeader('Cache-Control', 'no-cache');
                    res.end(data);
                });
            } else {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Not Found: ' + pathname);
            }
            return;
        }

        // Read and serve the file
        fs.readFile(filepath, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Internal Server Error');
                return;
            }

            // Determine content type
            const ext = path.extname(filepath).toLowerCase();
            const contentType = mimeTypes[ext] || 'application/octet-stream';

            res.statusCode = 200;
            res.setHeader('Content-Type', contentType);
            res.setHeader('Cache-Control', 'public, max-age=3600');
            
            // Add CORS headers for images
            if (contentType.startsWith('image/')) {
                res.setHeader('Access-Control-Allow-Origin', '*');
            }
            
            res.end(data);
        });
    });
});

// Start server
server.listen(PORT, HOST, () => {
    console.log(`
╔════════════════════════════════════════════════════╗
║   🚀 Portfolio Server Running Successfully!        ║
║                                                    ║
║   📍 Server Address:                               ║
║      http://${HOST}:${PORT}                             ║
║                                                    ║
║   📁 Serving from: ./public                        ║
║   ⌚ Waiting for connections...                    ║
║   Press Ctrl+C to stop the server                 ║
╚════════════════════════════════════════════════════╝
    `);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`\n❌ Port ${PORT} is already in use!`);
        console.error(`\nTo fix this:`);
        console.error(`1. Run: netstat -ano | findstr :${PORT}`);
        console.error(`2. Then: taskkill /PID <PID> /F`);
        console.error(`\nOr use a different port:`);
        console.error(`   PORT=3001 node server.js\n`);
        process.exit(1);
    }
});

