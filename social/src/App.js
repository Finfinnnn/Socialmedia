// import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Newpost from './components/Newpost';
import './App.css';

function App() {
  return (
    <div> <Newpost/> </div>
    // <BrowserRouter>
    //     <Routes>
    //       <Route path='/' element={<Newpost/>}></Route>
    //       <Route path='/Post' element={<Post />}></Route>        
    //     </Routes>
    // </BrowserRouter>
  
  );
};

export default App;
