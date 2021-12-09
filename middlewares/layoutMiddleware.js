const ReactDOMServer = require('react-dom/server');
const React = require('react');

const layoutMiddleware = (req, res, next) => {

    const resRender = (Component) => {
        ReactDOMServer.renderToString(Component);
    };

    // Sobreescribo el res.render
    res.render = resRender;
    next();
};

module.exports = layoutMiddleware;