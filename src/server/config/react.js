/**
 * React Boot
 *
 */

const React = require('react');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const { Provider } = require('react-redux');
const { combineReducers, createStore } = require('redux');
const { StaticRouter } = require('react-router-dom');
const { renderToString } = require('react-dom/server');
const reducers = require('@ducks/reducers');
const App = require('@containers/app');

const readFile = promisify(fs.readFile);
const indexHtmlFile = path.resolve('src/server/views/index.html');

const renderPage = async (html, css, clientJs, preloadedState) => {
  const injections = {
    '<!--INJECT:SCRIPT-->': `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script>`,
    '<!--INJECT:CSS-->': css,
    '<!--INJECT:JS-->': clientJs,
    '<!--INJECT:ROOT-->': `<div id="root">${html}</div>`
  };
  return readFile(indexHtmlFile, 'utf8')
    .then((data) => {
      let renderedHtml = data;
      Object.keys(injections).forEach((key) => {
        renderedHtml = renderedHtml.replace(key, injections[key]);
      });
      return renderedHtml;
    });
};

const renderReact = async (req, res) => {
  const combinedReducers = combineReducers({
    ...reducers
  });

  const store = createStore(combinedReducers);

  const context = {};
  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    </Provider>
  );

  if (context.url) {
    return res.redirect(context.url);
  }
  const { assets: { client } } = req;
  const css = (client && client.css) ? `<link rel="stylesheet" href="${client.css}">` : '';
  const clientJs = process.env.NODE_ENV === 'production' ? `<script src="${client.js}" defer></script>` : `<script src="${client.js}" defer crossorigin></script>`;
  const renderedHtml = await renderPage(markup, css, clientJs, store.getState());
  res.status(200);
  return res.send(
    renderedHtml
  );
};

module.exports = renderReact;
