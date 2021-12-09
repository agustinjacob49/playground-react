const React = require('react');
const View = require('./view');

exports.render = function render(req, res) {
    const Home = props => (
        <View {...props} />
    );
  
    /**
     * Render View
     */
    res.render(
      Home
    );
  };

