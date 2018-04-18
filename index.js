var chokidar = require('chokidar');

chokidar.watch('src/**/*.{sass,scss}').on('all', (event, path) => {
  console.log(event, path);
});
