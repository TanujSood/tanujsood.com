import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA4 from 'ga-4-react';

const ga4react = new ReactGA4("G-3PHRCQD17P");
ga4react.initialize().then().catch()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

try {
  setTimeout(_ => {
    const ga4react = new ReactGA4("G-3PHRCQD17P");
    ga4react.initialize().catch(err => console.error(err));
  }, 4000);
} catch (err) {
      console.error(err);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

