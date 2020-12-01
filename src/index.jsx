import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'ui-neumorphism/dist/index.css';
import viewportUnitsBuggyfill from 'viewport-units-buggyfill';

viewportUnitsBuggyfill.init();

ReactDOM.render(<App />, document.getElementById('root'));
