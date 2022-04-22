import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App';
import './global.css'

let container = document.getElementById("root")
createRoot(container).render(<App/>)