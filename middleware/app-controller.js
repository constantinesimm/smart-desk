const fs = require('fs');
const express = require('express');
const { createReadStream } = require('fs');

const {
  app: {
    indexFile,
    staticPath
  },
  api
} = require('../config');

const concatApiRoutes = app => {
  const readDir = path => fs.readdirSync(path);

  const apiModules = readDir(api.path);

  apiModules.forEach(apiModule => {
    const routes = readDir(`${ api.path }/${ apiModule }/routes`);

    for (const route of routes) {
      let endpoint;
      const routeName = route.replace('.js', '');
      const routeFile = `${ api.path }/${ apiModule }/routes/${ route }`;

      if (routeName === apiModule) endpoint = `/api/${ apiModule }`;
      else endpoint = `/api/${ apiModule }/${ routeName }`;

      app.use(endpoint, require(routeFile));
    }
  })
}

module.exports = app => {
  //recursive concat api routes from api directory
  concatApiRoutes(app);

  //set static path
  app.use(express.static(staticPath));

  // set default route that sends index.html to client
  app.get('/', (req, res) => {
    res.setHeader('content-type', 'text/html');

    createReadStream(indexFile, 'utf-8').pipe(res);
  });
}
