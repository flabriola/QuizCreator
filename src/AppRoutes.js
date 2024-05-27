import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateMenu from './Pages/CreateMenu';
import InputGpt from './Pages/InputGpt';
import InputJson from './Pages/InputJson';
import Quiz from './Pages/Quiz';
import How from './Pages/How';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/quiz" element={<CreateMenu />} />
        <Route path="/gpt-create" element={<InputGpt />} />
        <Route path="/json-create" element={<InputJson />} /> 
        <Route path='/quiz-game' element={<Quiz />} />
        <Route path='/how-to' element={<How />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

