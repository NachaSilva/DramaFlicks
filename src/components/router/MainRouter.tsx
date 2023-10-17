import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../Home';


export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
};
