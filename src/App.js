
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Calculator from './component/Calculator';
import Settings from './component/Settings';
function App() {

 
  return (
    <>
    <div>
    </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Calculator" element={<Calculator/>}></Route>
      <Route path="/Settings" element={<Settings/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
