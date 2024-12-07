import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Batches from './pages/Batches';
import './index.css'; // Adjust the path if needed
import CreateBatch from './pages/CreateBatchScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/batches" element={<Batches />} />
        <Route path="/create-batch" element={<CreateBatch/>} />

      </Routes>
    </Router>
  );
}

export default App;
