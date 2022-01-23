import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export const calculatorServiceRequest = axios.create({
    baseURL: process.env.url,
});

calculatorServiceRequest.interceptors.response.use((response) => {
    if (response.status > 400) {
        console.error(response);
        return;
    }
    return response.data.result;
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
