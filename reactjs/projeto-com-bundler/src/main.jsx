import ReactDOM from 'react-dom/client'

import { ConfigProvider } from 'antd';
import ptBr from 'antd/locale/pt_BR';

ptBr.DatePicker.lang.placeholder = 'Selecionar dia';

// import './index.css'

import App from './App.jsx'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider locale={ptBr}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
