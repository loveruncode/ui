import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Sinhvien from '../src/components/Login/uiSinhVien/uisinhvien'
import Page404 from './components/Page404/Page404';

function App() {
  return (
   <div>

    <Routes>
      <Route path='/' element={ <Login/>}/>
      <Route path='/sinhvien'  element={<Sinhvien/>} />
      <Route path='*' element={<Page404/>} />
    </Routes>
   
   </div>
  );
}

export default App;
