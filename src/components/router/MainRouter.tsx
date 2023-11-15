import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../Home';
import { ErrorRoute } from '../ErrorRoute';

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<ErrorRoute />} />
      </Routes>
    </BrowserRouter>
  );
};
