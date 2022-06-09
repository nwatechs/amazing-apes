import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'
// App is the name of the function in ./App.js file

const application = ReactDOM.createRoot(document.getElementById('root'))


application.render(  
    // render is same like append
    <App />  
    // calling the function and <App/> is same as App()
)