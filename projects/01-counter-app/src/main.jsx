import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HelloWorld'
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp/>
        <FirstApp title="Hola Prop 2" subtitle={123}/>
        <CounterApp value={20}></CounterApp>
    </React.StrictMode>
)