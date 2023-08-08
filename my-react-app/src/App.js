import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import WorkExperience from './pages/WorkExperienceCard';
import TechSummary from './pages/TechSummaryCard.js';
import EduCation from './pages/EduCationCard.js';
import { ThemeProvider } from "./components/ThemeContext";
import './assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {

  return (
    <>
       <title> Resume </title>
      <body className="dark-mode" />
      <ThemeProvider>
      <BrowserRouter>
        <Routes>

          <Route path='work-Experience' element={<WorkExperience />} />
          <Route path='tech-Summary' element={<TechSummary />} />
          <Route path='Education' element={<EduCation/>} />
          // <Route index element={<Navigate to='/work-Experience' />} />
        </Routes>
        
      </BrowserRouter>
      </ThemeProvider>
    

    </>
  );
} 




export default App;
