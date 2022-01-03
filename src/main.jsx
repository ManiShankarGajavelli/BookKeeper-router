import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './main.css';
import Invoices from './routes/invoices';
import Expenses from './routes/expenses';
import Invoice from './routes/invoice';

let rootElement = document.getElementById('app');
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path=":invoiceId" element={<Invoice />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </Router>,
  rootElement
);
